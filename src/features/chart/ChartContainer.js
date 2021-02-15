import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItems, removeItems } from '../../store/actions/chart/ChartActions';
import ChartComponent from './ChartComponent';

const ChartContainer = () => {
    const { items, total } = useSelector((state) => state.chart);
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const addItemChart = useCallback((item) => {
        let product = products.filter(p => item.id === p.id);
        if (item.qtd < parseInt(product[0].qtd)) {
            dispatch(addItems(item));
        }
    }, [dispatch]);

    const removeItemChart = useCallback((item) => {
        dispatch(removeItems(item));
    }, [dispatch]);

    return (
        <ChartComponent 
            addItemChart={addItemChart}
            items={items}
            removeItemChart={removeItemChart}
            total={total}
        />
    );
}

export default ChartContainer;
