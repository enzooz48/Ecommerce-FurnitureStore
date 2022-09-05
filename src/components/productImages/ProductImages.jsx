import { useState } from 'react';
import './ProductImages.css';

const ProductImages = ({ images = [{ url: '' }] }) => {
	const [mainImage, setMainImage] = useState(images[0]);

	return (
		<section className="imageProduct">
			<img src={mainImage.url} alt={mainImage.filename} className="mainImage" />
			<div className="gallery">
				{images.map((image, i) => {
					return (
						<img
							src={image.url}
							alt={image.filename}
							key={i}
							onClick={() => setMainImage(images[i])}
							className={`${image.url === mainImage.url && 'active'}`}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default ProductImages;
