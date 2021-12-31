import React, { useContext, useEffect } from 'react'
import { TITLE_ACTION, TitleContext } from '../../reducer/Title.Reducer'

const AboutMePage = () => {
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
					<ul className={'ul-AboutMePage-style'}>
						<li>
							<p>
								My full name is Khoi Le Nguyen (Lê Nguyên Khôi in Vietnamese).
								I’m 21 years-old and 4th year student at FPT University.
							</p>
						</li>
						<li>
							<p>
								With 4 years studying at FPT University and 6 months intership
								at FPT Software, I’ve grown up and a lot of skill like learning
								new technology, improving my english and working with team.
							</p>
						</li>
						<li>
							<p>
								With my skill, I want to find job with position Back-ends and
								Devops. And I want to be a Fullstack Developers in future.
							</p>
						</li>
						<li>
							<p>I want to be a good technical lead in next 3 year.</p>
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
