import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Header />
				<div className='main'>
					<div className='container main__grid'>
						<Navbar />
						<div className='content'>
							<Routes>
								<Route path='profile/*'
									element={<Profile
										profilePage={props.state.profilePage}
										dispatch={props.dispatch}
									/>}
								/>
								<Route path='dialogs/*'
									element={<DialogsContainer
										dialogsPage={props.state.dialogsPage}
										dispatch={props.dispatch}
									/>
									}
								/>
								<Route path='music/*' element={<Music />} />
								<Route path='news/*' element={<News />} />
								<Route path='settings/*' element={<Settings />} />
							</Routes>
						</div>
					</div>
				</div>
				<footer>
					<div className='container'>
						<a href='https://ru.freepik.com/vectors/people'>People вектор создан(а) kubanek - ru.freepik.com</a>
					</div>
				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
