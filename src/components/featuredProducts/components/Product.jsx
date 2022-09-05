import { formatPrice } from '../../../utils/helpers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ image, name, price, id }) => {
	return (
		<article>
			<div className="product-container">
				<img src={image} alt={name} />
				<Link to={`/detail/${id}`} className="link">
					<FaSearch />
				</Link>
			</div>
			<footer>
				<h5>{name}</h5>
				<p>{formatPrice(price)}</p>
			</footer>
		</article>
	);
};

export default Product;
