import {
	GET_PRODUCTS_BEGIN,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR,
	GET_DETAIL_PRODUCT_BEGIN,
	GET_DETAIL_PRODUCT_SUCCESS,
	GET_DETAIL_PRODUCT_ERROR,
} from '../Actions';

const ProductsReducer = (state, action) => {
	if (action.type === GET_PRODUCTS_BEGIN) {
		return { ...state, products_loading: true };
	}
	if (action.type === GET_PRODUCTS_SUCCESS) {
		const featuredProduct = action.payload.filter(
			(product) => product.featured === true
		);
		return {
			...state,
			products: action.payload,
			featured_products: featuredProduct,
			products_loading: false,
		};
	}
	if (action.type === GET_PRODUCTS_ERROR) {
		return { ...state, products_loading: false, products_error: true };
	}
	if (action.type === GET_DETAIL_PRODUCT_BEGIN) {
		return {
			...state,
			single_product_loading: true,
			single_product_error: false,
		};
	}
	if (action.type === GET_DETAIL_PRODUCT_SUCCESS) {
		return {
			...state,
			single_product: action.payload,
			single_product_loading: false,
		};
	}
	if (action.type === GET_DETAIL_PRODUCT_ERROR) {
		return {
			...state,
			single_product_loading: false,
			single_product_error: true,
		};
	}

	throw new Error(`No Matching "${action.type}" - action type`);
};

export default ProductsReducer;
