import withStyles from 'react-jss'
import GlobalSvgSelector from '../../../assets/icons/global/globalSvgSelector'
import styled from '../../../styledJss'

const span = styled('span')
const styles = {
	span: {
		display: 'flex',
		alignItems: 'center',
		columnGap: props => props?.spacing || 0,
	}
}

export let Span = ({ classes, icon, ...props }) => {
	return (
		<span className={classes.span}>
			{props.float === 'right' && props.children}
			{icon && <GlobalSvgSelector type={icon} className={props.className} />}
			{(props.float === 'left' || !props.float) && props.children}
		</span>
	)
}
Span = withStyles(styles)(Span)

export const Error = span(({ theme }) => ({
	color: theme.COLORS.error
}))