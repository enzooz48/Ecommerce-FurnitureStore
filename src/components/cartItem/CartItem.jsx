import { formatPrice } from '../../utils/helpers';
import AmountButtons from '../amountButtons/AmountButtons';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
	const { id, image, name, color, price, amount } = item;
	const { toggleAmount, removeItem } = useCartContext();

	const handleIncrease = () => {
		toggleAmount(id, 'INCREASE');
	};

	const handleDecrease = () => {
		toggleAmount(id, 'DECREASE');
	};

	return (
		<article className="cart-items">
			<div className="title">
				<img src={image} alt={name} />
				<div>
					<h5 className="name">{name}</h5>
					<p className="color">
						Color: <span style={{ background: color }}></span>
					</p>
					<h5 className="price-small">{formatPrice(price)}</h5>
				</div>
			</div>
			<h5 className="price">{formatPrice(price)}</h5>
			<div className="amount-btns">
				<AmountButtons
					amount={amount}
					handleDecrease={handleDecrease}
					handleIncrease={handleIncrease}
				/>
			</div>
			<h5 className="subtotal">{formatPrice(price * amount)}</h5>
			<button className="remove-btn" onClick={() => removeItem(id)}>
				<FaTrash />
			</button>
			<hr />
		</article>
	);
};

export default CartItem;
