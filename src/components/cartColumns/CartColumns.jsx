import './CartColumns.css';

const CartColumns = () => {
	return (
		<div className="cart-columns">
			<div className="content">
				<h5>Item</h5>
				<h5>Price</h5>
				<h5>Qunatity</h5>
				<h5>Subtotal</h5>
				<span></span>
			</div>
			<hr />
		</div>
	);
};

export default CartColumns;
