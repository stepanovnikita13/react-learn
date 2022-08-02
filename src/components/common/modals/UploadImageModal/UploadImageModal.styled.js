import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	container: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: 500,
		height: 300,
		backgroundColor: ({ isDragEnter, theme }) => isDragEnter ? theme.colors.backgroundModalLight : theme.colors.backgroundModal,
		borderRadius: ({ theme }) => theme.sizes.borderRadiusLarge,
		padding: 40
	},
	header: {
		position: 'absolute',
		top: 10,
		left: 15,
		right: 15,
		display: 'flex',
		flexFlow: 'row nowrap',
		justifyContent: 'space-between'
	}
})

export default useStyles