import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './page/about/About';
import Login from './page/auth/Login';
import Register from './page/auth/Register';
import Cart from './page/cart/Cart';
import Checkout from './page/checkout/Checkout';
import Detail from './page/detail/Detail';
import Error from './page/Error';
import Home from './page/home/Home';
import Shop from './page/shop/Shop';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/detail/:id" element={<Detail />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
			</Router>

			{/*  ToastContainer  */}
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
}

export default App;
