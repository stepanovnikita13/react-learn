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

	const handlerProps = (propsFunc, func) => (e) => {
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
					onFocus={handlerProps(props.onFocus, () => { setIsActive(true) })}
					onBlur={handlerProps(props.onBlur, () => { setIsActive(false) })}
					onMouseEnter={handlerProps(props.onMouseEnter, () => { setIsActive(true) })}
					onMouseLeave={handlerProps(props.onMouseLeave, handlerMouseLeave)}
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