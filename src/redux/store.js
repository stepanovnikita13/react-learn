import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

let store = {
	_state: {
		profilePage: {
			postsData: [
				{ id: 0, text: 'Hi! How are you?', likesCount: 12 },
				{ id: 1, text: "It's my first post", likesCount: 11 },
				{ id: 2, text: 'Bye!', likesCount: 8 },
			],

			currentPostText: '',
		},
		dialogsPage: {
			msgData: [
				{ id: 0, text: 'Hi!' },
				{ id: 1, text: 'Go to the bar!' },
				{ id: 2, text: 'How are you?' },
			],

			currentText: '',

			dialogsData: [
				{ id: 0, name: 'Nikita', avatar: 'https://i.ibb.co/fCtqnSJ/ava07.jpg' },
				{ id: 1, name: 'Stas', avatar: 'https://i.ibb.co/35Knd56/ava06.jpg' },
				{ id: 2, name: 'German', avatar: 'https://i.ibb.co/fv31xDW/ava05.jpg' },
				{ id: 3, name: 'Turbo', avatar: 'https://i.ibb.co/DR301pR/ava04.jpg' },
				{ id: 4, name: 'Djusha Metelkin', avatar: 'https://i.ibb.co/ZJhPp2W/ava03.jpg' },
			],
		},
	},
	_callSubscriber() { },
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	getState() {
		return this._state
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

		this._callSubscriber(this)
	}
}

window.store = store;




export default store;