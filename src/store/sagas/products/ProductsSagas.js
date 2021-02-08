import { call, put, takeLatest } from 'redux-saga/effects';
import {
    GET_PRODUCTS,
    fetchGetProductsSuccess,
    fetchGetProductsFailed,
} from '../../actions/products/ProductsActions';

export function* doFetchProducts() {
    try {
        const payload = [
            {
                id: '0',
                name: 'Xiaomi Inface',
                description: 'Aparelho Removedor de Cravos e Espinhas Xiaomi Inface 3 Níveis de Sucção 4 Ponteiras Branco',
                img: 'https://images-americanas.b2w.io/produtos/01/00/img/2014359/9/2014359903_1GG.jpg',
                qtd: 10,
                price: 350
            },
            {
                id: '1',
                name: 'Xiaomi Limpeza Facil',
                description: 'Aparelho Removedor de Cravos e Espinhas Xiaomi Inface 3 Níveis de Sucção 4 Ponteiras Branco',
                img: 'https://images-americanas.b2w.io/produtos/01/00/img/1754274/2/1754274235_1GG.jpg',
                qtd: 5,
                price: 100
            },
            {
                id: '2',
                name: 'Nintendo Switch',
                description: 'Console Nintendo Switch',
                img: 'https://images-americanas.b2w.io/produtos/01/00/img/1952648/5/1952648568_1GG.jpg',
                qtd: 5,
                price: 2600
            },
            {
                id: '3',
                name: 'TV Philco 50 polegadas',
                description: 'Smart TV Philco 50 polegadas ',
                img: 'https://images-americanas.b2w.io/produtos/01/00/img/1952648/5/1952648568_1GG.jpg',
                qtd: 3,
                price: 2199.99
            }
        ];

        yield put(fetchGetProductsSuccess(payload));
    } catch (error) {
        yield put(fetchGetProductsFailed(error));
    }
}

export const ProductsSagas = [
    takeLatest(GET_PRODUCTS, doFetchProducts),
];
