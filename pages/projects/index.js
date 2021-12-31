import React, { useContext, useEffect } from 'react'
import { TITLE_ACTION, TitleContext } from '../../reducer/Title.Reducer'
import ProjectDetail from '../../component/projects/ProjectDetail'

const ProjectPage = () => {
	const titleCTX = useContext(TitleContext)
	useEffect(() => {
		titleCTX.changeTitle(TITLE_ACTION.CHANGE_TITLE, 'My Projects', '/projects')

		// eslint-disable-next-line
	}, [])

	return (
		<>
			<div className={'background-color-page'}>
				<div className={'row g-0 align-page div-Projects-container'}>
					<ProjectDetail />
				</div>
			</div>
			<style jsx>
				{`
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
