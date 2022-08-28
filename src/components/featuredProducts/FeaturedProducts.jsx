import { useEffect, useState } from 'react';
import ProductAPI from '../../api/ProductAPI';
import Product from './components/Product';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
	const [featured, setFeatured] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await ProductAPI.getAPI();
			const data = response.data.slice(0, 3);
			setFeatured(data);
		};
		fetchData();
	}, []);

	return (
		<div className="section">
			<div className="title">
				<h2>featured products</h2>
				<div className="underline"></div>
			</div>
			<div className="section-center featured">
				{featured.map((product) => {
					return <Product key={product.id} {...product} />;
				})}
			</div>
			<Link to="/shop" className="btn featured-btn">
				All Products
			</Link>
		</div>
	);
};

export default FeaturedProducts;
