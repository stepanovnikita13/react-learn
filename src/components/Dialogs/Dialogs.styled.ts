import { createUseStyles } from 'react-jss'
import { device } from '../../styles/device'
import { CustomTheme } from '../../styles/themes'
import { StyleProps } from './Dialogs'

type RuleNames = 'container' | 'dialogs' | 'button'
const useStyles = createUseStyles<RuleNames, StyleProps, CustomTheme>(theme => ({
	container: {
		display: 'flex',
		position: 'relative',
		height: `calc(100vh - ${theme.sizes.headerHeight}px)`,
		padding: [20, 0],
	},
	dialogs: {
		position: 'absolute',
		inset: '20px 0px',
		backgroundColor: theme.colors.background,
		zIndex: theme.zIndex.dialogs,
		transform: ({ isHide }) => isHide ? 'translateX(-100%)' : 'translateX(0)',
		transition: 'transform .2s ease',
		'&>*:not(:last-child)': {
			marginBottom: 10
		},
		[`@media ${device.tabletS}`]: {
			position: 'static',
			flex: '0 1 320px'
		},
		[`@media ${device.laptopL}`]: {
			flex: '0 1 400px'
		},
	},
	button: {
		position: 'fixed',
		backgroundColor: theme.colors.buttonToDialogs,
		padding: 5,
		borderRadius: '50%',
		zIndex: theme.zIndex.buttonToDialogs,
	}
}), { name: 'Dialogs' })

export default useStyles