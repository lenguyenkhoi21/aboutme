import React, { useContext } from 'react'
import { TitleContext } from '../reducer/Title.Reducer'
import FooterContent from './FooterContent'

const Footer = () => {
	const titleCTX = useContext(TitleContext)

	return (
		<>
			<>
				{titleCTX.state.path === '/' ? (
					<div className={'div-Footer-flex div-Footer-bg'}>
						<FooterContent />
					</div>
				) : (
					<div className={'div-Footer-flex div-Footer-bgother'}>
						<FooterContent />
					</div>
				)}
			</>

			<style jsx>
				{`
					.div-Footer-bg {
						background-color: #e5e5e5;
						width: 100vw;
					}

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
