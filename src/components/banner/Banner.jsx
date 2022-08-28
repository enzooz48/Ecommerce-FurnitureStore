import React from 'react';
import { Link } from 'react-router-dom';
import heroBcg from '../../assets/images/hero-bcg-4.jpg';
import heroBcg2 from '../../assets/images/hero-bcg-6.jpg';
import './Banner.css';

const Banner = () => {
	return (
		<section className="section-center">
			<article className="content">
				<h1>
					Find Your <br /> Dream Home
				</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
					sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
					aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
					alias?
				</p>
				<Link to="/shop" className="btn hero-btn">
					Shop Now
				</Link>
			</article>
			<article className="img-container">
				<img src={heroBcg} alt="nice-table" className="main-img" />
				<img src={heroBcg2} alt="man-working" className="accent-img" />
			</article>
		</section>
	);
};

export default Banner;
