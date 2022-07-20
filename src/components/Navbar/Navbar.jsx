import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '../../styledJss';
import Span from '../common/global/Span'

const Sidebar = styled('nav')(({ theme }) => ({
	position: 'fixed',
	boxShadow: '3px 3px 7px 0px rgb(0 0 0 / 20%)',
	zIndex: theme.zIndex.navbar,
	padding: 13,
	backgroundColor: theme.colors.sidebar,
	borderTopRightRadius: theme.sizes.borderRadiusLarge,
	borderBottomRightRadius: theme.sizes.borderRadiusLarge,
	marginTop: 20,
	height: 'min-content',
	fontSize: 1.2,
	transition: 'width .2s ease',
	overflow: 'hidden',
	width: 50,
	'&.active': {
		width: 155
	}
}))

const Item = styled('li')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	height: '1.5em',
	'& a.active': {
		color: theme.colors.primary
	}
}))

const Navbar = () => {
	const [mouseIsOver, setMouseIsOver] = useState(false)

	function handlerOnMouseEnter() {
		setMouseIsOver(true)
	}

	function handlerOnMouseLeave() {
		setMouseIsOver(false)
	}

	const navbarItems = [
		{ name: 'Profile', url: '/profile', icon: 'home' },
		{ name: 'Dialogs', url: '/dialogs', icon: 'message' },
		{ name: 'Users', url: '/users', icon: 'two-user' },
		{ name: 'Settings', url: '/settings', icon: 'setting' }
	]
	const navbarList = navbarItems.map((item, i) => (
		<Item key={i}>
			<NavLink
				to={item.url}
				className={({ isActive }) => isActive ? 'active' : ''}
			>
				<Span icon={item.icon} spacing='14px'>{item.name}</Span>
			</NavLink>
		</Item>
	))
	return (
		<Sidebar
			onMouseEnter={handlerOnMouseEnter}
			onMouseLeave={handlerOnMouseLeave}
			className={`${mouseIsOver ? 'active' : ''}`}
		>
			<ul>
				{navbarList}
			</ul>
		</ Sidebar>
	)
}

export default Navbar;