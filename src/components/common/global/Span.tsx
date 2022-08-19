import GlobalSvgSelector, { GlobalSvgSelectorType } from '../../../assets/icons/global/globalSvgSelector'
import { createUseStyles, useTheme } from 'react-jss'
import { ReactNode } from 'react'
import { CustomTheme } from '../../../styles/themes'

type SpanProps = {
	children?: ReactNode,
	icon?: GlobalSvgSelectorType,
	className?: string,
	float?: 'left' | 'right',
	spacing?: number,
	[key: string]: any
}
const useSpanStyles = createUseStyles<'span', SpanProps>({
	span: {
		display: 'flex',
		alignItems: 'center',
		columnGap: (props) => props.spacing || 0,
	},
})

export const Span: React.FC<SpanProps> = ({ icon, className, children, ...props }) => {
	const classes = useSpanStyles({ ...props })

	return (
		<span className={classes.span + ' ' + className} {...props}>
			{props.float === 'right' && children}
			{icon && <GlobalSvgSelector type={icon} />}
			{(props.float === 'left') && children}
		</span>
	)
}
Span.defaultProps = {
	spacing: 0,
	float: 'left'
}

type ErrorProps = {
	children?: ReactNode,
	className?: string,
}

export const Error: React.FC<ErrorProps> = ({ children, className, ...props }) => {
	const theme = useTheme<CustomTheme>()

	return (
		<Span className={className} {...props} style={{ color: theme.colors.error }}>
			{children}
		</Span>
	)
}