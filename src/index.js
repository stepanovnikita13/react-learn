import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/null.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
	{ id: 0, text: 'Hi! How are you?', likesCount: 12 },
	{ id: 0, text: "It's my first post", likesCount: 11 },
	{ id: 0, text: 'Bye!', likesCount: 8 },
]

let dialogsData = [
	{ id: 1, name: 'Nikita' },
	{ id: 2, name: 'Stas' },
	{ id: 3, name: 'German' },
	{ id: 4, name: 'Turbo' },
	{ id: 5, name: 'Djusha Metelkin' },
]

let msgData = [
	{ id: 1, msg: 'Hi!' },
	{ id: 1, msg: 'How are you?' },
	{ id: 1, msg: 'Go to the bar!' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App postsData={postsData} dialogsData={dialogsData} msgData={msgData} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
