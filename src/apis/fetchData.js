import queryString from 'query-string';
import { FETCH_TIMEOUT } from '../config/constants';
import store from '../redux/store';

const timeoutPromise = timeout =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Network timeout')), timeout),
  );

const fetchData = async (url, options) => {
  try {
    const fetchResult = await Promise.race([
      fetch(url, options),
      timeoutPromise(FETCH_TIMEOUT),
    ]);
    const data = await handleResponse(fetchResult);
    return {
      status: {
        success: true,
      },
      data: data.data,
    };
  } catch (error) {
    return {
      status: {
        success: false,
      },
      error: {
        message: error.message,
        errorData: error.error_data,
        errorCode: error.error_code,
      },
    };
  }
};

function handleResponse(response) {
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return handleJSONResponse(response);
  }
  if (
    (contentType && contentType.includes('text/plain')) ||
    contentType.includes('text/html')
  ) {
    return handleTextResponse(response);
  }
  throw new Error(`Sorry, content-type ${contentType} not supported`);
}

function handleJSONResponse(response) {
  return response.json().then(json => {
    if (json.status === 'OK') {
      return json;
    }
    return Promise.reject(json);
  });
}

function handleTextResponse(response) {
  return response.text().then(text => {
    if (response.ok) {
      return text;
    }
    return Promise.reject({
      message: text,
      status: response.status,
      statusText: response.statusText,
    });
  });
}

export const makeRequest = async ({
  baseUrl,
  method,
  signal,
  queryParams,
  bodyObj,
  token,
}) => {
  const { url, query } = queryString.parseUrl(baseUrl);
  const newQueryString = queryString.stringify({ ...query, ...queryParams });
  const newURL = newQueryString ? `${url}?${newQueryString}` : url;
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (token != null) {
    headers.Authorization = `Token ${token}`;

  } else {
    const state = store.getState();
    const currentAuthToken = state.main.userToken;
    currentAuthToken != null
      ? (headers.Authorization = `Token ${currentAuthToken}`)
      : null;
  }
  return fetchData(newURL, {
    method,
    signal,
    headers: headers,
    body: bodyObj ? JSON.stringify(bodyObj) : null,
  });
};
