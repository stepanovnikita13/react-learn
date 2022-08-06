import { Field, Form, Formik } from "formik"
import { useTheme } from "react-jss"
import withField from "../../../hoc/withField"
import { notNull } from "../../../utilits/validators/validators"
import { ButtonIcon } from "../../common/form/Buttons/Buttons"
import { TextareaWithSendButton } from "../../common/form/Textarea/Textarea"

const TextareaField = withField(TextareaWithSendButton)

const AddMessageForm = (props) => {
	const theme = useTheme()
	const onSubmit = (values, { setSubmitting, resetForm }) => {
		props.sendMessage(values.message)
		setSubmitting(false)
		resetForm()
	}

	const Button = (props) => <ButtonIcon {...props} icon='send' />

	return <Formik
		initialValues={{ message: '' }}
		onSubmit={onSubmit}
	>
		{({
			dirty,
			handleSubmit,
			isValid,
			isSubmitting
		}) => {
			const handlerKeyPress = e => {
				if (e.charCode === 13 && !e.shiftKey) {
					e.preventDefault()
					handleSubmit()
				}
			}
			return (
				<Form>
					<Field
						component={TextareaField}
						name='message'
						placeholder='Enter Your message'
						onKeyPress={handlerKeyPress}
						validate={notNull}
						disabled={!isValid || isSubmitting || !dirty}
						style={{ backgroundColor: theme.colors.backgroundContainer }}
					/>
				</Form>
			)
		}}
	</Formik>
}

export default AddMessageForm