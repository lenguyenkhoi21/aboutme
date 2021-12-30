import React, { useContext, useEffect } from 'react'
import { TITLE_ACTION, TitleContext } from '../../reducer/Title.Reducer'

const AboutMePage = () => {
	const titleCTX = useContext(TitleContext)

	useEffect(() => {
		titleCTX.changeTitle(TITLE_ACTION.CHANGE_TITLE, 'About me')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<div className={'background-color-page'}>
				<div className={'align-page'}>
					<div className={'abc'}></div>
				</div>
			</div>
			<style jsx>
				{`
					.abc {
						height: calc(100vh + 300px);
						background: black;
					}
				`}
			</style>
		</>
	)
}

export default AboutMePage
