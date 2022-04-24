import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './css/null.css';
import './css/vars.css';
import './index.css';

import App from './App';

import store from './redux/redux-store';


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (store) => {
	root.render(
		<React.StrictMode>
			<App
				state={store.getState()}
				dispatch={store.dispatch.bind(store)}
			/>
		</React.StrictMode>
	)
}

renderEntireTree(store)

store.subscribe(() => {
	renderEntireTree(store)
});

reportWebVitals();
