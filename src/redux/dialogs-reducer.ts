import { DialogsData, MsgDataType } from "../types/types"
import { InferValueTypes } from "./redux-store"

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

const dialogs = (state = initialState, action: ActionTypes): InitialStateType => {
	switch (action.type) {
		case "dialogs/SEND_MESSAGE": {
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

export const actions = {
	sendMessage: (message: string) => ({ type: 'dialogs/SEND_MESSAGE', payload: { message } } as const)
}
export const sendMessage = actions.sendMessage
export default dialogs

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>
export type InitialStateType = typeof initialState