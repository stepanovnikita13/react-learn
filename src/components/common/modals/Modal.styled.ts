import { createUseStyles } from 'react-jss'
import { device } from '../../../styles/device'
import { CustomTheme } from '../../../styles/themes'

const useStyles = createUseStyles({
	modal: ({ theme }: { theme: CustomTheme }) => ({
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.colors.backgroundAroundModal,
		zIndex: theme.zIndex.modal
	}),
	container: {
		width: '100%',
		margin: [0, 'auto'],
		padding: [0, 10],
		[`@media ${device.tabletS}`]: {
			width: 'auto',
			margin: 0,
			padding: 0,

		}
	}
})

export default useStyles