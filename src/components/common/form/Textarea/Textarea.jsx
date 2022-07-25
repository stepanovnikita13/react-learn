import S from "./Textarea.styled"
import _ from 'lodash'

const Textarea = ({ field, form: { touched, errors, isSubmitting, isValid, dirty, handleSubmit }, ...props }) => {
	const handleKeyPress = e => {
		if (e.charCode === 13 && !e.shiftKey) {
			e.preventDefault()
			handleSubmit()
		}
	}

	return (
		<S.Container>
			<S.Textarea {...field} {...props} onKeyPress={handleKeyPress} />
			<S.Button icon='send' type='submit' disabled={!isValid || !dirty || isSubmitting} title='Send' />
		</S.Container>
	)
}

const TextareaLbl = ({ field, form: { touched, errors }, label, ...props }) => {
	let isError = !!(_.get(touched, field.name) && _.get(errors, field.name))
	return (
		<>
			<S.Lbl.Fieldset isError={isError}>
				<S.Lbl.Legend >{label}</S.Lbl.Legend>
				<S.Lbl.Textarea {...props} {...field} />
			</S.Lbl.Fieldset>
			{isError && <S.Lbl.Error>{errors[field.name]}</S.Lbl.Error>}
		</>
	)
}

export { Textarea, TextareaLbl }