import _ from 'lodash'
import { Error } from '../../global/Span'
import { ButtonIconFade } from '../Buttons/Buttons'
import useStyles from "./Textarea.styled"

const SendTextarea = ({ field, form: { isSubmitting, isValid, dirty, handleSubmit }, ...props }) => {
	const disabled = !isValid || !dirty || isSubmitting
	const classes = useStyles({ disabled })
	const handleKeyPress = e => {
		if (e.charCode === 13 && !e.shiftKey) {
			e.preventDefault()
			handleSubmit()
		}
	}

	return (
		<div className={classes.sendContainer}>
			<textarea className={classes.sendTextarea} {...field} {...props} onKeyPress={handleKeyPress} />
			<ButtonIconFade className={classes.sendButton} icon='send' type='submit' disabled={disabled} title='Send' />
		</div>
	)
}

const Textarea = ({ label, style, field, form, ...props }) => {
	//const { field, form } = props
	let isError
	let errorText = null
	if (form) {
		const { touched = null, errors = null } = form
		errorText = errors[field.name]
		isError = !!(_.get(touched, field.name) && _.get(errors, field.name))
	}
	const classes = useStyles({ isError })
	return (
		<>
			<fieldset className={classes.fieldset} style={style}>
				{label && <legend className={classes.legend} >{label}</legend>}
				<textarea className={classes.textarea} {...props} {...field} />
			</fieldset>
			{isError && <Error style={{ fontSize: 8 }}>{errorText}</Error>}
		</>
	)
}

export { Textarea, SendTextarea }