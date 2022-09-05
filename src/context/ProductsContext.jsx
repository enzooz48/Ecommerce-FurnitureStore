import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE,
	GET_PRODUCTS_BEGIN,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR,
	GET_DETAIL_PRODUCT_BEGIN,
	GET_DETAIL_PRODUCT_SUCCESS,
	GET_DETAIL_PRODUCT_ERROR,
} from '../Actions';
import { products_url as url } from '../data';
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

	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
	};

	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
	};

	const fetchProducts = async (url) => {
		dispatch({ type: GET_PRODUCTS_BEGIN });
		try {
			const response = await axios.get(url);
			const products = response.data;
			dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
		} catch (error) {
			dispatch({ type: GET_PRODUCTS_ERROR });
		}
	};

	const fetchDetailProduct = async (url) => {
		dispatch({ type: GET_DETAIL_PRODUCT_BEGIN });
		try {
			const response = await axios.get(url);
			const products = response.data;
			dispatch({ type: GET_DETAIL_PRODUCT_SUCCESS, payload: products });
		} catch (error) {
			dispatch({ type: GET_DETAIL_PRODUCT_ERROR });
		}
	};

	useEffect(() => {
		fetchProducts(url);
	}, []);
	return (
		<ProductsContext.Provider
			value={{ state, openSidebar, closeSidebar, fetchDetailProduct }}>
			{children}
		</ProductsContext.Provider>
	);
};
// make sure use
export const useProductsContext = () => {
	return useContext(ProductsContext);
};
