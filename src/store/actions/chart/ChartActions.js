export const ADD_ITEMS = 'ADD_ITEMS';
export const REMOVE_ITEMS = 'REMOVE_ITEMS';

export const addItems = (payload) => ({
    type: ADD_ITEMS,
    payload,
});

export const removeItems = (payload) => ({
    type: REMOVE_ITEMS,
    payload,
});
