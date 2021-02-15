import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGetProducts } from '../../store/actions/products/ProductsActions';
import { addItems, removeItems } from '../../store/actions/chart/ChartActions';
import { addProducts } from '../../store/actions/products/ProductsActions';

import HomeComponent from './HomeComponent';

const HomeContainer = () => {
    const { products } = useSelector((state) => state.products);
    const { items } = useSelector((state) => state.chart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetProducts());
    }, [dispatch]);

    const addItemChart = useCallback((item) => {
        dispatch(addItems(item));
    }, [dispatch]);

    const removeItemChart = useCallback((item) => {
        dispatch(removeItems(item));
    }, [dispatch]);

    const addProduct = useCallback(() => {
        let payload = {
            name: 'Teste 2',
            price: '2010.30',
            qtd: "11",
        };

        dispatch(addProducts(JSON.stringify(payload)));
    }, [dispatch]);
    return (
        <HomeComponent 
            addItemChart={addItemChart} 
            addProduct={addProduct}
            items={items} 
            products={products}
            removeItemChart={removeItemChart} />
    );
}

export default HomeContainer;
