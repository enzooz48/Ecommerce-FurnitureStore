import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import AddToCart from '../../components/addToCart/AddToCart';
import PageHero from '../../components/PageHero';
import ProductImages from '../../components/productImages/ProductImages';
import { useProductsContext } from '../../context/ProductsContext';
import { formatPrice } from '../../utils/helpers';
import { single_product_url as url } from '../../data';
import Stars from '../../components/stars/Stars';
import Loading from '../Loading';
import Error from '../Error';

import './Detail.css';

const Detail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { state, fetchDetailProduct } = useProductsContext();
	const { detail_product_loading, detail_product_error, detail_product } =
		state;

	const {
		name,
		price,
		description,
		stock,
		stars,
		reviews,
		id: sku,
		company,
		images,
	} = detail_product;
	useEffect(() => {
		fetchDetailProduct(`${url}${id}`);
		// eslint-disable-next-line
	}, [id]);

	useEffect(() => {
		if (detail_product_error) {
			setTimeout(() => {
				navigate('/');
			}, 3000);
		}
		// eslint-disable-next-line
	}, [detail_product_error]);

	if (detail_product_loading) {
		return <Loading />;
	}

	if (detail_product_error) {
		return <Error />;
	}

	return (
		<main className="detail-container">
			<PageHero title={name} product={detail_product} />
			<div className="section section-center page detail-context">
				<Link to="/shop" className="btn">
					Back to shop
				</Link>
				<div className="product-center">
					<ProductImages images={images} />
					<section className="content">
						<h2>{name}</h2>
						<Stars stars={stars} reviews={reviews} />
						<h5 className="price">{formatPrice(price)}</h5>
						<p className="desc">{description}</p>
						<p className="info">
							<span>Available : </span>
							{stock > 0 ? 'In Stock' : 'Out of Stock'}
						</p>
						<p className="info">
							<span>SKU : </span>
							{sku}
						</p>
						<p className="info">
							<span>Brand : </span>
							{company}
						</p>
						<hr />
						{stock > 0 && <AddToCart product={detail_product} />}
					</section>
				</div>
			</div>
		</main>
	);
};

export default Detail;
