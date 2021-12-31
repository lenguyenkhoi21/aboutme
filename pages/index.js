import { TITLE_ACTION, TitleContext } from '../reducer/Title.Reducer'
import { useContext, useEffect } from 'react'
import TweenImage from '../component/index/TweenImage'

export default function HomePage() {
	const titleCTX = useContext(TitleContext)

	useEffect(() => {
		titleCTX.changeTitle(TITLE_ACTION.CHANGE_TITLE, 'Khoi Le Nguyen', '/')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<div className={'background-color-page'}>
				<div className={'row g-0 align-page-left div-HomePage-container'}>
					<div className={'col-md-6'}>
						<div>
							<div>
								<p className={'p-HomePage-intro'}> Hi, I{`'`}m Khoi. </p>
								<p className={'p-HomePage-intro'}> A Back-end Developer ! </p>
							</div>
							<div>
								<div>
									<p className={'p-HomePage-favourite'}>
										{' '}
										My favourite technology are
										<span className={'span-HomePage-color'}>
											{' '}
											Spring Boot
										</span>,{' '}
										<span className={'span-HomePage-color'}> React </span>
									</p>
									<p className={'p-HomePage-favourite'}>
										{' '}
										and <span className={'span-HomePage-color'}>
											{' '}
											NodeJS
										</span>.{' '}
									</p>
								</div>

								<div>
									<p className={'p-HomePage-favourite'}>
										{' '}
										I{`'`}m interesting in{' '}
										<span className={'span-HomePage-color'}>Cloud</span>,{' '}
										<span className={'span-HomePage-color'}>Devops</span>,{' '}
										<span className={'span-HomePage-color'}>Go</span> and
									</p>
									<p className={'p-HomePage-favourite'}>
										{' '}
										<span className={'span-HomePage-color'}>Microservices</span>
										.{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className={'col-md-6'}>
						<div className={'div-HomePage-left'}>
							<div className='row g-0 div-HomePage-LeftContent'>
								<div className='col-md-5' />
								<div className='col-md-5 div-HomePage-imgTop'>
									<TweenImage />
								</div>
								<div className='col-md-2' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.div-HomePage-container {
						display: flex;
						justify-content: right;
						align-items: center;
					}

					.span-HomePage-color {
						font-family: Nunito;
						font-weight: bold;
						color: #ffc637;
						line-height: 150%;
					}

					.p-HomePage-intro {
						font-family: PlayfairDisplay-Bold;
						font-size: 64px;
						line-height: 120%;
						font-weight: bold;
					}

					.p-HomePage-favourite {
						font-family: Nunito;
						font-weight: normal;
						font-size: 24px;
						color: #828282;
						line-height: 150%;
					}

					.div-HomePage-imgTop {
						display: flex;
						justify-content: center;
						align-items: center;
					}

					.div-HomePage-LeftContent {
						height: inherit;
						padding-bottom: 100px;
					}

					.div-HomePage-left {
						/*noinspection CssUnknownTarget*/
						background: url('/bgid.png') no-repeat;
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
