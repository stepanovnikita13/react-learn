import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
	return (
		<BrowserRouter>
			<div className="app__grid">
				<Header />
				<Navbar />
				<div className='content'>
					<Routes>
						<Route path='/profile/*' element={<Profile postsData={props.postsData} />} />
						<Route path='dialogs/*' element={<Dialogs dialogsData={props.dialogsData} msgData={props.msgData} />} />
						<Route path='music/*' element={<Music />} />
						<Route path='news/*' element={<News />} />
						<Route path='settings/*' element={<Settings />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
