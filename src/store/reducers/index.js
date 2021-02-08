import { combineReducers } from 'redux';

import products from './products/ProductsReducer';

export default combineReducers({
    products,
});