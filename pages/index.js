import { TITLE_ACTION, TitleContext } from '../reducer/Title.Reducer'
import { useContext, useEffect } from 'react'

export default function HomePage() {
	const titleCTX = useContext(TitleContext)

	useEffect(() => {
		titleCTX.changeTitle(TITLE_ACTION.CHANGE_TITLE, 'Khoi Le Nguyen')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<div className={'background-color-page'}>
				<div className={'row g-0 align-page-left'}>
					<div className={'col-md-6 div-HomePage-Right'}>
						<div>
							<div className={'div-HomePage-intro'}>
								<p className={'p-HomePage-intro'}> Hi, I{`'`}m Khoi. </p>
								<p className={'p-HomePage-intro'}>
									{' '}
									A Passionate Back-end Developer !{' '}
								</p>
							</div>
							<div>
								<div className={'div-HomePage-intro'}>
									<p className={'p-HomePage-favourite'}>
										{' '}
										My favourite technology are
										<span className={'span-HomePage-color'}>
											{' '}
											Spring Boot
										</span>,{' '}
										<span className={'span-HomePage-color'}> NodeJS </span>
									</p>
									<p className={'p-HomePage-favourite'}>
										{' '}
										and <span className={'span-HomePage-color'}>
											{' '}
											React
										</span>.{' '}
									</p>
								</div>

								<div>
									<p className={'p-HomePage-favourite'}>
										{' '}
										I{`'`}m interesting in Cloud, Go and
									</p>
									<p className={'p-HomePage-favourite'}> Microservices. </p>
								</div>
							</div>
						</div>
					</div>
					<div className={'col-md-6'}>
						<div className={'div-HomePage-left'}></div>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.div-HomePage-intro {
						margin-bottom: 32px;
					}

					.span-HomePage-color {
					  font-weight: bold;
						color: #ffc637;
					}

					.p-HomePage-intro {
						font-family: PlayfairDisplay-Bold;
						font-size: 60px;
						line-height: 120%;
						font-weight: bold;
					}

					.p-HomePage-favourite {
						font-family: Nunito;
						font-weight: normal;
						font-size: 24px;
						color: #828282;
					}

					.div-HomePage-Right {
						margin-top: 55px;
					}

					.div-HomePage-left {
						/*noinspection CssUnknownTarget*/
						background: url('/bgid.png') 30% no-repeat;
						background-position: bottom right;
						background-size: cover;
						width: 100%;
						height: 720px;
					}

					@media only screen and (max-width: 767px) {
						.align-page-left {
							margin-left: 0;
						}
						.div-HomePage-left {
							margin-left: 0;
						}
					}
				`}
			</style>
		</>
	)
}
