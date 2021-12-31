import React from 'react'

const ProjectContent = ({ project }) => {
	return (
		<>
			<div className='col-md-6'>
				<div>
					<p className={'p-ProjectContent-title'}> {project.title} </p>
					{project.technology.map((tech, index1) => (
						<React.Fragment key={index1}>
							<p className={'p-ProjectContent-tech'}>
								{tech.type}:
								{tech.data.map((data, index2) => {
									if (index2 === tech.data.length - 1) {
										return (
											<React.Fragment key={index2}>
												<span className={'p-ProjectContent-techDetails'}>
													{' '}
													{data.name}.{' '}
												</span>
											</React.Fragment>
										)
									} else if (index2 === tech.data.length - 2) {
										return (
											<React.Fragment key={index2}>
												<span className={'p-ProjectContent-techDetails'}>
													{' '}
													{data.name} and{' '}
												</span>
											</React.Fragment>
										)
									} else {
										return (
											<React.Fragment key={index2}>
												<span className={'p-ProjectContent-techDetails'}>
													{' '}
													{data.name},{' '}
												</span>
											</React.Fragment>
										)
									}
								})}
							</p>
						</React.Fragment>
					))}
				</div>
			</div>
			<style jsx>
				{`
					.p-ProjectContent-techDetails {
						font-family: Nunito;
						font-weight: bold;
						font-size: 18px;
						line-height: 150%;
					}

					.p-ProjectContent-tech {
						font-family: Nunito-Bold;
						font-weight: bold;
						font-size: 18px;
						line-height: 150%;
					}

					.p-ProjectContent-title {
						font-weight: bold;
						font-size: 40px;
						line-height: 150%;
					}

					.div-ProjectContent-container {
						display: flex;
						justify-content: center;
						align-items: center;
					}
				`}
			</style>
		</>
	)
}

export default ProjectContent
