import React, { useContext, useEffect } from 'react'
import { TITLE_ACTION, TitleContext } from '../../reducer/Title.Reducer'
import Image from 'next/image'
import Link from 'next/link'

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
						<div className={'row g-0'}>
							<div className={'col-md-6'}>
								<div className={'div-ContactPage-maxw'}/>
								<p className={'p-ContactPage-title'}>Contact</p>
								<ul>
									<li>
										<div className={'div-ContactPage-center'}>
											<div className={'div-ContactPage-address'}>
												<Image
													src={'/address.png'}
													width={25}
													height={25}
													alt={'address'}
												/>
											</div>
											<p className={'p-ContactPage-text'}> Da Nang City </p>
										</div>
									</li>
									<li>
										<div className={'div-ContactPage-center'}>
											<div className={'div-ContactPage-address'}>
												<Image
													src={'/phone.png'}
													width={25}
													height={25}
													alt={'address'}
												/>
											</div>
											<p className={'p-ContactPage-text'}> +84 777701956 </p>
										</div>
									</li>
									<li>
										<div className={'div-ContactPage-center'}>
											<div className={'div-ContactPage-address'}>
												<Image
													src={'/email.png'}
													width={25}
													height={20}
													alt={'email'}
												/>
											</div>
											<p className={'p-ContactPage-text'}>
												{' '}
												lenguyenkhoi21@gmail.com{' '}
											</p>
										</div>
									</li>
									<li>
										<div className={'div-ContactPage-center'}>
											<div className={'div-ContactPage-address'}>
												<Image
													src={'/website.png'}
													width={25}
													height={25}
													alt={'email'}
												/>
											</div>
											<Link
												href={'https://github.com/lenguyenkhoi21'}
												passHref={true}>
												<a className={'p-ContactPage-text div-ContactPage-link'}>
                          https://github.com/lenguyenkhoi21
                        </a>
											</Link>
										</div>
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
					.p-ContactPage-title {
						font-family: PlayfairDisplay-Bold;
						font-style: normal;
						font-weight: bold;
						font-size: 48px;
						line-height: 72px;
					}

					.p-ContactPage-text {
						font-family: Nunito;
						font-style: normal;
						font-weight: normal;
						font-size: 24px;
						line-height: 150%;
						color: #828282;
					}

					.span-ContactPage-text {
						font-family: Nunito-Bold;
						font-style: normal;
						font-weight: bold;
						font-size: 24px;
						line-height: 150%;
					}

					.div-ContactPage-padding {
						padding-top: 200px;
						padding-bottom: 150px;
					}

					.div-ContactPage-container {
						display: flex;
						justify-content: right;
						align-items: center;
					}

					.div-ContactPage-center {
						display: flex;
						justify-content: left;
						align-items: center;
					}

					.div-ContactPage-address {
						margin-right: 25px;
					}

					.div-ContactPage-maxw {
						width: 1008px;
						height: 1px;
					}
					
					.div-ContactPage-link {
					  text-decoration: none;
					}
				`}
			</style>
		</>
	)
}

export default ContactPage
