import React, { useContext, useEffect } from 'react'
import { TITLE_ACTION, TitleContext } from '../../reducer/Title.Reducer'
import Image from 'next/image'

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
			<div className={'background-color-page div-AboutMePage-padding'}>
				<div className={'div-AboutMePage-container'}>
					<div className={'align-page'}>
						<div className={'row g-0'}>
							<div className={'col-md-6'}>
								<p className={'p-AboutMePage-title'}>About me</p>
								<ul className={'ul-AboutMePage-style'}>
									<li>
										<p className={'p-AboutMePage-text'}>
											My full name is{' '}
											<span className={'span-AboutMePage-text'}>
												{' '}
												Khoi Le Nguyen{' '}
											</span>{' '}
											({' '}
											<span className={'span-AboutMePage-text'}>
												{' '}
												Lê Nguyên Khôi{' '}
											</span>{' '}
											in Vietnamese). I{`'`}m{' '}
											<span className={'span-AboutMePage-text'}>
												{' '}
												21 years-old{' '}
											</span>{' '}
											and{' '}
											<span className={'span-AboutMePage-text'}>
												4th year student
											</span>{' '}
											at{' '}
											<span className={'span-AboutMePage-text'}>
												FPT University
											</span>
											.
										</p>
									</li>
									<li>
										<p className={'p-AboutMePage-text'}>
											With{' '}
											<span className={'span-AboutMePage-text'}> 4 years </span>{' '}
											studying at{' '}
											<span className={'span-AboutMePage-text'}>
												{' '}
												FPT University{' '}
											</span>{' '}
											and{' '}
											<span className={'span-AboutMePage-text'}>
												{' '}
												6 months{' '}
											</span>{' '}
											internship at
											<span className={'span-AboutMePage-text'}>
												{' '}
												FPT Software
											</span>
											{','} I{`'`}ve grown up and a lot of skill like{' '}
											<span className={'span-AboutMePage-text'}>
												{' '}
												learning{' '}
											</span>{' '}
											new technology,{' '}
											<span className={'span-AboutMePage-text'}>
												{' '}
												improving{' '}
											</span>{' '}
											my English and{' '}
											<span className={'span-AboutMePage-text'}>
												{' '}
												working{' '}
											</span>{' '}
											with team.
										</p>
									</li>
									<li>
										<p className={'p-AboutMePage-text'}>
											My{' '}
											<span className={'span-AboutMePage-text'}>
												{' '}
												favorite{' '}
											</span>{' '}
											framework/language are{' '}
											<span className={'span-AboutMePage-text'}>
												{' '}
												Spring Boot
											</span>
											, <span className={'span-AboutMePage-text'}>
												{' '}
												React{' '}
											</span>{' '}
											and
											<span className={'span-AboutMePage-text'}> NodeJS</span>.
										</p>
									</li>
									<li>
										<p className={'p-AboutMePage-text'}>
											I{`'`}m interesting in{' '}
											<span className={'span-AboutMePage-text'}> Cloud</span>,{' '}
											<span className={'span-AboutMePage-text'}> Devops</span>,{' '}
											<span className={'span-AboutMePage-text'}> Go</span> and{' '}
											<span className={'span-AboutMePage-text'}>
												{' '}
												Microservices
											</span>
											.
										</p>
									</li>
									<li>
										<p className={'p-AboutMePage-text'}>
											With my skill, I want to find job with position{' '}
											<span className={'span-AboutMePage-text'}>
												{' '}
												Back-end{' '}
											</span>
											and{' '}
											<span className={'span-AboutMePage-text'}> Devops</span>.
											And I want to be a{' '}
											<span className={'span-AboutMePage-text'}>
												{' '}
												Full-stack Developer
											</span>{' '}
											in future.
										</p>
									</li>
									<li>
										<p className={'p-AboutMePage-text'}>
											I want to be{' '}
											<span className={'span-AboutMePage-text'}>
												{' '}
												a good technical lead
											</span>{' '}
											in next 3 year.
										</p>
									</li>
								</ul>
							</div>
							<div className={'col-md-6'}>
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
				</div>
			</div>
			<style jsx>
				{`
					.ul-AboutMePage-style {
						list-style-type: disc;
					}

					.p-AboutMePage-title {
						font-family: PlayfairDisplay-Bold;
						font-style: normal;
						font-weight: bold;
						font-size: 48px;
						line-height: 72px;
					}

					.p-AboutMePage-text {
						font-family: Nunito;
						font-style: normal;
						font-weight: normal;
						font-size: 24px;
						line-height: 150%;
						color: #828282;
					}

					.span-AboutMePage-text {
						font-family: Nunito-Bold;
						font-style: normal;
						font-weight: bold;
						font-size: 24px;
						line-height: 150%;
					}

					.div-AboutMePage-padding {
						padding-top: 200px;
						padding-bottom: 283px;
					}

					.div-AboutMePage-container {
						display: flex;
						justify-content: right;
						align-items: center;
					}
				`}
			</style>
		</>
	)
}

export default AboutMePage
