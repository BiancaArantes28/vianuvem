import { all } from 'redux-saga/effects';
import { ProductsSagas } from './products/ProductsSagas';

export default function* rootSaga() {
    return yield all([
        ...ProductsSagas,
    ]);
}
