import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { device } from '../../styles/device';
import { Burger } from '../common/form/Buttons/Buttons';
import { Span } from '../common/global/Span'
import useStyles from './Navbar.styled'
import useMedia from '../../hooks/useMedia'

const navbarItems = [
	{ name: 'Profile', url: '/profile', icon: 'home' },
	{ name: 'Dialogs', url: '/dialogs', icon: 'message' },
	{ name: 'Users', url: '/users', icon: 'two-user' },
	{ name: 'Settings', url: '/settings', icon: 'setting' }
]

const Navbar = () => {
	const [isActive, setIsActive] = useState(false)
	const isMobile = useMedia([device.laptopS], [false], true)
	const classes = useStyles({ isActive })

	useEffect(() => {
		if (isMobile) {
			document.body.style.overflow = isActive ? 'hidden' : 'unset'
		}
		return (() => {
			document.body.style.overflow = 'unset'
		})
	}, [isActive, isMobile])

	function handlerOnMouseEnter() {
		!isMobile && setIsActive(true)
	}

	function handlerOnMouseLeave() {
		!isMobile && setIsActive(false)
	}

	function handlerClick() {
		setIsActive(!isActive)
	}

	const navbarList = navbarItems.map((item, i) => (
		<li className={classes.item} key={i}>
			<NavLink
				to={item.url}
				onClick={() => { setIsActive(false) }}
				className={({ isActive }) => isActive ? 'active' : ''}
			>
				<Span icon={item.icon} spacing='14px'>{item.name}</Span>
			</NavLink>
		</li>
	))
	return (
		<nav
			className={classes.sidebar}
			onMouseEnter={handlerOnMouseEnter}
			onMouseLeave={handlerOnMouseLeave}
		>
			{isMobile && <Burger className={classes.burger} onClick={handlerClick} isOpen={isActive} />}
			<ul className={classes.list + ' ' + (isMobile && 'container')}>
				{navbarList}
			</ul>
		</nav>
	)
}

export default Navbar;