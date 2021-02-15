import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts, cleanProductForm } from '../../store/actions/products/ProductsActions';
import ProductFormComponent from './ProductFormComponent';

const ProductFormContainer = () => {
    const dispatch = useDispatch();
    const { message, error, success } = useSelector((state) => state.productForm);
    
    useEffect(() => {
        dispatch(cleanProductForm());
    }, [dispatch]);

    const addProduct = useCallback((payload) => {
        dispatch(addProducts(JSON.stringify(payload)));
    }, [dispatch]);

    return (
       <ProductFormComponent 
            addProduct={addProduct}
            message={message}
            error={error}
            success={success}
       />
    );
}

export default ProductFormContainer;