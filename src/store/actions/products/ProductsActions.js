export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';

export const fetchGetProducts = () => ({
   type: GET_PRODUCTS, 
});

export const fetchGetProductsSuccess = (payload) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload,
});

export const fetchGetProductsFailed = (error) => ({
    type: GET_PRODUCTS_FAILED,
    payload: error,
});
