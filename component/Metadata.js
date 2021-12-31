import React, { useContext } from 'react'
import Head from 'next/head'
import { TitleContext } from '../reducer/Title.Reducer'

const Metadata = () => {
	const TitleCTX = useContext(TitleContext)
	return (
		<>
			<Head>
				<title>{TitleCTX.state.name}</title>
				<meta name='Le Nguyen Khoi' content='This is my profile' />
				<link rel='shortcut icon' href='/kln.ico' />
			</Head>
		</>
	)
}

export default React.memo(Metadata)
