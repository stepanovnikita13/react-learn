import { device } from '../../styles/device'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
	sidebar: {
		position: 'fixed',
		width: '100%',
		height: '100%',
		top: theme.sizes.headerHeight,
		left: 0,
		zIndex: theme.zIndex.navbar,
		transform: 'translateX(-100%)',
		[`@media ${device.laptopS}`]: {
			transform: 'translateX(0)',
			top: 90,
			boxShadow: '3px 3px 7px 0px rgb(0 0 0 / 20%)',
			padding: 13,
			backgroundColor: theme.colors.backgroundContainer,
			borderTopRightRadius: theme.sizes.borderRadiusLarge,
			borderBottomRightRadius: theme.sizes.borderRadiusLarge,
			height: 'min-content',
			fontSize: 1.2,
			transition: 'width .2s ease',
			overflow: 'hidden',
			width: ({ isActive }) => isActive ? theme.sizes.navbarWidth : 50,
		}
	},
	list: ({ isActive }) => ({
		backgroundColor: theme.colors.sidebar,
		transition: 'transform .2s ease-in-out',
		transform: isActive && 'translateX(100%)',
		[`@media ${device.laptopS}`]: {
			transform: 'translateX(0)',
		}
	}),
	item: {
		display: 'flex',
		alignItems: 'center',
		height: '1.5em',
		'& a.active': {
			color: theme.colors.primary
		}
	},
	burger: {
		position: 'absolute',
		right: 0,
		width: 50,
		height: theme.sizes.headerHeight,
		backgroundColor: theme.colors.backgroundContainer,
		marginTop: -theme.sizes.headerHeight,
		transform: 'translateX(100%)'
	}
}))

export default useStyles