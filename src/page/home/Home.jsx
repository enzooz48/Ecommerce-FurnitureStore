import Banner from '../../components/banner/Banner';
import Contact from '../../components/contact/Contact';
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts';
import Services from '../../components/services/Services';

const Home = () => {
	return (
		<main>
			<Banner />
			<FeaturedProducts />
			<Services />
			<Contact />
		</main>
	);
};

export default Home;
