const SEND_MESSAGE = 'dialogs/SEND_MESSAGE'

type MsgDataType = {
	id: number,
	text: string
}
type DialogsData = {
	id: number,
	firstName: string,
	lastName: string,
	avatar: string
}
let initialState = {
	msgData: [
		{ id: 0, text: 'Hi!' },
		{ id: 1, text: 'Go to the bar!' },
		{ id: 2, text: 'How are you?' },
	] as Array<MsgDataType>,

	dialogsData: [
		{ id: 0, firstName: 'Nikita', lastName: 'Stepanov', avatar: 'https://i.ibb.co/fCtqnSJ/ava07.jpg' },
		{ id: 1, firstName: 'Stas', lastName: 'Ivanov', avatar: 'https://i.ibb.co/35Knd56/ava06.jpg' },
		{ id: 2, firstName: 'German', lastName: 'Petrov', avatar: 'https://i.ibb.co/fv31xDW/ava05.jpg' },
		{ id: 3, firstName: 'Turbo', lastName: 'Sidorov', avatar: 'https://i.ibb.co/DR301pR/ava04.jpg' },
		{ id: 4, firstName: 'Djusha', lastName: 'Metelkin', avatar: 'https://i.ibb.co/ZJhPp2W/ava03.jpg' },
	] as Array<DialogsData>,
}

export type InitialStateType = typeof initialState

const dialogs = (state = initialState, action: ActionTypes): InitialStateType => {
	switch (action.type) {
		case SEND_MESSAGE: {
			let newMessage = {
				id: state.msgData.length,
				text: action.payload.message,
			}
			return {
				...state,
				msgData: [...state.msgData, newMessage],
			}
		}

		default: return state;
	}
}
type ActionTypes = SendMessageActionType
type SendMessageActionType = { type: typeof SEND_MESSAGE, payload: { message: string } }
export const sendMessage = (message: string): SendMessageActionType => ({ type: SEND_MESSAGE, payload: { message } })

export default dialogs