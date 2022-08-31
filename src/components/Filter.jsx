import { useFilterContext } from '../context/FilterContext';
import { formatPrice, getUniqueValues } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filter = () => {
	const {
		filters: {
			text,
			category,
			company,
			color,
			min_price,
			price,
			max_price,
			shipping,
		},
		updateFilters,
		clearFilters,
		all_products,
	} = useFilterContext();

	const categories = getUniqueValues(all_products, 'category');
	const companies = getUniqueValues(all_products, 'company');
	const colors = getUniqueValues(all_products, 'colors');

	console.log(all_products);
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
							placeholder="search"
							className="search-input"
							value={text}
							onChange={updateFilters}
						/>
					</div>
					{/* end search input */}
					{/* Categories */}
					<div className="form-control">
						<h5>category</h5>
						<div>
							{categories.map((c, index) => {
								return (
									<button
										key={index}
										type="button"
										name="category"
										onClick={updateFilters}
										className={`${
											category === c.toLowerCase() ? 'active' : null
										}`}>
										{c}
									</button>
								);
							})}
						</div>
					</div>
					{/* End of Categories */}
					{/* Companies */}
					<div className="form-control">
						<h5>company</h5>
						<select
							name="company"
							className="company"
							value={company}
							onChange={updateFilters}>
							{companies.map((c, index) => {
								return (
									<option value={c} key={index}>
										{c}
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
							{colors.map((c, index) => {
								if (c === 'all') {
									return (
										<button
											key={index}
											name="color"
											data-color={c}
											onClick={updateFilters}
											className={`${
												color === 'all' ? 'all-btn active' : 'all-btn'
											}`}>
											all
										</button>
									);
								}
								return (
									<button
										key={index}
										name="color"
										style={{ background: c }}
										data-color={c}
										onClick={updateFilters}
										className={`${
											color === c ? 'color-btn active' : 'color-btn'
										}`}>
										{color === c ? <FaCheck /> : null}
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
							min={min_price}
							max={max_price}
							onChange={updateFilters}
							value={price}
						/>
					</div>
					{/* End of Price */}
					{/* Shipping */}
					<div className="form-control shipping">
						<label htmlFor="shipping">free shipping</label>
						<input
							type="checkbox"
							name="shipping"
							id="shipping"
							onChange={updateFilters}
							checked={shipping}
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
