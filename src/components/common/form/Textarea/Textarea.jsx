import { useState } from 'react'
import { ButtonIcon } from '../Buttons/Buttons'
import useStyles from "./Textarea.styled"


export const Textarea = ({ children, label, style, className, ...props }) => {
	const [isActive, setIsActive] = useState(false)

	const classes = useStyles(isActive)
	const classNames = [
		classes.fieldset,
		className
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
		<>
			<fieldset className={classNames} style={style}>
				{label && <legend className={classes.legend} >{label}</legend>}
				<textarea
					className={classes.textarea}
					{...props}
					onFocus={handlerEvent(props.onFocus, () => { setIsActive(true) })}
					onBlur={handlerEvent(props.onBlur, () => { setIsActive(false) })}
					onMouseEnter={handlerEvent(props.onMouseEnter, () => { setIsActive(true) })}
					onMouseLeave={handlerEvent(props.onMouseLeave, handlerMouseLeave)}
				/>
				{children}
			</fieldset>
		</>
	)
}

export const TextareaWithSendButton = ({ children, disabled, ...props }) => {
	const classes = useStyles()
	return (
		<Textarea {...props}>
			<div className={classes.button}>
				{children ?? <ButtonIcon
					icon='send'
					type='submit'
					disabled={disabled}
				/>}
			</div>
		</Textarea>
	)
}