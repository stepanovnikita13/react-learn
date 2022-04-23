import { renderEntireTree } from "../render";

let state = {
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
}

export let addPost = () => {
	let newPost = {
		id: state.profilePage.postsData.length,
		text: state.profilePage.currentPostText,
		likesCount: 0,
	}

	state.profilePage.postsData.push(newPost);
	state.profilePage.currentPostText = '';
	renderEntireTree(state);
}

export let sendMessage = () => {
	let newMessage = {
		id: state.dialogsPage.msgData.length,
		text: state.dialogsPage.currentText,
	}

	state.dialogsPage.msgData.push(newMessage);
	state.dialogsPage.currentText = '';
	renderEntireTree(state);
}

export let updateCurrentPostText = (newText) => {
	state.profilePage.currentPostText = newText;
	renderEntireTree(state);
}

export let updateMessageText = (newText) => {
	state.dialogsPage.currentText = newText;
	renderEntireTree(state);
}

export default state;