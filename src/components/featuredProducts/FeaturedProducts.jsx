import Product from './components/Product';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';
import { useProductsContext } from '../../context/ProductsContext';

const FeaturedProducts = () => {
	const { featured_products: featured } = useProductsContext();
	return (
		<div className="section">
			<div className="title">
				<h2>featured products</h2>
				<div className="underline"></div>
			</div>
			<div className="section-center featured">
				{featured.slice(0, 3).map((product) => {
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
