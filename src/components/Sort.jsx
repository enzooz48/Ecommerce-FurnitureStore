import { useFilterContext } from '../context/FilterContext';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const Sort = () => {
	const {
		state: { filteredProducts, gridView, sort },
		setListView,
		setGridView,
		updateSort,
	} = useFilterContext();

	return (
		<section className="sort__container">
			<div className="btn-container">
				<button className={`${gridView && 'active'}`} onClick={setGridView}>
					<BsFillGridFill />
				</button>
				<button className={`${!gridView && 'active'}`} onClick={setListView}>
					<BsList />
				</button>
			</div>
			<p>{filteredProducts.length} products found</p>
			<hr />
			<form>
				<label htmlFor="sort">Sort By</label>
				<select
					id="sort"
					name="sort"
					className="sort-input"
					value={sort}
					onChange={updateSort}>
					<option value="price-lowest">Price (Lowest)</option>
					<option value="price-highest">Price (Highest)</option>
					<option value="name-a">Name (A-Z)</option>
					<option value="name-z">Name (Z-A)</option>
				</select>
			</form>
		</section>
	);
};

export default Sort;
