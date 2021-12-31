import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FooterContent = () => {
	const images = [
		{
			index: 0,
			name: 'facebook.png',
			alt: 'Facebook',
			link: 'https://www.facebook.com/lenguyenkhoi21'
		},
		{
			index: 1,
			name: 'github.png',
			alt: 'Github',
			link: 'https://github.com/lenguyenkhoi21'
		}
	]

	return (
		<>
			<div>
				<div
					className={'div-FooterContent-iconBarFlex div-FooterContent-bottom'}>
					<div className={'div-FooterContent-flex'}>
						{images.map((value, index) => (
							<React.Fragment key={index}>
								<div className={'div-FooterContent-space'}>
									<Link href={`${value.link}`} passHref={true}>
										<a>
											<Image
												src={`/${images[index].name}`}
												width={37.5}
												height={37.5}
												alt={`${images[index].alt}`}
											/>
										</a>
									</Link>
								</div>
							</React.Fragment>
						))}
					</div>
				</div>

				<div className={'div-FooterContent-bottom'}>
					<div className={'div-FooterContent-flex'}>
						<div>
							<p className={'p-FooterContent-copyright'}>
								{' '}
								2022 @ Copyright By Le Nguyen Khoi{' '}
							</p>
						</div>
					</div>
				</div>

				<div>
					<div className={'div-FooterContent-flex'}>
						<div>
							<p className={'p-FooterContent-copyright'}>
								Especially thanks{' '}
								<Link
									href={'https://www.facebook.com/fphamhieu'}
									passHref={true}>
									<a className={'a-FooterContent-link a-FooterContent-thanks'}>
										Hieu Pham
									</a>
								</Link>{' '}
								and{' '}
								<Link
									href={
										'https://www.facebook.com/profile.php?id=100008383681382'
									}
									passHref={true}>
									<a className={'a-FooterContent-link a-FooterContent-thanks'}>
										Hang Phan
									</a>
								</Link>{' '}
								for designning UI, UX
							</p>
						</div>
					</div>
				</div>

				<div className={'div-FooterContent-bottom'}>
					<div className={'div-FooterContent-flex'}>
						<div>
							<Link
								href={'https://github.com/lenguyenkhoi21/aboutme'}
								passHref={true}>
								<a className={'a-FooterContent-link'}>
									<p className={'p-FooterContent-copyright a-Footer-github'}>
										Fork me on Github
									</p>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.a-FooterContent-thanks {
						color: #fdc435;
					}

					.a-FooterContent-link {
						text-decoration: none;
					}

					.div-FooterContent-bottom {
						margin-bottom: 16px;
					}

					.div-FooterContent-space {
						margin-left: 24px;
					}

					.p-FooterContent-copyright {
						font-family: Nunito;
						font-size: 16px;
						color: #828282;
					}

					.div-FooterContent-flex {
						display: flex;
						justify-content: center;
						align-items: center;
					}
				`}
			</style>
		</>
	)
}

export default React.memo(FooterContent)
