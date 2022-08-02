import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		flexFlow: 'column nowrap',
		justifyContent: 'space-between',
		width: 170,
		height: 260,
		backgroundColor: ({ theme }) => theme.colors.backgroundContainer,
		borderRadius: ({ theme }) => theme.sizes.borderRadiusLarge,
		padding: 10
	},
	avatar: {
		width: '85%',
		height: 'auto',
		margin: [0, 'auto']
	},
	info: {
		paddingTop: 10,
		overflow: 'hidden'
	},
	button: {
		width: '100%'
	}
})

export default useStyles