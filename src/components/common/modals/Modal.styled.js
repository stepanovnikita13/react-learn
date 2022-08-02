import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	modal: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: ({ theme }) => theme.colors.backgroundAroundModal,
		zIndex: ({ theme }) => theme.zIndex.modal
	}
})

export default useStyles