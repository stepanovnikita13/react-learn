import { Field, Form, Formik } from "formik"
import { notNull } from "../../../utilits/validators/validators"
import { SendTextarea } from "../../common/form/Textarea/Textarea"

const AddMessageForm = (props) => {
	const onSubmit = (values, { setSubmitting, resetForm }) => {
		props.sendMessage(values.message)
		setSubmitting(false)
		resetForm()
	}

	return <Formik
		initialValues={{ message: '' }}
		onSubmit={onSubmit}
	>
		{({
			values,
			isSubmitting
		}) => (
			<Form>
				<Field component={SendTextarea} name='message' placeholder="Enter Your message" validate={notNull} />
			</Form>
		)}
	</Formik>
}

export default AddMessageForm