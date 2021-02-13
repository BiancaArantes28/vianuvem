import { call, put, takeLatest } from 'redux-saga/effects';
import {
    GET_PRODUCTS,
    fetchGetProductsSuccess,
    fetchGetProductsFailed,
} from '../../actions/products/ProductsActions';
import { getAPIURL } from '../../../config/getPATH';
import { fetchGet } from '../sagas.utils';

export function* doFetchProducts() {
    try {
        const url = `${getAPIURL()}/api/products/list`;
        
        const payload = yield call(fetchGet, url);
        yield put(fetchGetProductsSuccess(payload));
    } catch (error) {
        yield put(fetchGetProductsFailed(error));
    }
}

export const ProductsSagas = [
    takeLatest(GET_PRODUCTS, doFetchProducts),
];
