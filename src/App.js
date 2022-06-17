import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {
	return (
		<div className='wrapper'>
			<Header />
			<div className='main_wrap' id='main_wrap'>
				<div className='main'>
					<div className='container main__grid'>
						<Navbar />
						<div className='content'>
							<Routes>
								<Route path='profile/:userId' element={<ProfileContainer />} />
								<Route path='profile' element={<ProfileContainer />} />
								<Route path='dialogs/*' element={<DialogsContainer />} />
								<Route path='music/*' element={<Music />} />
								<Route path='news/*' element={<News />} />
								<Route path='settings/*' element={<Settings />} />
								<Route path={'users/'} element={<UsersContainer />} />
							</Routes>
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

export default App;
