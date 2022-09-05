import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import './Cart.css';
import PageHero from '../../components/PageHero';
import CartContent from '../../components/cartContent/CarContent';

const Cart = () => {
	const { cart } = useCartContext().state;

	if (cart.length < 1) {
		return (
			<main className="page-100 cart-container">
				<div className="empty">
					<h2>Your cart is empty</h2>
					<Link to="/shop" className="btn">
						Fill It
					</Link>
				</div>
			</main>
		);
	}
	return (
		<main>
			<PageHero title="Cart" />
			<main className="page">
				<CartContent />
			</main>
		</main>
	);
};

export default Cart;
