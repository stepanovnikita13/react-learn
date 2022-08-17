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
}
const useSpanStyles = createUseStyles<'span', SpanProps, CustomTheme>({
	span: {
		display: 'flex',
		alignItems: 'center',
		columnGap: (props) => props.spacing || 0,
	},
})

export const Span: React.FC<SpanProps> = ({ icon, className, children, ...props }) => {
	const theme = useTheme<CustomTheme>()
	const classes = useSpanStyles({ ...props, theme })

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

type ErrorProps = {
	children?: ReactNode,
	className?: string,
}
const useErrorStyles = createUseStyles<'error', ErrorProps, CustomTheme>({
	error: {
		color: ({ theme }) => theme.colors.error
	}
})

export const Error: React.FC<ErrorProps> = ({ children, className, ...props }) => {
	const theme = useTheme<CustomTheme>()
	const classes = useErrorStyles({ ...props, theme })
	const classNames = [
		classes.error,
		className
	].join(' ')

	return (
		<Span className={classNames} {...props}>
			{children}
		</Span>
	)
}