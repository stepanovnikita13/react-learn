import _ from 'lodash'
import { useState } from 'react'
import { Error } from '../../global/Span'
import useStyles from "./Textarea.styled"


const Textarea = (props) => {
	const { label, style, field, form, SendButton, handleClick, className, hideError, ...rest } = props
	const [selected, setSelected] = useState(false)
	let isError, disabled, errorText
	let handleSubmit = () => { }
	if (form) {
		const { touched, errors, isSubmitting, isValid, dirty } = form
		errorText = errors[field.name]
		isError = !hideError && !!(_.get(touched, field.name) && _.get(errors, field.name))
		disabled = !isValid || !dirty || isSubmitting
		handleSubmit = form.handleSubmit
	}
	const classes = useStyles({ isError, selected })
	const textareaClassNames = [
		classes.textarea,
		className
	].join(' ')

	const handleKeyPress = e => {
		if (e.charCode === 13 && !e.shiftKey) {
			e.preventDefault()
			handleClick && handleClick()
			handleSubmit()
		}
	}
	return (
		<>
			<fieldset className={classes.fieldset} style={style}>
				{label && <legend className={classes.legend} >{label}</legend>}
				<textarea
					className={textareaClassNames}
					{...rest}
					{...field}
					onKeyPress={handleKeyPress}
					onFocus={(e) => { setSelected(true) }}
					onBlur={() => { setSelected(false) }}
					onMouseEnter={() => { setSelected(true) }}
					onMouseLeave={(e) => { e.target !== document.activeElement && setSelected(false) }}
				/>
				{SendButton && <SendButton
					className={classes.sendButton}
					onClick={handleClick}
					type='submit'
					disabled={disabled}
					title='Send'
				/>}
			</fieldset>
			{isError && <Error style={{ fontSize: 8 }}>{errorText}</Error>}
		</>
	)
}

export { Textarea }