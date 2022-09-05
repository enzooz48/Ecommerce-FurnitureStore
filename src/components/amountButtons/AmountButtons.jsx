import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './AmountButtons.css';

const AmountButtons = ({ handleDecrease, handleIncrease, amount }) => {
	return (
		<div className="amount-btns">
			<button type="button" className="amount-btn" onClick={handleDecrease}>
				<FaMinus />
			</button>
			<h2 className="amount">{amount}</h2>
			<button type="button" className="amount-btn" onClick={handleIncrease}>
				<FaPlus />
			</button>
		</div>
	);
};

export default AmountButtons;
