import Filter from '../../components/Filter';
import PageHero from '../../components/PageHero';
import ProductList from '../../components/ProductList';
import Sort from '../../components/Sort';
import './Shop.css';

const Shop = () => {
	return (
		<main className="shop__container">
			<PageHero title="shop" />
			<div className="page">
				<div className="section-center products">
					<Filter />
					<div>
						<Sort />
						<ProductList />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Shop;
