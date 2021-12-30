import { createContext, useReducer } from 'react'

export const TITLE_ACTION = {
	CHANGE_TITLE: 'CHANGE_TITLE'
}

export const TitleContext = createContext()

const TitleInitState = {
	name: null,
	path: null
}

const Reducer = (state, action) => {
	switch (action.type) {
		case TITLE_ACTION.CHANGE_TITLE:
			return { ...state, name: action.content, path: action.path }

		default:
			return state
	}
}

const TitleReducer = props => {
	//Title Context
	const [store, dispatch] = useReducer(Reducer, TitleInitState)
	const titleProps = {
		state: store,
		changeTitle: (type, content, path) => dispatch({ type, content, path })
	}

	return (
		<TitleContext.Provider value={titleProps}>
			{props.children}
		</TitleContext.Provider>
	)
}

export default TitleReducer
