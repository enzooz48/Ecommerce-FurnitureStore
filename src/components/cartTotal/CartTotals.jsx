import { useCartContext } from '../../context/CartContext';
import { formatPrice } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import './CartTotal.css';

const CartTotals = () => {
	const {
		state: { totalAmount, shippingFee },
	} = useCartContext();

	return (
		<section className="cart-totals">
			<div>
				<article>
					<h5>
						Subtotal : <span>{formatPrice(totalAmount)}</span>
					</h5>
					<p>
						Shipping Fee: <span>{formatPrice(shippingFee)}</span>
					</p>
					<hr />
					<h4>
						Subtotal: <span>{formatPrice(totalAmount + shippingFee)}</span>
					</h4>
				</article>
				<Link to="/checkout" className="btn">
					Proceed to checkout
				</Link>
				{/* {myUser ? (
					<Link to="/checkout" className="btn">
						Proceed to checkout
					</Link>
				) : (
					<button className="btn" onClick={loginWithRedirect}>
						Login to Continue
					</button>
				)} */}
			</div>
		</section>
	);
};

export default CartTotals;
