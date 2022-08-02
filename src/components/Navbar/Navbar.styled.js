import { device } from '../../styles/device'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
	sidebar: ({ isActive }) => ({
		position: 'fixed',
		width: '100%',
		top: 0,
		left: 0,
		zIndex: theme.zIndex.navbar,
		[`@media ${device.laptopS}`]: {
			top: 90,
			boxShadow: '3px 3px 7px 0px rgb(0 0 0 / 20%)',
			padding: 13,
			backgroundColor: theme.colors.sidebar,
			borderTopRightRadius: theme.sizes.borderRadiusLarge,
			borderBottomRightRadius: theme.sizes.borderRadiusLarge,
			height: 'min-content',
			fontSize: 1.2,
			transition: 'width .2s ease',
			overflow: 'hidden',
			width: isActive ? theme.sizes.navbarWidth : 50,
		}
	}),
	item: {
		display: 'flex',
		alignItems: 'center',
		height: '1.5em',
		'& a.active': {
			color: theme.colors.primary
		}
	}
}))

export default useStyles