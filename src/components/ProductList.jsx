import { useFilterContext } from '../context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
	const {
		state: { filteredProducts, gridView },
	} = useFilterContext();

	if (filteredProducts.length < 1) {
		return <h4>Sorry, no products to display...</h4>;
	}

	if (!gridView) {
		return <ListView products={filteredProducts} />;
	}

	return <GridView products={filteredProducts} />;
};

export default ProductList;
