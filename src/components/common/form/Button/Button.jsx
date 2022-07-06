import s from './Button.module.css'

export const Button = ({ className, inProgress, ...props }) => {
	return (
		<button {...props} className={`${s.button} ${className} ${inProgress ? s.inProgress : ''}`}>
			{props.children}
		</button>
	)
}