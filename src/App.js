import React, { Suspense, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { compose } from 'redux'

import { selectInitialized } from './redux/app-selectors'
import { initializeApp } from './redux/app-reducer'

import './App.css';
import getTheme from './styles/themes'
import globalStyleSheet from './styles/globalStyleSheet'

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import LoginContainer from './components/Login/LoginContainer'
import Preloader from './components/common/Preloader'
//import S from './App.styled'
import withTheme from './hoc/withTheme'
import withAuth from './hoc/withAuth'
import { selectIsAuthInServer } from './redux/auth-selectors'
import Register from './components/Register/Register'
import useStyles from './App.styled'
import { useTheme } from 'react-jss'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

const App = (props) => {
	const { initializeApp, initialized, currentTheme, setTheme, isAuthInServer, isAuth, setIsAuth } = props
	const theme = useTheme()
	const classes = useStyles({ theme })
	const topRef = useRef()

	useEffect(() => {
		if (isAuthInServer === undefined) {
			initializeApp()
		} else {
			setIsAuth(isAuthInServer)
		}
	}, [initializeApp, setIsAuth, isAuthInServer])

	useEffect(() => {
		globalStyleSheet.update(getTheme(currentTheme))
	}, [currentTheme])

	if (!initialized) return null

	return (
		<div className={classes.wrapper} ref={topRef} id='app'>
			<Header currentTheme={currentTheme} setTheme={setTheme} isAuth={isAuth} />
			<Navbar topRef={topRef} />
			<div className={classes.main}>
				<div className='container'>
					<Suspense fallback={<Preloader />}>
						<Routes>
							<Route exact path='/' element={<Navigate to='profile' replace={true} />} />
							<Route path='login' element={<LoginContainer />} />
							<Route path='profile/' element={<ProfileContainer isAuth={isAuth} />} >
								<Route path=':userId' element={<ProfileContainer isAuth={isAuth} />} />
							</Route>
							<Route path='dialogs/*' element={<DialogsContainer isAuth={isAuth} />} />
							<Route path='users/' element={<UsersContainer topRef={topRef} />} />
							<Route path='settings' element={<Settings />} />
							<Route path='register' element={<Register />} />
							<Route path='*' element={<div>404</div>} />
						</Routes>
					</Suspense>
				</div>
			</div>
			<footer>
				<div className='container'>
					{/* <a href='https://ru.freepik.com/vectors/people'>People вектор создан(а) kubanek - ru.freepik.com</a> */}
				</div >
			</footer >
		</div >
	)
}

const mapStateToProps = state => ({
	initialized: selectInitialized(state),
	isAuthInServer: selectIsAuthInServer(state),
})

export default compose(
	connect(mapStateToProps, { initializeApp }),
	withTheme,
	withAuth
)(React.memo(App))