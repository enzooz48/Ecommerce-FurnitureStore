import { useFilterContext } from '../context/FilterContext';
import { formatPrice, getUniqueValues } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filter = () => {
	const {
		state: { allProducts, filters },
		updateFilters,
		clearFilters,
	} = useFilterContext();
	const {
		text,
		category,
		company,
		colors,
		minPrice,
		maxPrice,
		price,
		freeShipping,
	} = filters;

	const categories = getUniqueValues(allProducts, 'category');
	const companies = getUniqueValues(allProducts, 'company');
	const colorValues = getUniqueValues(allProducts, 'colors');

	return (
		<section className="filter-container">
			<div className="filter__container-content">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}>
					{/* search input */}
					<div className="form-control">
						<input
							type="text"
							name="text"
							placeholder="Search"
							className="search-input"
							value={text}
							onChange={updateFilters}
						/>
					</div>
					{/* end search input */}
					{/* Categories */}
					<div className="form-control">
						<h5>category</h5>
						{categories.map((cat, i) => {
							return (
								<button
									key={i}
									name="category"
									className={category === cat ? 'active' : null}
									onClick={updateFilters}>
									{cat}
								</button>
							);
						})}
					</div>
					{/* End of Categories */}
					{/* Companies */}
					<div className="form-control">
						<h5>company</h5>
						<select
							className="company"
							name="company"
							value={company}
							onChange={updateFilters}>
							{companies.map((com, i) => {
								return (
									<option value={com} key={i}>
										{com}
									</option>
								);
							})}
						</select>
					</div>
					{/* End of Companies */}
					{/* Colors */}
					<div className="form-control">
						<h5>colors</h5>
						<div className="colors">
							{colorValues.map((col, i) => {
								return col === 'all' ? (
									<button
										className={`all-btn ${colors === 'all' && 'active'}`}
										key={i}
										name="colors"
										data-col-values={col}
										onClick={updateFilters}>
										All
									</button>
								) : (
									<button
										className={`color-btn ${colors === col && 'active'}`}
										key={i}
										name="colors"
										style={{ background: col }}
										data-col-values={col}
										onClick={updateFilters}>
										{colors === col && <FaCheck />}
									</button>
								);
							})}
						</div>
					</div>

					{/* End of Colors */}
					{/* Price */}
					<div className="form-control">
						<h5>price</h5>
						<p className="price">{formatPrice(price)}</p>
						<input
							type="range"
							name="price"
							min={minPrice}
							max={maxPrice}
							value={price}
							onChange={updateFilters}
						/>
					</div>
					{/* End of Price */}
					{/* Shipping */}
					<div className="form-control shipping">
						<label htmlFor="shipping">free shipping</label>
						<input
							type="checkbox"
							name="freeShipping"
							id="shipping"
							checked={freeShipping}
							onChange={updateFilters}
						/>
					</div>
					{/* End of Shipping */}
				</form>
				<button className="clear-btn" onClick={clearFilters} type="button">
					clear filters
				</button>
			</div>
		</section>
	);
};

export default Filter;
