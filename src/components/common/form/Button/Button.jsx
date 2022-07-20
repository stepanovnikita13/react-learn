import s from './Button.module.css'
import styled from '../../../../styledJss'

const StyledButton = styled('button')(({ theme }) => ({
	borderRadius: 'var(--borderRadius)',
	backgroundColor: theme.colors.primary,
	color: theme.colors.buttonText,
	fontSize: '1em',
	lineHeight: '3em',
	width: '9em',
	'&:disabled': {
		backgroundColor: 'var(--btnDisabled)',
	}
}))

export const Button = ({ className, inProgress, ...props }) => {
	return (
		<StyledButton {...props} /* className={`${className} ${inProgress ? s.inProgress : ''}`} */>
			{props.children}
		</StyledButton >
	)
}