import { useEffect, useState } from 'react';
import ProductAPI from '../../api/ProductAPI';
import Product from './components/Product';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
	const [featured, setFeatured] = useState([]);

	useEffect(() => {
		let isMounted = true;
		const fetchData = async () => {
			const response = await ProductAPI.getAPI();
			const data = response.data.slice(0, 3);
			if (isMounted) setFeatured(data);
		};
		fetchData();

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="featured__container">
			<div className="featured__title">
				<h2>featured products</h2>
				<div className="featured__title-underline"></div>
			</div>
			<div className="section-center featured">
				{featured.map((product) => {
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
