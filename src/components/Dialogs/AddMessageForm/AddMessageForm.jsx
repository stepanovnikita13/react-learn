import { Field, Form, Formik } from "formik"
import { useTheme } from "react-jss"
import { notNull } from "../../../utilits/validators/validators"
import { ButtonIcon } from "../../common/form/Buttons/Buttons"
import { Textarea } from "../../common/form/Textarea/Textarea"

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
			values,
			isSubmitting
		}) => (
			<Form>
				<Field
					style={{ backgroundColor: theme.colors.backgroundContainer }}
					component={Textarea}
					SendButton={Button}
					name='message'
					placeholder="Enter Your message"
					validate={notNull}
					hideError={true} />
			</Form>
		)}
	</Formik>
}

export default AddMessageForm