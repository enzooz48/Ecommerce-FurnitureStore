import Product from './components/Product';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';
import { useProductsContext } from '../../context/ProductsContext';
import Loading from '../../page/Loading';
import Error from '../../page/Error';

const FeaturedProducts = () => {
	const { state } = useProductsContext();
	const { products_loading, products_error, products } = state;

	if (products_loading) {
		return <Loading />;
	}

	if (products_error) {
		return <Error />;
	}

	return (
		<div className="section featured-section">
			<div className="title">
				<h2>featured products</h2>
				<div className="underline"></div>
			</div>
			<div className="section-center featured">
				{products.slice(0, 3).map((product) => {
					return <Product key={product.id} {...product} />;
				})}
			</div>
			<Link to="/shop" className="btn">
				All Products
			</Link>
		</div>
	);
};

export default FeaturedProducts;
