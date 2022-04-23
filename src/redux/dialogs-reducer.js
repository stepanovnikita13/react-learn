const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'

const dialogsReducer = (state, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				id: state.msgData.length,
				text: state.currentText,
			}

			state.msgData.push(newMessage)
			state.currentText = ''

			break;

		case UPDATE_MESSAGE_TEXT:
			state.currentText = action.newText
			break;

		default: return state
	}

	return state
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateMessageTextCreator = text => ({ type: UPDATE_MESSAGE_TEXT, newText: text })

export default dialogsReducer