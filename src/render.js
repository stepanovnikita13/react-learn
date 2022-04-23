import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost, updateCurrentPostText, updateMessageText, sendMessage } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<App
				state={state}
				addPost={addPost}
				sendMessage={sendMessage}
				updateCurrentPostText={updateCurrentPostText}
				updateMessageText={updateMessageText}
			/>
		</React.StrictMode>
	)
}