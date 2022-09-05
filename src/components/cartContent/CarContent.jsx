import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartColumns from '../cartColumns/CartColumns';
import CartItem from '../cartItem/CartItem';
import CartTotals from '../cartTotal/CartTotals';
import './CarContent.css';

const CartContent = () => {
	const {
		state: { cart },
		clearCart,
	} = useCartContext();

	return (
		<section className="section section-center cart-content">
			<CartColumns />
			{cart.map((item) => {
				return <CartItem key={item.id} item={item} />;
			})}
			<hr />
			<div className="link-container">
				<Link className="link-btn" to="/shop">
					Continue Shopping
				</Link>
				<button className="link-btn clear-btn" onClick={clearCart}>
					Clear Shopping Cart
				</button>
			</div>
			<CartTotals />
		</section>
	);
};

export default CartContent;
