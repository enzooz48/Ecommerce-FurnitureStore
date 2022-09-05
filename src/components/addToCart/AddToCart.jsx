import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../../context/CartContext';
import AmountButtons from '../amountButtons/AmountButtons';
import './AddToCart.css';

const AddToCart = ({ product }) => {
	const { id, stock, colors = [] } = product;
	const { addToCart } = useCartContext();

	const [mainColor, setMainColor] = useState(colors[0]);
	const [amount, setAmount] = useState(1);

	const increase = () => {
		setAmount((olaAmount) => {
			let tempAmount = olaAmount + 1;
			if (tempAmount > stock) {
				tempAmount = stock;
			}
			return tempAmount;
		});
	};

	const decrease = () => {
		setAmount((olaAmount) => {
			let tempAmount = olaAmount - 1;
			if (tempAmount < 1) {
				tempAmount = 1;
			}
			return tempAmount;
		});
	};

	return (
		<section className="addToCart">
			<div className="colors">
				<span>Colors : </span>
				<div>
					{colors.map((color, index) => {
						return (
							<button
								className={`${
									color === mainColor ? 'color-btn active' : 'color-btn'
								}`}
								key={index}
								style={{ background: color }}
								onClick={() => setMainColor(color)}>
								{mainColor === color ? <FaCheck /> : null}
							</button>
						);
					})}
				</div>
			</div>
			<div className="btn-contaioner">
				<AmountButtons
					amount={amount}
					decrease={decrease}
					increase={increase}
				/>
				<Link
					to="/cart"
					className="btn"
					onClick={() => addToCart(id, mainColor, amount, product)}>
					add to cart
				</Link>
			</div>
		</section>
	);
};

export default AddToCart;
