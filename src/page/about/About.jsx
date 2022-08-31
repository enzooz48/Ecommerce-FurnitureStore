import './About.css';
import PageHero from '../../components/PageHero';
import aboutImg from '../../assets/images/hero-bcg.jpeg';

const About = () => {
	return (
		<main>
			<PageHero title="about" />
			<section className="page section section-center about">
				<img src={aboutImg} alt="nice desk" />
				<article>
					<div className="title">
						<h2>our story</h2>
						<div className="underline"></div>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reprehenderit, ipsam excepturi fuga autem distinctio, eveniet
						perferendis inventore nisi nemo quia omnis consequatur! Facere
						molestias fugit rerum sapiente nihil tempora impedit nemo error
						laboriosam blanditiis quam inventore commodi sit nesciunt accusamus
						temporibus repudiandae explicabo deserunt nostrum, enim voluptate
						debitis sint officiis.
					</p>
				</article>
			</section>
		</main>
	);
};

export default About;
