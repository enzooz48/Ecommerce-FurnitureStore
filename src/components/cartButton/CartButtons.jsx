import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { useProductsContext } from '../../context/ProductsContext';
import './CartButtons.css';

const CartButtons = () => {
	const navigate = useNavigate();
	const { closeSidebar } = useProductsContext();
	const {
		state: { totalItems },
		clearCart,
	} = useCartContext();

	const loginInfo = localStorage.getItem('USER_INFO');

	const handleLogout = () => {
		clearCart();
		localStorage.clear();
	};

	return (
		<div className="cart-btn-wrapper">
			<Link to="/cart" className="cart-btn" onClick={closeSidebar}>
				Cart
				<span className="cart-container">
					<FaShoppingCart />
					<span className="cart-value">{totalItems}</span>
				</span>
			</Link>
			{loginInfo ? (
				<button className="auth-btn" onClick={handleLogout}>
					Logout
					<FaUserMinus />
				</button>
			) : (
				<button className="auth-btn" onClick={() => navigate('/login')}>
					Login
					<FaUserPlus />
				</button>
			)}
		</div>
	);
};

export default CartButtons;
