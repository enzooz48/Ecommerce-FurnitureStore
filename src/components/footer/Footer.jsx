import './Footer.css';

const Footer = () => {
	return (
		<div className="footer-container">
			<h5>
				&copy; {new Date().getFullYear()} <span> EnZooZ </span>
			</h5>
			<h5>All Rights Reserved</h5>
		</div>
	);
};

export default Footer;
