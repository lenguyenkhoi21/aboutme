import React, { useContext } from 'react'
import Link from 'next/link'
import { TitleContext } from '../reducer/Title.Reducer'

const NavBarItem = ({ item, updateNav }) => {
	const titleCTX = useContext(TitleContext)
	return (
		<>
			<li className={'li-NavBarItem-container'}>
				<Link href={item.path}>
					{item.path === titleCTX.state.path ? (
						<a className={'a-NavBar-text a-NavBar-active'} onClick={updateNav}>
							{item.content}
						</a>
					) : (
						<a className={'a-NavBar-text'} onClick={updateNav}>
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
