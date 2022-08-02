import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Burger } from '../common/form/Buttons/Buttons';
import { Span } from '../common/global/Span'
import useStyles from './Navbar.styled';

const navbarItems = [
	{ name: 'Profile', url: '/profile', icon: 'home' },
	{ name: 'Dialogs', url: '/dialogs', icon: 'message' },
	{ name: 'Users', url: '/users', icon: 'two-user' },
	{ name: 'Settings', url: '/settings', icon: 'setting' }
]

const Navbar = () => {
	const [isActive, setIsActive] = useState(false)
	const classes = useStyles({ isActive })

	function handlerOnMouseEnter() {
		setIsActive(true)
	}

	function handlerOnMouseLeave() {
		setIsActive(false)
	}

	const navbarList = navbarItems.map((item, i) => (
		<li className={classes.item} key={i}>
			<NavLink
				to={item.url}
				className={({ isActive }) => isActive ? 'active' : ''}
			>
				<Span icon={item.icon} spacing='14px'>{item.name}</Span>
			</NavLink>
		</li>
	))
	return (
		<>
			<nav
				className={classes.sidebar}
				onMouseEnter={handlerOnMouseEnter}
				onMouseLeave={handlerOnMouseLeave}
			>
				<Burger />
				<ul>
					{navbarList}
				</ul>
			</nav>
		</>
	)
}

export default Navbar;