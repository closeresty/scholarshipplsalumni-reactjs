import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import classNames from 'classnames';
import { navLinks } from '../constants';
import { logo1, logo2 } from '../assets';

const Navbar = () => {
	const { y } = useWindowScroll();
	const location = useLocation();
	const [scrolled, setScrolled] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const navClasses = classNames(
		'fixed',
		'top-0',
		'w-full',
		'transition-all',
		'duration-300',
		'sm:bg-transparent',
		'sm:text-gray-900',
		{ 'bg-white text-gray-900': scrolled, '': !scrolled },
		{ 'text-black': isSmallScreen },
	);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(y > 0);
		};
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [y]);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 990);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		const navLinks = document.querySelectorAll('#navigation a');
		navLinks.forEach(link => {
			link.style.setProperty('color', scrolled ? 'black' : 'white', 'important');
		});
		const element = document.getElementById("nav-logo");
		element.src = scrolled ? logo2 : logo1;
	}, [scrolled]);

	const toggleMenu = () => {
		const isOpen = document.getElementById('navigation');
		isOpen.style.display = isOpen.style.display === 'block' ? 'none' : 'block';
		document.getElementById('isToggle').classList.toggle('open');
	};

	return (
		<nav id="topnav" className={navClasses}>
			<div className="container">
				<Link className="logo pl-0" to="/">
					<img
						src={scrolled ? logo2 : logo1}
						id="nav-logo"
						className="dark:inline-block"
						alt="LOGO | PLS Scholarship Alumni Association Inc."
						style={{ height: '70px' }}
					/>
				</Link>
				<div className="menu-extras">
					<div className="menu-item">
						<button className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
							<div className="lines">
								<span />
								<span />
								<span />
							</div>
						</button>
					</div>
				</div>
				<div id="navigation">
					<ul className="navigation-menu nav-light">
						{navLinks.map((link) => (
							<li key={link.id}>
								<Link
									id={link.id}
									to={link.link}
									className="text-white hover:text-white text-18 font-medium cursor-pointer sub-menu-item"
								>
									{link.title}
								</Link>
								{link.link === location.pathname && (
									<span className="absolute bottom-0 left-0 w-full border-b-2 border-blue-500" />
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
