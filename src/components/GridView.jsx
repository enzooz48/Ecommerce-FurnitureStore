import Product from './featuredProducts/components/Product';

const GridView = ({ products }) => {
	return (
		<section className="grid__view">
			<div className="products-container">
				{products.map((product) => {
					return <Product key={product.id} {...product} />;
				})}
			</div>
		</section>
	);
};

export default GridView;
