import React, { useState } from 'react'
import NavBarItem from './NavBarItem'

const NavBarResponsive = ({ navBar, updateNav }) => {
	const [isOpen, setIsOpen] = useState(false)
	const openNavBar = () => {
		setIsOpen(!isOpen)
	}
	return (
		<>
			<button onClick={openNavBar} className={'btn btn-light button-NavBarResponsive-style'}>
				Menu
			</button>
			{isOpen === true ? (
				<div className={'div-NavBarResponsive-container'}>
					{navBar.map((item, key) => (
						<React.Fragment key={key}>
							<NavBarItem item={item} updateNav={updateNav} />
						</React.Fragment>
					))}
				</div>
			) : (
				<></>
			)}
			<style jsx>
				{`
					.button-NavBarResponsive-style {
						font-family: Nunito;
						font-style: normal;
						font-weight: normal;
						font-size: 15px;
						line-height: 150%;
						color: #828282;
					}

					.div-NavBarResponsive-container {
						z-index: 999;
						position: absolute;
						background: #fdc435;
					}
				`}
			</style>
		</>
	)
}

export default NavBarResponsive
