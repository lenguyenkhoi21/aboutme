import React, { useState } from 'react'
import NavBarItem from './NavBarItem'

const NavBarResponsive = ({ navBar, updateNav }) => {
	const [isOpen, setIsOpen] = useState(false)
	const openNavBar = () => {
		setIsOpen(!isOpen)
	}
	return (
		<>
			<button onClick={openNavBar}> Click Here </button>
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

export default React.memo(NavBarResponsive)
