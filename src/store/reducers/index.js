import { combineReducers } from 'redux';

import products from './products/ProductsReducer';
import chart from './chart/ChartReducer';

export default combineReducers({
    products,
    chart,
});