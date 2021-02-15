export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const ADD_PRODUCTS_SUCCESS = 'ADD_PRODUCTS_SUCCESS';
export const ADD_PRODUCTS_FAILED = 'ADD_PRODUCTS_FAILED';
export const CLEAN_PRODUCT_FORM = 'CLEAN_PRODUCT_FORM';
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

export const addProducts = (payload) => ({
    type: ADD_PRODUCTS,
    payload,
});

export const addProductsSuccess = (payload) => ({
    type: ADD_PRODUCTS_SUCCESS,
    payload,
});

export const addProductsFailed = (error) => ({
    type: ADD_PRODUCTS_FAILED,
    payload: error,
});

export const cleanProductForm = () => ({
    type: CLEAN_PRODUCT_FORM,
});
