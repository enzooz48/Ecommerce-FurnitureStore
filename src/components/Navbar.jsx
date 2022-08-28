import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.jpg';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import { links } from '../data';
import './Navbar.css';
import CartButtons from './CartButtons';

const Navbar = () => {
	const [isNavShowing, setIsNavShowing] = useState(false);

	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/" onClick={() => setIsNavShowing(false)}>
						<img src={Logo} alt="Logo" />
					</Link>
					<button
						className={isNavShowing ? 'close-btn' : 'nav-toggle'}
						onClick={() => setIsNavShowing((pre) => !pre)}>
						{isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
					</button>
				</div>
				<ul className={`nav-links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
					{links.map(({ id, name, path }) => (
						<li key={id}>
							<Link to={path}>{name}</Link>
						</li>
					))}
				</ul>
				<CartButtons />
			</div>
		</nav>
	);
};

export default Navbar;
