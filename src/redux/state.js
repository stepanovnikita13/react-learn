import { renderEntireTree } from "../render";

let state = {
	profilePage: {
		postsData: [
			{ id: 0, text: 'Hi! How are you?', likesCount: 12 },
			{ id: 1, text: "It's my first post", likesCount: 11 },
			{ id: 2, text: 'Bye!', likesCount: 8 },
		],
	},
	dialogsPage: {
		msgData: [
			{ id: 0, text: 'Hi!' },
			{ id: 1, text: 'Go to the bar!' },
			{ id: 2, text: 'How are you?' },
		],
		dialogsData: [
			{ id: 0, name: 'Nikita', avatar: 'https://i.ibb.co/fCtqnSJ/ava07.jpg' },
			{ id: 1, name: 'Stas', avatar: 'https://i.ibb.co/35Knd56/ava06.jpg' },
			{ id: 2, name: 'German', avatar: 'https://i.ibb.co/fv31xDW/ava05.jpg' },
			{ id: 3, name: 'Turbo', avatar: 'https://i.ibb.co/DR301pR/ava04.jpg' },
			{ id: 4, name: 'Djusha Metelkin', avatar: 'https://i.ibb.co/ZJhPp2W/ava03.jpg' },
		],
	},
}

export let addPost = (postText) => {
	let idValue = state.profilePage.postsData.length;
	let newPost = {
		id: idValue,
		text: postText,
		likesCount: 5,
	}

	state.profilePage.postsData.push(newPost);
	renderEntireTree(state);
}

export let sendMessage = (messageText) => {
	let idValue = state.dialogsPage.msgData.length;
	let newMessage = {
		id: idValue,
		text: messageText,
	}

	state.dialogsPage.msgData.push(newMessage);
	renderEntireTree(state);
}

export default state;