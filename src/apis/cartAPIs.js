import { makeRequest } from './fetchData';
import { API_BASE } from '../config/constants';

// export const fetchCartApi = () => {
//   const options = {
//     baseUrl: `${API_BASE}cart_items/`,
//     method: 'GET',
//     bodyObj: null,
//   };
//   return makeRequest(options);
// };

export function fetchCart() {
  return async dispatch => {
    dispatch(getCart())

    try {
      const options = {
        baseUrl: `${API_BASE}cart_items/`,
        method: 'GET',
        bodyObj: null,
      };
      const data = makeRequest(options);
      dispatch(getCartSuccess(data))
    } catch (error) {
      dispatch(getCartFailure())
    }
  }
}

export const addToCartApi = variantId => {
  const options = {
    baseUrl: `${API_BASE}cart_items/add/${variantId}/`,
    method: 'POST',
  };
  return makeRequest(options);
};

export const removeFromCartApi = variantId => {
  const options = {
    baseUrl: `${API_BASE}cart_items/remove/${variantId}/`,
    method: 'POST',
    bodyObj: {
      variant_id: variantId,
    },
  };
  return makeRequest(options);
};

export const deteleCartItemApi = variantId => {
  const options = {
    baseUrl: `${API_BASE}cart_items/delete/${variantId}/`,
    method: 'DELETE',
    bodyObj: null,
  };
  return makeRequest(options);
};
