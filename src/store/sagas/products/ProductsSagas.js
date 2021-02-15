import { call, put, takeLatest } from 'redux-saga/effects';
import {
    GET_PRODUCTS,
    fetchGetProducts,
    fetchGetProductsSuccess,
    fetchGetProductsFailed,
    ADD_PRODUCTS,
    addProductsSuccess,
    addProductsFailed,
} from '../../actions/products/ProductsActions';
import { getAPIURL } from '../../../config/getPATH';
import { fetchGet, fetchPost } from '../sagas.utils';

export function* doFetchProducts() {
    try {
        const url = `${getAPIURL()}/api/products/list`;
        const data = yield call(fetchGet, url);
        yield put(fetchGetProductsSuccess(data));
    } catch (error) {
        yield put(fetchGetProductsFailed(error));
    }
}

export function* doAddProducts(action) {
    try {
        const url = `${getAPIURL()}/api/products/list`;
         yield call(fetchPost, url, action.payload);
        yield put(addProductsSuccess('Produto criado com sucesso!'));
        yield put(fetchGetProducts());
    } catch (error) {
        yield put(addProductsFailed(error));
    }
}

export const ProductsSagas = [
    takeLatest(GET_PRODUCTS, doFetchProducts),
    takeLatest(ADD_PRODUCTS, doAddProducts),
];
