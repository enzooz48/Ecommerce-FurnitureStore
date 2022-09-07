import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/ProductsContext';
import { FilterProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ProductsProvider>
		<FilterProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</FilterProvider>
	</ProductsProvider>
);
