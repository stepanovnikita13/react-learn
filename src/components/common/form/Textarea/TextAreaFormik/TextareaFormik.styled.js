import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
	fieldset: {
		borderColor: ({ isError }) => isError && theme.colors.error,
		borderWidth: ({ isError }) => isError && 1,
		animation: ({ isError }) => isError && '.2s cubic-bezier(.64, .19, .51, .67) 2 normal both $errorPulse',
		'&> legend': {
			color: ({ isError }) => isError && theme.colors.error
		}
	},
	'@keyframes errorPulse': {
		from: {
			borderColor: theme.colors.border
		},
		to: {
			borderColor: theme.colors.error
		}
	},
	error: {
		color: ({ isError }) => isError && theme.colors.error,
		fontSize: .8
	}
}))

export default useStyles