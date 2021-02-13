import _ from 'lodash';
import {
    ADD_ITEMS,
    REMOVE_ITEMS,
} from '../../actions/chart/ChartActions';
import { status } from '../../../const/status';

const withoutError = (state) => _.omit(state, 'error');

const defaultState = {
    status: status.NOT_FETCHED,
    items: [],
    total: 0,
};

const addItemsSuccessfull = (state, payload) => {
    let itemsAux = state.items;
    let check = itemsAux.filter(p => p.id === payload.id)
    if (check.length > 0) {
        for(let i = 0; i < itemsAux.length; i++) {
            if (itemsAux[i].id === payload.id) {
                itemsAux[i].qtd = itemsAux[i].qtd + itemsAux[i].qtd;
            }
        }
    } else {
        itemsAux.push({
            id: payload.id,
            name: payload.name,
            price: payload.price,
            qtd: 1,
        });
    }
    
    const totalAux = parseFloat(state.total) + parseFloat(payload.price);

    return {
        ...withoutError(state),
        status: status.FETCHED,
        items: itemsAux,
        total: totalAux.toFixed(2),
    };
};

export default function products (state = defaultState, action) {
    switch (action.type) {
        case ADD_ITEMS:
            return addItemsSuccessfull(state, action.payload);
        default:
            return state;
    }
}
