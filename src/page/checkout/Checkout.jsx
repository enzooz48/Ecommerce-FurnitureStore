import PageHero from '../../components/PageHero';
import { useCartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { formatPrice } from '../../utils/helpers';
import './Checkout.css';

const Checkout = () => {
	const {
		state: { cart, totalAmount, shippingFee },
	} = useCartContext();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = () => {
		toast.success('Oder Success!');
	};

	return (
		<div>
			<PageHero title="Checkout" />
			<div className="container">
				<section className="py-5">
					<h2 className="h5 text-uppercase mb-4">Billing details</h2>
					<div className="row">
						<div className="col-lg-8">
							<form>
								<div className="row">
									<div className="col-lg-12 form-group">
										<label
											className="text-small text-uppercase"
											htmlFor="Fullname">
											Full Name:
										</label>
										<input
											className="form-control form-control-lg2"
											placeholder="Enter Your Full Name Here!"
											{...register('fullname', {
												required: true,
											})}
										/>
										{errors.fullname && (
											<p className="text-danger">* Full Name is required !</p>
										)}
									</div>
									<div className="col-lg-12 form-group">
										<label
											className="text-small text-uppercase"
											htmlFor="Email">
											Email:{' '}
										</label>
										<input
											className="form-control form-control-lg2"
											placeholder="Enter Your Email Here!"
											{...register('email', {
												required: true,
												pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											})}
										/>
										{errors.email?.type === 'required' && (
											<p className="text-danger">* Email is required !</p>
										)}
										{errors.email?.type === 'pattern' && (
											<p className="text-danger">* Incorrect Email Format</p>
										)}
									</div>
									<div className="col-lg-12 form-group">
										<label
											className="text-small text-uppercase"
											htmlFor="Phone">
											Phone Number:{' '}
										</label>
										<input
											className="form-control form-control-lg2"
											placeholder="Enter Your Phone Number Here!"
											{...register('phone', {
												required: true,
											})}
										/>
										{errors.phone && (
											<p className="text-danger">* Phone Number is required!</p>
										)}
									</div>
									<div className="col-lg-12 form-group">
										<label
											className="text-small text-uppercase"
											htmlFor="Address">
											Address:{' '}
										</label>
										<input
											className="form-control form-control-lg2"
											placeholder="Enter Your Address Here!"
											{...register('address', {
												required: true,
											})}
										/>
										{errors.address && (
											<p className="text-danger">* Your Address is required!</p>
										)}
									</div>
									<div className="col-lg-12 form-group">
										<button
											className="btn	"
											style={{
												color: 'var(--clr-primary-10)',
												backgroundColor: 'var(--clr-primary-5)',
											}}
											type="submit"
											onClick={handleSubmit(onSubmit)}>
											Place order
										</button>
									</div>
								</div>
							</form>
						</div>
						<div className="col-lg-4">
							<div className="card border-0 rounded-0 p-lg-4 bg-light">
								<div className="card-body">
									<h5 className="text-uppercase mb-4">Your order</h5>
									<ul className="list-unstyled mb-0">
										{cart &&
											cart.map((item) => (
												<div key={item.id}>
													<li className="d-flex align-items-center justify-content-between">
														<strong className="small font-weight-bold text-uppercase">
															{item.name} :
														</strong>
														<span className="text-muted small">
															{formatPrice(item.price)} x {item.amount}
														</span>
													</li>
													<li className="border-bottom my-2"></li>
												</div>
											))}
										<li className="d-flex align-items-center justify-content-between">
											<strong className="text-uppercase small font-weight-bold">
												Shipping Fee :
											</strong>
											<span className="text-muted small">
												{formatPrice(shippingFee)}
											</span>
										</li>
										<li className="border-bottom my-2"></li>
										<li className="d-flex align-items-center justify-content-between">
											<strong className="text-uppercase small font-weight-bold">
												Total :
											</strong>
											<span>{formatPrice(totalAmount + shippingFee)}</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Checkout;
