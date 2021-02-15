import { combineReducers } from 'redux';

import productForm from './products/ProductFormReducer';
import products from './products/ProductsReducer';
import chart from './chart/ChartReducer';

export default combineReducers({
    productForm,
    products,
    chart,
});