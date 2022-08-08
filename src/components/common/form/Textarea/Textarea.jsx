import { useState } from 'react'
import useStyles from "./Textarea.styled"


export const Textarea = ({ children, label, className, isError, ...props }) => {
	const [isActive, setIsActive] = useState(false)
	const classes = useStyles({
		isError,
		isActive,
		label: !!label
	})
	const classNames = [
		classes.wrapper,
		className || null
	].join(' ')

	const handlerEvent = (propsFunc, func) => (e) => {
		func(e)
		propsFunc && propsFunc(e)
	}

	const handlerMouseLeave = (e) => {
		if (e.target !== document.activeElement)
			setIsActive(false)
	}

	return (
		<div className={classNames}>
			<label className={classes.label} htmlFor={props.name}>{label}</label>
			<div className={classes.root}>
				<textarea
					className={classes.textarea}
					{...props}
					onFocus={handlerEvent(props.onFocus, () => { setIsActive(true) })}
					onBlur={handlerEvent(props.onBlur, () => { setIsActive(false) })}
					onMouseEnter={handlerEvent(props.onMouseEnter, () => { setIsActive(true) })}
					onMouseLeave={handlerEvent(props.onMouseLeave, handlerMouseLeave)}
				/>
				<fieldset className={classes.outline}>
					<legend className={classes.legend}>
						<span>{label}</span>
					</legend>
				</fieldset>
				{children}
			</div>
		</div>
	)
}