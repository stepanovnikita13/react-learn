const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'

let initialState = {
	msgData: [
		{ id: 0, text: 'Hi!' },
		{ id: 1, text: 'Go to the bar!' },
		{ id: 2, text: 'How are you?' },
	],

	currentText: '',

	dialogsData: [
		{ id: 0, firstName: 'Nikita', lastName: 'Stepanov', avatar: 'https://i.ibb.co/fCtqnSJ/ava07.jpg' },
		{ id: 1, firstName: 'Stas', lastName: 'Ivanov', avatar: 'https://i.ibb.co/35Knd56/ava06.jpg' },
		{ id: 2, firstName: 'German', lastName: 'Petrov', avatar: 'https://i.ibb.co/fv31xDW/ava05.jpg' },
		{ id: 3, firstName: 'Turbo', lastName: 'Sidorov', avatar: 'https://i.ibb.co/DR301pR/ava04.jpg' },
		{ id: 4, firstName: 'Djusha', lastName: 'Metelkin', avatar: 'https://i.ibb.co/ZJhPp2W/ava03.jpg' },
	],
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			let newMessage = {
				id: state.msgData.length,
				text: state.currentText,
			}
			return {
				...state,
				msgData: [...state.msgData, newMessage],
				currentText: ''
			}
		}

		case UPDATE_MESSAGE_TEXT: {
			return {
				...state,
				currentText: action.newText
			}
		}

		default: return state;
	}
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateMessageTextCreator = text => ({ type: UPDATE_MESSAGE_TEXT, newText: text })

export default dialogsReducer