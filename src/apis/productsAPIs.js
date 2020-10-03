import { makeRequest } from './fetchData';
import { API_BASE } from '../config/constants';

export const getCategories = () => {
  const options = {
    baseUrl: API_BASE + 'category/',
    method: 'GET',
    bodyObj: null,
  };
  return makeRequest(options);
};

export const getSubCategories = categoryId => {
  const options = {
    baseUrl: API_BASE + 'category/' + categoryId + '/subcategory/',
    method: 'GET',
    bodyObj: null,
  };
  return makeRequest(options);
};

export const getProducts = (categoryId, currentPage, pageSize) => {
  const options = {
    baseUrl: API_BASE + 'category/' + categoryId + '/products/',
    method: 'GET',
    queryParams: {
      page: currentPage,
      page_size: pageSize,
    },
    bodyObj: null,
  };
  return makeRequest(options);
};

export const searchProducts = (query, currentPage, pageSize) => {
  const options = {
    baseUrl: API_BASE + 'product_search/',
    method: 'GET',
    queryParams: {
      search_key: query,
      page: currentPage,
      page_size: pageSize,
    },
    bodyObj: null,
  };
  return makeRequest(options);
};

export const getProductDetails = productId => {
  const options = {
    baseUrl: API_BASE + 'product/' + productId,
    method: 'GET',
    bodyObj: null,
  };
  return makeRequest(options);
};

// export const verifyResetCodeApi = (email, verificationCode) => {
//   const bodyObj = {
//     email: email,
//     verification_code: verificationCode,
//   };
//   const options = {
//     baseUrl: API_BASE + 'verify_reset_code/',
//     method: 'POST',
//     bodyObj: bodyObj,
//   };
//   return makeRequest(options);
// };

// export const resetPasswordApi = (newPassword, token) => {
//   const bodyObj = {
//     new_password: newPassword,
//   };
//   const options = {
//     baseUrl: API_BASE + 'reset_password/',
//     method: 'POST',
//     bodyObj: bodyObj,
//     token: token,
//   };
//   return makeRequest(options);
// };
