import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './css/null.css';
import './css/vars.css';
import './index.css';

import App from './App';
//import { addPost, updateCurrentPostText, updateMessageText, sendMessage, subscribe } from './redux/state';
//import state from './redux/state';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (store) => {
	root.render(
		<React.StrictMode>
			<App
				state={store.getState()}
				addPost={store.addPost.bind(store)}
				sendMessage={store.sendMessage.bind(store)}
				updateCurrentPostText={store.updateCurrentPostText.bind(store)}
				updateMessageText={store.updateMessageText.bind(store)}
			/>
		</React.StrictMode>
	)
}

renderEntireTree(store);
store.subscribe(renderEntireTree);

reportWebVitals();
