import { createUseStyles } from 'react-jss'
import { device } from '../../../styles/device'
import { CustomTheme } from '../../../styles/themes'
import { StyleProps } from './Chat'

type RuleNames = 'chat' | 'chatWrapper' | 'messagesBlock' | 'magicBox'
const useStyles = createUseStyles<RuleNames, StyleProps, CustomTheme>(theme => ({
	chat: {
		display: 'flex',
		flexFlow: 'column',
		flex: '1 1 100%',
		rowGap: 15,
		justifyContent: 'flex-end',
		overflow: 'hidden',
		[`@media ${device.tabletS}`]: {
			flex: '1 1 auto'
		}
	},
	chatWrapper: {
		display: 'flex',
		position: 'relative',
		overflow: 'hidden',
	},
	messagesBlock: {
		display: 'flex',
		width: '100%',
		flexFlow: 'column-reverse nowrap',
		overflowY: 'auto',
		overflowX: 'hidden',
		'&>*:not(:first-child)': {
			marginBottom: 10
		},
		'&::-webkit-scrollbar': {
			width: 5,
			backgroundColor: theme.colors.scrollbarBackground,
			borderRadius: '5px',
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: theme.colors.scrollbar,
			borderRadius: '5px'
		},
		'&::-webkit-scrollbar-track': {
			borderRadius: '5px'
		}
	},
	magicBox: ({ scrollBarIsShow }) => ({
		display: 'block',
		position: 'absolute',
		height: '100%',
		width: 5,
		top: 0,
		right: 0,
		opacity: scrollBarIsShow ? 0 : 1,
		backgroundColor: theme.colors.background,
		transition: 'opacity .1s'
	})
}), { name: 'Chat' })

export default useStyles