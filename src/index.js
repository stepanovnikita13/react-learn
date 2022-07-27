import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import store from './redux/redux-store'
import './index.css'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	// <React.StrictMode>
	< HashRouter >
		<Provider store={store}>
			<App />
		</Provider>
	</ HashRouter>
	// </React.StrictMode>
)

reportWebVitals();