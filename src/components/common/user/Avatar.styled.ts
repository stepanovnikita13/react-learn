import { createUseStyles } from 'react-jss'
import { CustomTheme } from '../../../styles/themes'

const useStyles = createUseStyles((theme: CustomTheme) => ({
	avatar: {
		position: 'relative',
		height: 'fit-content',
		borderRadius: '50%',
		backgroundColor: theme.colors.background,
		border: {
			size: 8,
			style: 'solid',
			color: theme.colors.border
		},
		overflow: 'hidden',
		'& img': {
			width: '100%',
			height: 'auto',
			objectFit: 'cover'
		}
	},
	children: {
		position: 'absolute',
		top: 0,
		width: '100%',
		height: '100%'
	}
}), { name: 'Avatar' })

export default useStyles