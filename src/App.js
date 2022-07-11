import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { initializeApp } from './redux/app-reducer'

import './App.css';

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import LoginContainer from './components/Login/LoginContainer'

import Preloader from './components/common/Preloader'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp()
	}

	render() {
		if (!this.props.initialized) return <Preloader />

		return (
			<div id='app' className='wrapper'>
				<Header />
				<div className='main_wrap' id='main_wrap'>
					<div className='main'>
						<div className='container main__grid'>
							<Navbar />
							<div className='content'>
								<Suspense fallback={<Preloader />}>
									<Routes>
										<Route path='/' element={<Navigate to={this.props.isAuth ? 'profile' : 'login'} replace={true} />} />
										<Route path='login' element={<LoginContainer />} />
										<Route path='profile' element={<ProfileContainer />} />
										<Route path='profile/:userId' element={<ProfileContainer />} />
										<Route path='dialogs/*' element={<DialogsContainer />} />
										<Route path={'users/'} element={<UsersContainer />} />
										<Route path='settings/*' element={<Settings />} />
									</Routes>
								</Suspense>
							</div>
						</div>
					</div>
				</div>
				<footer>
					<div className='container'>
						<a href='https://ru.freepik.com/vectors/people'>People вектор создан(а) kubanek - ru.freepik.com</a>
					</div>
				</footer>
			</div>
		)
	}

}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
