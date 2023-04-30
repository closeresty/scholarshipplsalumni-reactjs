import React from 'react';
import { useEffect } from 'react';
import { logo2 } from '../assets';

const Footer = () => {
	useEffect(() => {
		feather.replace();
	}, []);
	return (
		<footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
			<div className="container">
				<div className="grid grid-cols-12">
					<div className="col-span-12">
						<div className="py-[60px] px-0">
							<div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
								<div className="lg:col-span-4 md:col-span-12">
									<a href="#" className="text-[22px] focus:outline-none">
										<img src={logo2} alt="" style={{ height: '70px', width: '120px' }} />
									</a>
									<p className="mt-6 text-gray-300">KEEP IN TOUCH</p>
									<ul className="list-none mt-6">
										<li className="inline"><a href="http://linkedin.com/plssaai" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
											<i data-feather="linkedin" className="h-5 w-5 text-gray-400" />
										</a></li>
										<li className="inline"><a href="https://www.facebook.com/plssaai" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
											<i data-feather="facebook" className="h-5 w-5 text-gray-400" />
											</a></li>
										<li className="inline"><a href="https://www.instagram.com/plssaai/" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
											<i data-feather="instagram" className="h-5 w-5 text-gray-400" />
											</a></li>
										<li className="inline"><a href="https://twitter.com/plssaai" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
											<i data-feather="twitter" className="h-5 w-5 text-gray-400" />
											</a></li>
										<li className="inline"><a href="mailto:support@plssaai.in" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
											<i data-feather="mail" className="h-5 w-5 text-gray-400" />
											</a></li>
									</ul>
								</div>
								<div className="lg:col-span-2 md:col-span-4">
									<h5 className="tracking-[1px] text-gray-100 font-semibold">PAGES</h5>
									<ul className="list-none footer-list mt-6">
										<li><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1" /> About us</a></li>
										<li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1" /> Services</a></li>
										<li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1" /> Team</a></li>
										<li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1" /> Pricing</a></li>
										<li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1" /> Project</a></li>
										<li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1" /> Blog</a></li>
										<li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1" /> Login</a></li>
									</ul>
								</div>
								<div className="lg:col-span-3 md:col-span-4">
									<h5 className="tracking-[1px] text-gray-100 font-semibold">Legal</h5>
									<ul className="list-none footer-list mt-6">
										<li><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1" /> Terms of Services</a></li>
										<li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1" /> Privacy Policy</a></li>
										<li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1" /> Cookie Policy</a></li>
										<li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1" /> Session Policy</a></li>
										<li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1" /> Data Privacy</a></li>
									</ul>
								</div>
								<div className="lg:col-span-3 md:col-span-4">
									<h5 className="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
									<p className="mt-6">Sign up and receive the latest tips via email.</p>
									<form>
										<div className="grid grid-cols-1">
											<div className="foot-subscribe my-3">
												<label className="form-label">Write your email <span className="text-red-600">*</span></label>
												<div className="form-icon relative mt-2">
													<i data-feather="mail" className="w-4 h-4 absolute top-3 left-4" />
													<input type="email" className="form-input bg-gray-800 border border-gray-800 text-gray-100 pl-12 focus:shadow-none" placeholder="Email" name="email" required />
												</div>
											</div>
											<button type="submit" id="submitsubscribe" name="send" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Subscribe</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="py-[30px] px-0 border-t border-slate-800">
				<div className="container text-center">
					<div className="grid md:grid-cols-2 items-center">
						<div className="md:text-left text-center">
							<p className="flex items-center"> &nbsp;
									© PLS Scholarship Alumni Association Inc. design with 
									<i data-feather="heart" className="text-red-600 ml-1 h-5 w-5" />
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer