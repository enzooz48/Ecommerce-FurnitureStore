import React, { useContext, useEffect, useReducer } from 'react';
import {
	GET_PRODUCTS_BEGIN,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR,
	GET_DETAIL_PRODUCT_BEGIN,
	GET_DETAIL_PRODUCT_SUCCESS,
	GET_DETAIL_PRODUCT_ERROR,
} from '../Actions';
import ProductAPI from '../api/ProductAPI';
import ProductsReducer from '../reducers/ProductsReducer';

const initialState = {
	products_loading: false,
	products_error: false,
	products: [],
	featured_products: [],
	detail_product_loading: false,
	detail_product_error: false,
	detail_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ProductsReducer, initialState);

	const fetchProducts = async () => {
		dispatch({ type: GET_PRODUCTS_BEGIN });
		try {
			const response = await ProductAPI.getAPI();
			const products = response.data;
			dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
		} catch (error) {
			dispatch({ type: GET_PRODUCTS_ERROR });
		}
	};
	const fetchDetailProduct = async () => {
		dispatch({ type: GET_DETAIL_PRODUCT_BEGIN });
		try {
			const response = await ProductAPI.getAPI();
			const products = response.data;
			dispatch({ type: GET_DETAIL_PRODUCT_SUCCESS, payload: products });
		} catch (error) {
			dispatch({ type: GET_DETAIL_PRODUCT_ERROR });
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);
	return (
		<ProductsContext.Provider value={{ ...state, fetchDetailProduct }}>
			{children}
		</ProductsContext.Provider>
	);
};
// make sure use
export const useProductsContext = () => {
	return useContext(ProductsContext);
};
