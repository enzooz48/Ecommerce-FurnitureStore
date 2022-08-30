import React from 'react';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CartButtons.css';

const CartButtons = () => {
	return (
		<div className="cart-btn-wrapper">
			<Link to="/cart" className="cart-btn">
				Cart
				<span className="cart-container">
					<FaShoppingCart />
					<span className="cart-value">0</span>
				</span>
			</Link>
			<button className="auth-btn">
				Login
				<FaUserPlus />
			</button>
		</div>
	);
};

export default CartButtons;
