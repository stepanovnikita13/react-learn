import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import store from './redux/redux-store'
import './index.css'

import App from './App'
import { JssProvider } from 'react-jss'
import { jss } from './styledJss'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	// <React.StrictMode>
	< HashRouter >
		<Provider store={store}>
			<JssProvider jss={jss} >
				<App />
			</JssProvider>
		</Provider>
	</ HashRouter>
	// </React.StrictMode>
)

reportWebVitals();