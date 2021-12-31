import React, { useState } from 'react'

import NavBarItem from './NavBarItem'
import NavBarResponsive from './NavBarResponsive'

const NavBar = () => {
	const [navBar, setNavBar] = useState([
		{
			content: 'Home',
			path: '/'
		},
		{
			content: 'Projects',
			path: '/projects'
		},
		{
			content: 'About Me',
			path: '/aboutme'
		},
		{
			content: 'Contact',
			path: '/contact'
		}
	])

	const updateNav = (e, pos) => {
		const list = navBar
		list.map(item => (item.status = item.pos === pos))
		setNavBar(list)
	}

	return (
		<>
			<nav className={'nav-NavBar-bg'}>
				<div className={'align-page'}>
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
				</div>
				<div className={'div-NavBar-clear'} />
			</nav>

			<style jsx>{`
				.div-NavBar-clear {
					clear: both;
				}

				.nav-NavBar-md {
					display: flex;
				}

				.nav-NavBar-sm {
					display: none;
				}

				.nav-NavBar-bg {
					background: #fdc435;
					height: 56px;
					position: fixed;
					width: 100vw;
					display: flex;
					justify-content: right;
					align-items: center;
					z-index: 999;
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
