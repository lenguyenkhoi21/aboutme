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
			<div className={'background-color-page div-ProjectPage-padding'}>
				<div className={'div-ProjectPage-container div-ProjectPage-margin'}>
					<div>
						<p className={'p-ProjectPage-title'}> Projects </p>
					</div>
				</div>
				<div className={'align-page'}>
					<ProjectDetail />
				</div>
			</div>
			<style jsx>
				{`
					.div-ProjectPage-padding {
						padding-top: 200px;
					}

					.div-ProjectPage-margin {
						margin-bottom: 100px;
					}
					.p-ProjectPage-title {
						font-weight: bold;
						font-size: 48px;
						line-height: 72px;
						text-decoration: underline;
						text-decoration-color: #fdc435;
					}

					.div-ProjectPage-container {
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
