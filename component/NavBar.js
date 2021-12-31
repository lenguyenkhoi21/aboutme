import React, { useState } from 'react'
import Image from 'next/image'

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
					<div className={'div-aws'}>
						<div>
							<div>
								<div>
									<Image
										src={'/kln2.png'}
										width={50}
										height={50}
										alt={'logo'}
									/>
								</div>
							</div>
						</div>
					</div>

					<div>
						<ul className={'nav-NavBar-md'}>
							{navBar.map((item, key) => (
								<React.Fragment key={key}>
									<NavBarItem item={item} updateNav={updateNav} />
								</React.Fragment>
							))}
						</ul>
					</div>
					<ul className={'nav-NavBar-sm'}>
						<NavBarResponsive navBar={navBar} updateNav={updateNav} />
					</ul>
				</div>
			</nav>

			<style jsx>{`
				.div-aws {
					display: flex;
					justify-content: left;
					align-items: center;
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
