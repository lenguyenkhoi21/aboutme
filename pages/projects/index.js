import React, { useContext, useEffect } from 'react'
import { TITLE_ACTION, TitleContext } from '../../reducer/Title.Reducer'

const ProjectPage = () => {
	const titleCTX = useContext(TitleContext)
	useEffect(() => {
		titleCTX.changeTitle(TITLE_ACTION.CHANGE_TITLE, 'My Projects', '/projects')

		// eslint-disable-next-line
	}, [])

	return (
		<>
			<div className={'background-color-page'}>
				<div className={'align-page'}></div>
			</div>
		</>
	)
}

export default ProjectPage
