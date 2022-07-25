import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Span } from '../common/global/Span'
import S from './Navbar.styled';

const navbarItems = [
	{ name: 'Profile', url: '/profile', icon: 'home' },
	{ name: 'Dialogs', url: '/dialogs', icon: 'message' },
	{ name: 'Users', url: '/users', icon: 'two-user' },
	{ name: 'Settings', url: '/settings', icon: 'setting' }
]

const Navbar = () => {
	const [mouseIsOver, setMouseIsOver] = useState(false)

	function handlerOnMouseEnter() {
		setMouseIsOver(true)
	}

	function handlerOnMouseLeave() {
		setMouseIsOver(false)
	}

	const navbarList = navbarItems.map((item, i) => (
		<S.Item key={i}>
			<NavLink
				to={item.url}
				className={({ isActive }) => isActive ? 'active' : ''}
			>
				<Span icon={item.icon} spacing='14px'>{item.name}</Span>
			</NavLink>
		</S.Item>
	))
	return (
		<S.Sidebar
			onMouseEnter={handlerOnMouseEnter}
			onMouseLeave={handlerOnMouseLeave}
			className={`${mouseIsOver ? 'active' : ''}`}
		>
			<ul>
				{navbarList}
			</ul>
		</S.Sidebar>
	)
}

export default Navbar;