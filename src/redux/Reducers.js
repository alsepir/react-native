
import { INPUT, MENU, DESCRIPTION } from './../Type'

const initialState = {
		level: INPUT,
		name: '',
		idListItem: 0
}

const reducer1 = (state = initialState, action) => {
	switch (action.type) {
		case 'to Menu': 
			//console.log('to Menu', state)
			return {...state, level: MENU, name: action.payload }
		case 'to Hello':
			//console.log('to Hello', state)
			return {...state, level: INPUT, name: '', idListItem: 0 }
		case 'to Description':
			//console.log('to Description', state)
			return {...state, level: DESCRIPTION, idListItem: action.idListItem }
		case 'go Back':
			//console.log('go Back', state)
			return {...state, level: MENU}
		default:
			//console.log('defReducer', state)
			return state
	}
};

export default reducer1 