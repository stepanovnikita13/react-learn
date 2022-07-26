import S from "./Textarea.styled"
import _ from 'lodash'

const SendTextarea = ({ field, form: { isSubmitting, isValid, dirty, handleSubmit }, ...props }) => {
	const handleKeyPress = e => {
		if (e.charCode === 13 && !e.shiftKey) {
			e.preventDefault()
			handleSubmit()
		}
	}

	return (
		<S.SendContainer>
			<S.SendTextarea {...field} {...props} onKeyPress={handleKeyPress} />
			<S.SendButton icon='send' type='submit' disabled={!isValid || !dirty || isSubmitting} title='Send' />
		</S.SendContainer>
	)
}

const Textarea = ({ label, style, ...props }) => {
	const { field, form } = props
	let isError
	let errorText = null
	if (form) {
		const { touched = null, errors = null } = form
		errorText = errors[field.name]
		isError = !!(_.get(touched, field.name) && _.get(errors, field.name))
	}

	return (
		<>
			<S.Fieldset isError={isError} style={style}>
				{label && <S.Legend >{label}</S.Legend>}
				<S.Textarea {...props} {...field} />
			</S.Fieldset>
			{isError && <S.Error>{errorText}</S.Error>}
		</>
	)
}

export { Textarea, SendTextarea }