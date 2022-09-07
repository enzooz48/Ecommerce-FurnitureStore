import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.jpg';
import { links } from '../../data';
import './Navbar.css';
import CartButtons from '../cartButton/CartButtons';
import { FaBars } from 'react-icons/fa';
import { useProductsContext } from '../../context/ProductsContext';

const Navbar = () => {
	const loginInfo = localStorage.getItem('USER_INFO');
	const { openSidebar } = useProductsContext();

	return (
		<nav className="nav-container">
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/">
						<img src={Logo} alt="Logo" />
					</Link>
					<button className="nav-toggle" onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					{links.map(({ id, name, path }) => (
						<li key={id}>
							<Link to={path}>{name}</Link>
						</li>
					))}
					{loginInfo && (
						<li>
							<Link to="/checkout">Checkout</Link>
						</li>
					)}
				</ul>
				<CartButtons />
			</div>
		</nav>
	);
};

export default Navbar;
