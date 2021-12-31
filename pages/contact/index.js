import React, { useContext, useEffect } from 'react'
import { TITLE_ACTION, TitleContext } from '../../reducer/Title.Reducer'
import Image from 'next/image'

const ContactPage = () => {
	const titleCTX = useContext(TitleContext)

	useEffect(() => {
		titleCTX.changeTitle(
			TITLE_ACTION.CHANGE_TITLE,
			'Contact | Khoi Le Nguyen',
			'/contact'
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<div className={'background-color-page div-ContactPage-padding'}>
				<div className={'div-ContactPage-container'}>
					<div className={'align-page'}>
						<div className={'row g-0'}></div>
						<div>
							<Image
								src={'/aboutme.png'}
								width={524}
								height={524}
								alt={'Khoi Le Nguyen'}
							/>
						</div>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.p-ContactPage-title {
						font-family: PlayfairDisplay-Bold;
						font-style: normal;
						font-weight: bold;
						font-size: 48px;
						line-height: 72px;
					}

					.div-ContactPage-padding {
						padding-top: 200px;
					}

					.div-ContactPage-container {
						display: flex;
						justify-content: right;
						align-items: center;
					}
				`}
			</style>
		</>
	)
}

export default ContactPage
