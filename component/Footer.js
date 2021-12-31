import React from 'react'
import FooterContent from './FooterContent'

const Footer = () => {
	return (
		<>
			<div className={'div-Footer-flex div-Footer-bgother'}>
				<FooterContent />
			</div>
			<style jsx>
				{`
					.div-Footer-bgother {
						/*noinspection CssUnknownTarget*/
						background: url('/footer.png') no-repeat;
						background-color: #e5e5e5;
						background-size: cover;
						width: 100vw;
					}

					.div-Footer-flex {
						height: 344px;
						max-height: 344px;
					}
				`}
			</style>
		</>
	)
}

export default React.memo(Footer)
