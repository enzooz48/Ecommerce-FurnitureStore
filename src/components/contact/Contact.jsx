import './Contact.css';

const Contact = () => {
	return (
		<div className="contact-container">
			<div className="section-center">
				<h3>Join our newsletter and get 20% off</h3>
				<div className="content">
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
						sequi voluptatum temporibus enim aliquid. Veniam suscipit sint
						fugiat tenetur possimus, praesentium repellendus consequatur
						sapiente laudantium quasi placeat dolore odio pariatur.
					</p>
					<form
						className="contact-form"
						action="https://formspree.io/f/xyyoqgje"
						method="POST">
						<input
							type="email"
							name="email"
							className="form-input"
							placeholder="enter email"
						/>
						<button type="submit" className="submit-btn">
							subscribe
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
