import React, { useContext, useEffect } from 'react'
import { TITLE_ACTION, TitleContext } from '../../reducer/Title.Reducer'

const AboutMePage = () => {
	const aboutme = [
		{
			bold: [
				'Khoi Le Nguyen',
				'Lê Nguyên Khôi',
				'21 years-old',
				'4th',
				'FPT University'
			],
			content:
				'My full name is <fill> (<fill> in Vietnamese). I’m <fill> and <fill> year student at <fill>.'
		}
	]

	const titleCTX = useContext(TitleContext)

	useEffect(() => {
		titleCTX.changeTitle(
			TITLE_ACTION.CHANGE_TITLE,
			'About me | Khoi Le Nguyen',
			'/aboutme'
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<>
				<div className={'background-color-page div-AboutMePage-padding'}>
					<p className={'p-AboutMePage-text'}>About me</p>
					<ul>
						<li>
							{() => {
								//const image =
								return <></>
							}}
						</li>
					</ul>
				</div>
				<style jsx>
					{`
						.p-AboutMePage-text {
							font-family: PlayfairDisplay-Bold;
							font-style: normal;
							font-weight: bold;
							font-size: 48px;
							line-height: 72px;
						}

						.div-AboutMePage-padding {
							padding-top: 200px;
						}

						.div-HomePage-container {
							display: flex;
							justify-content: right;
							align-items: center;
						}
					`}
				</style>
			</>
		</>
	)
}

export default AboutMePage
