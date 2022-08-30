import { services } from '../../data';

import './Services.css';

const Services = () => {
	return (
		<div className="services-container">
			<div className="section-center">
				<article className="header">
					<h3>
						custom furniture <br />
						built only for you
					</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
						delectus quod provident ab recusandae expedita sequi saepe earum
						minus eveniet!
					</p>
				</article>
				<div className="services-center">
					{services.map((service) => {
						const { id, icon, title, text } = service;
						return (
							<article key={id} className="service">
								<span className="icon">{icon}</span>
								<h4>{title}</h4>
								<p>{text}</p>
							</article>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Services;
