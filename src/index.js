import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'

import store from './redux/redux-store'

import './css/null.css'
import './css/vars.css'
import './index.css'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		< BrowserRouter >
			<Provider store={store}>
				<App />
			</Provider>
		</ BrowserRouter>
	</React.StrictMode>
)

reportWebVitals();