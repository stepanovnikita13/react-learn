import withStyles from 'react-jss'
import GlobalSvgSelector from '../../../assets/icons/global/globalSvgSelector'

const styles = {
	span: {
		display: 'flex',
		alignItems: 'center',
		columnGap: props => props?.spacing || 0,
	}
}

const Span = ({ classes, icon, ...props }) => {
	return (
		<span className={classes.span}>
			{props.float === 'right' && props.children}
			{icon && <GlobalSvgSelector type={icon} className={props.className} />}
			{(props.float === 'left' || !props.float) && props.children}
		</span>
	)
}

export default withStyles(styles)(Span)