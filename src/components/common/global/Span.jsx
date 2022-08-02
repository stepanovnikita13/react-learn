import GlobalSvgSelector from '../../../assets/icons/global/globalSvgSelector'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles({
	span: {
		display: 'flex',
		alignItems: 'center',
		columnGap: (props) => props.spacing || 0,
	},
	error: {
		color: ({ theme }) => theme.colors.error
	}
})

export const Span = ({ icon, className, children, ...props }) => {
	const theme = useTheme()
	const classes = useStyles({ ...props, theme })

	return (
		<span className={classes.span + ' ' + className} {...props}>
			{props.float === 'right' && children}
			{icon && <GlobalSvgSelector type={icon} />}
			{(props.float === 'left' || !props.float) && children}
		</span>
	)
}
Span.defaultProps = {
	spacing: 0
}

export const Error = ({ children, className, ...props }) => {
	const theme = useTheme()
	const classes = useStyles({ ...props, theme })

	return (
		<Span className={classes.error + ' ' + className} {...props}>
			{children}
		</Span>
	)
}