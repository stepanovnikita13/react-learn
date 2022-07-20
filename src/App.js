import React, { Suspense, useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'

import { selectInitialized, selectTheme } from './redux/app-selectors'
import { initializeApp, toggleTheme } from './redux/app-reducer'

import './App.css';
import { ThemeProvider } from 'styled-jss'
import getTheme from './styles/themes'
import globalStyleSheet from './styles/globalStyleSheet'
import styled from './styledJss'

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import LoginContainer from './components/Login/LoginContainer'
import Preloader from './components/common/Preloader'
import Container from './components/common/global/Container'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

const S = {}
S.Wrapper = styled('div')({
	display: 'flex',
	flexFlow: 'column',
	justifyContent: 'space-between',
	minHeight: '100vh',
})

const App = ({ initializeApp, initialized, theme, toggleTheme }) => {
	useEffect(() => {
		initializeApp()
		globalStyleSheet.update(getTheme(theme))
	}, [initializeApp, theme])

	if (!initialized) return <Preloader />

	return (
		<ThemeProvider theme={getTheme(theme)}>
			<S.Wrapper id='app'>
				<Header toggleTheme={toggleTheme} theme={theme} />
				<div className='main_wrap' id='main_wrap'>
					<div className='main'>
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
					</div>
				</div>
				<footer>
					<Container>
						<a href='https://ru.freepik.com/vectors/people'>People вектор создан(а) kubanek - ru.freepik.com</a>
					</Container>
				</footer>
			</S.Wrapper>
		</ThemeProvider>
	)
}

const mapStateToProps = state => ({
	initialized: selectInitialized(state),
	theme: selectTheme(state)
})

export default connect(mapStateToProps, { initializeApp, toggleTheme })(App)