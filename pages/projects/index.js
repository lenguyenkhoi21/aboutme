import React, { useContext, useEffect } from 'react'
import { TITLE_ACTION, TitleContext } from '../../reducer/Title.Reducer'
import ProjectDetail from '../../component/projects/ProjectDetail'

const ProjectPage = () => {
	const titleCTX = useContext(TitleContext)
	useEffect(() => {
		titleCTX.changeTitle(
			TITLE_ACTION.CHANGE_TITLE,
			'My Projects | Khoi Le Nguyen',
			'/projects'
		)

		// eslint-disable-next-line
	}, [])

	return (
		<>
			<div className={'background-color-page div-Projects-padding'}>
				<div className={'div-Projects-container div-Projects-margin'}>
					<div>
						<p className={'p-Projects-title'}> Projects </p>
					</div>
				</div>
				<div className={'row g-0 align-page div-Projects-container'}>
					<ProjectDetail />
				</div>
			</div>
			<style jsx>
				{`
					.div-Projects-padding {
						padding-top: 200px;
					}

					.div-Projects-margin {
						margin-bottom: 100px;
					}
					.p-Projects-title {
						font-weight: bold;
						font-size: 48px;
						line-height: 72px;
						text-decoration: underline;
						text-decoration-color: #fdc435;
					}

					.div-Projects-container {
						display: flex;
						justify-content: center;
						align-items: center;
					}
				`}
			</style>
		</>
	)
}

export default ProjectPage
