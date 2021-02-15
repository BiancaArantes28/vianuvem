import _ from 'lodash';
import {
    ADD_PRODUCTS,
    ADD_PRODUCTS_SUCCESS,
    ADD_PRODUCTS_FAILED,
} from '../../actions/products/ProductsActions';
import { status } from '../../../const/status';

const withoutError = (state) => _.omit(state, 'error');

const defaultState = {
    status: status.NOT_FETCHED,
    message: '',
};

const successfulAddProducts = (state, payload) => {
    return {
        ...withoutError(state),
        status: status.FETCHED,
        message: payload,
    };
};

export default function productForm (state = defaultState, action) {
    switch (action.type) {
        case ADD_PRODUCTS:
            return { ...state, status: status.INPROGRESS };
        case ADD_PRODUCTS_SUCCESS:
            return successfulAddProducts(state, action.payload);
        case ADD_PRODUCTS_FAILED:
            return { ...state, message: action.payload, error: true };
        default:
            return state;

    }
}