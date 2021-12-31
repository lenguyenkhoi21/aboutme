import React, { useState } from 'react'
import Image from 'next/image'

import NavBarItem from './NavBarItem'
import NavBarResponsive from './NavBarResponsive'
import ScrollToTop from './ScrollToTop'

const NavBar = () => {
	const init = [
		{
			content: 'Home',
			path: '/'
		},
		{
			content: 'About Me',
			path: '/aboutme'
		},
		{
			content: 'Contact',
			path: '/contact'
		}
	]

	const [navBar, setNavBar] = useState(init)

	const updateNav = () => setNavBar(init)

	return (
		<>
			<nav className={'nav-NavBar-bg'}>
				<div className={'div-NavBar-logo'}>
					<ScrollToTop />
				</div>

				<ul className={'nav-NavBar-md'}>
					{navBar.map((item, key) => (
						<React.Fragment key={key}>
							<NavBarItem item={item} updateNav={updateNav} />
						</React.Fragment>
					))}
				</ul>
				<ul className={'nav-NavBar-sm'}>
					<NavBarResponsive navBar={navBar} updateNav={updateNav} />
				</ul>
			</nav>

			<style jsx>{`
				.div-NavBar-logo {
					margin-right: auto;
				}

				.nav-NavBar-md {
					display: flex;
				}

				.nav-NavBar-sm {
					display: none;
				}

				.nav-NavBar-logo {
					position: fixed;
					display: flex;
					justify-content: left;
					align-items: center;
					z-index: 999;
				}

				.nav-NavBar-bg {
					background: #fdc435;
					height: 56px;
					position: fixed;
					width: 100vw;
					display: flex;
					justify-content: center;
					align-items: center;
					z-index: 999;
					padding-right: 120px;
					padding-left: 120px;
				}

				@media only screen and (max-width: 767px) {
					.nav-NavBar-md {
						display: none;
					}

					.nav-NavBar-sm {
						display: block;
					}
				}
			`}</style>
		</>
	)
}

export default NavBar
