import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost, updateCurrentPostText } from './redux/state';
import { sendMessage } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<App
				state={state}
				addPost={addPost}
				sendMessage={sendMessage}
				updateCurrentPostText={updateCurrentPostText}
			/>
		</React.StrictMode>
	)
}