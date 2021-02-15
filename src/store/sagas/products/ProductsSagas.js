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
        const imgs = [
            'https://images-americanas.b2w.io/produtos/01/00/img/1299774/4/1299774456_1GG.jpg',
            'https://images-americanas.b2w.io/produtos/01/00/img/2575108/6/2575108611_1GG.jpg',
            'https://images-americanas.b2w.io/produtos/01/00/img/2872269/4/2872269488_1GG.jpg',
            'https://images-americanas.b2w.io/produtos/01/00/img/1865734/0/1865734054_1GG.jpg',
            'https://images-americanas.b2w.io/produtos/1836968361/imagens/smartband-xiaomi-miband-5-versao-global/1836968361_1_large.jpg',
            'https://images-americanas.b2w.io/produtos/01/00/img/2795766/4/2795766480_1GG.jpg',
        ];
        const data = yield call(fetchGet, url);
        const payload = data.map(d => {
            return {
                id: d.id,
                name: d.name,
                price: d.price,
                qtd: d.qtd,
                img: imgs[Math.floor(Math.random() * imgs.length)],
            };
        })
        yield put(fetchGetProductsSuccess(payload));
    } catch (error) {
        yield put(fetchGetProductsFailed(error));
    }
}

export const ProductsSagas = [
    takeLatest(GET_PRODUCTS, doFetchProducts),
];
