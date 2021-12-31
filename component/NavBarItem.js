import React from 'react'
import Link from 'next/link'

const NavBarItem = ({ item, updateNav }) => {
	return (
		<>
			<li className={'li-NavBarItem-container'}>
				<Link href={item.path}>
					{item.status === true ? (
						<a
							className='a-NavBar-text a-NavBar-active'
							onClick={e => updateNav(e, item.pos)}>
							{item.content}
						</a>
					) : (
						<a className='a-NavBar-text' onClick={e => updateNav(e, item.pos)}>
							{item.content}
						</a>
					)}
				</Link>
			</li>
			<style jsx>
				{`
					.li-NavBarItem-container {
						margin-left: 48px;
					}

					.a-NavBar-text {
						font-family: Raleway-SemiBold;
						font-style: normal;
						font-weight: 500;
						font-size: 18px;
						line-height: 28px;
						color: #25282b;
						text-decoration: none;
					}
					.a-NavBar-active {
						text-underline-offset: 7px;
						text-decoration: underline;
					}

					@media only screen and (max-width: 767px) {
						.li-NavBarItem-container {
							margin-left: 0;
						}
					}
				`}
			</style>
		</>
	)
}

export default NavBarItem
