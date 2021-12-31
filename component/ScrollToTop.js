import React from 'react'
import Image from 'next/image'

const ScrollToTop = () => {
	const scroll = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
	return (
		<>
			<div className={'scroll-to-top'}>
				<Image
					src={'/logo.png'}
					width={50}
					height={50}
					alt={'logo'}
					onClick={scroll}
				/>
			</div>

			<style jsx>
				{`
					.scroll-to-top {
						cursor: pointer;
					}
				`}
			</style>
		</>
	)
}

export default ScrollToTop
