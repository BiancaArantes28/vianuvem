import _ from 'lodash';
import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILED,
} from '../../actions/products/ProductsActions';
import { status } from '../../../const/status';

const withoutError = (state) => _.omit(state, 'error');


const defaultState = {
    status: status.NOT_FETCHED,
    products: [],
};

const successfulFetchProducts = (state, payload) => {
    return {
        ...withoutError(state),
        status: status.FETCHED,
        products: payload,
    };
};

export default function products (state = defaultState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, status: status.INPROGRESS };
        case GET_PRODUCTS_SUCCESS:
            return successfulFetchProducts(state, action.payload);
        case GET_PRODUCTS_FAILED:
            return { ...state, error: action.payload, products: [] };
        default:
            return state;
    };
}
