import { createUseStyles } from 'react-jss'
import { device } from '../../../../styles/device'

const useStyles = createUseStyles({
	container: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		backgroundColor: ({ isDragEnter, theme }) => isDragEnter ? theme.colors.backgroundModalLight : theme.colors.backgroundModal,
		borderRadius: ({ theme }) => theme.sizes.borderRadiusLarge,
		padding: 40,
		[`@media ${device.tabletS}`]: {
			width: 500,
		}
	},
	header: {
		position: 'absolute',
		top: 10,
		left: 15,
		right: 15,
		display: 'flex',
		flexFlow: 'row nowrap',
		justifyContent: 'space-between'
	},
	content: {
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'center',
		rowGap: 8
	},
	customUploadFile: {
		'&>input': {
			display: 'none'
		}
	}
}, { name: 'Modal' })

export default useStyles