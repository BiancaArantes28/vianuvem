import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGetProducts } from '../store/actions/products/ProductsActions';

import HomeComponent from './HomeComponent';

const HomeContainer = () => {
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetProducts());
    }, [dispatch]);

    return (
        <HomeComponent products={products} />
    );
}

export default HomeContainer;
