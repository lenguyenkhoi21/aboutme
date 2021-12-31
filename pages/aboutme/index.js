import React, { useContext, useEffect } from 'react'
import { TITLE_ACTION, TitleContext } from '../../reducer/Title.Reducer'

const AboutMePage = () => {
	const titleCTX = useContext(TitleContext)

	useEffect(() => {
		titleCTX.changeTitle(TITLE_ACTION.CHANGE_TITLE, 'About me', 'aboutme')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<>
				<div className={'background-color-page'}>
					<div className={'align-page div-HomePage-container'}></div>
				</div>
				<style jsx>
					{`
						.div-HomePage-container {
							display: flex;
							justify-content: right;
							align-items: center;
						}
					`}
				</style>
			</>
		</>
	)
}

export default AboutMePage
