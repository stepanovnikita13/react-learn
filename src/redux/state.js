const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'

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
	_renderEntireTree() { },
	subscribe(observer) {
		this._renderEntireTree = observer;
	},
	getState() {
		return this._state
	},

	dispatch(action) {
		if (action.type === "ADD_POST") {
			let newPost = {
				id: this._state.profilePage.postsData.length,
				text: this._state.profilePage.currentPostText,
				likesCount: 0,
			}

			this._state.profilePage.postsData.push(newPost);
			this._state.profilePage.currentPostText = '';
			this._renderEntireTree(this);

		} else if (action.type === "SEND_MESSAGE") {
			let newMessage = {
				id: this._state.dialogsPage.msgData.length,
				text: this._state.dialogsPage.currentText,
			}

			this._state.dialogsPage.msgData.push(newMessage);
			this._state.dialogsPage.currentText = '';
			this._renderEntireTree(this);

		} else if (action.type === "UPDATE_POST_TEXT") {
			this._state.profilePage.currentPostText = action.newText;
			this._renderEntireTree(this);

		} else if (action.type === "UPDATE_MESSAGE_TEXT") {
			this._state.dialogsPage.currentText = action.newText;
			this._renderEntireTree(this);
		}
	}
}

window.store = store;

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = text => ({ type: UPDATE_POST_TEXT, newText: text })
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateMessageTextActionCreator = text => ({ type: UPDATE_MESSAGE_TEXT, newText: text })

export default store;