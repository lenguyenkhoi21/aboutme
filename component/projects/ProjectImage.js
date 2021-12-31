import React from 'react'
import Image from 'next/image'

const ProjectImage = ({ project }) => {
	return (
		<>
			<div className='col-md-6 div-ProjectContent-maxw'>
				<div>
					<div className='div-ProjectImage-right'>
						<Image
							src={`${project.image}`}
							width={500}
							height={500}
							alt={'Working'}
						/>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.div-ProjectContent-maxw {
						width: 500px;
						max-width: 500px;
					}

					.p-ProjectImage-techDetails {
						font-family: Nunito;
						font-weight: bold;
						font-size: 18px;
						line-height: 150%;
					}

					.p-ProjectImage-tech {
						font-family: Nunito-Bold;
						font-weight: bold;
						font-size: 18px;
						line-height: 150%;
					}

					.p-ProjectImage-title {
						font-weight: bold;
						font-size: 40px;
						line-height: 150%;
					}

					.div-ProjectImage-container {
						display: flex;
						justify-content: center;
						align-items: center;
					}
				`}
			</style>
		</>
	)
}

export default ProjectImage
