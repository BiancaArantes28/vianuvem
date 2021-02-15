import _ from 'lodash';
import {
    ADD_PRODUCTS,
    ADD_PRODUCTS_SUCCESS,
    ADD_PRODUCTS_FAILED,
    CLEAN_PRODUCT_FORM,
} from '../../actions/products/ProductsActions';
import { status } from '../../../const/status';

const withoutError = (state) => _.omit(state, 'error');
const withoutSuccess = (state) => _.omit(state, 'success');

const defaultState = {
    status: status.NOT_FETCHED,
    message: '',
};

const successfulAddProducts = (state, payload) => {
    return {
        ...withoutError(state),
        status: status.FETCHED,
        message: payload,
        success: true,
    };
};

const failedAddProducts = (state, payload) => {
    return {
        ...withoutSuccess(state),
        status: status.FETCHED,
        message: payload,
        error: true,
    };
};

const cleanForm = () => {
    return {
        success: false,
        error: false,
        status: status.NOT_FETCHED,
        message: '',
    };
}

export default function productForm (state = defaultState, action) {
    switch (action.type) {
        case ADD_PRODUCTS:
            return { ...state, status: status.INPROGRESS };
        case ADD_PRODUCTS_SUCCESS:
            return successfulAddProducts(state, action.payload);
        case ADD_PRODUCTS_FAILED:
            return failedAddProducts(state, action.payload);
        case CLEAN_PRODUCT_FORM:
            return cleanForm();
        default:
            return state;

    }
}