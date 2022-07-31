import React, { Suspense, useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'

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
import Container from './components/common/global/Container'
import S from './App.styled'
import { compose } from 'redux'
import withTheme from './hoc/withTheme'
import withAuth from './hoc/withAuth'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

const App = ({ initializeApp, initialized, theme, setTheme, isAuth, setIsAuth }) => {
	useEffect(() => {
		initializeApp()
	}, [initializeApp, isAuth])

	useEffect(() => {
		globalStyleSheet.update(getTheme(theme))
	}, [theme])

	if (!initialized) return null

	return (
		<S.Wrapper id='app'>
			<Header theme={theme} setTheme={setTheme} isAuth={isAuth} />
			<S.Main>
				<Navbar />
				<Container>
					<Suspense fallback={<Preloader />}>
						<Routes>
							<Route exact path='/' element={<Navigate to='profile' replace={true} />} />
							<Route path='login' element={<LoginContainer />} />
							<Route path='profile/' element={<ProfileContainer />} >
								<Route path=':userId' element={<ProfileContainer />} />
							</Route>
							<Route path='dialogs/*' element={<DialogsContainer />} />
							<Route path={'users/'} element={<UsersContainer />} />
							<Route path='settings/*' element={<Settings />} />
							<Route path='*' element={<div>404</div>} />
						</Routes>
					</Suspense>
				</Container>
			</S.Main>
			<footer>
				<Container>
					<a href='https://ru.freepik.com/vectors/people'>People вектор создан(а) kubanek - ru.freepik.com</a>
				</Container>
			</footer>
		</S.Wrapper>
	)
}

const mapStateToProps = state => ({
	initialized: selectInitialized(state),
})

export default compose(
	connect(mapStateToProps, { initializeApp }),
	withTheme,
	withAuth
)(App)