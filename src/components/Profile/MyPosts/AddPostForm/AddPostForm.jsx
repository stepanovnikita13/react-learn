import { Field, Form, Formik } from "formik"
import withField from "../../../../hoc/withField";
import { notNull } from "../../../../utilits/validators/validators";
import { TextareaWithSendButton } from "../../../common/form/Textarea/Textarea";

const TextareaWithSendButtonField = withField(TextareaWithSendButton)

const AddPostForm = ({ addPost }) => {
	const onSubmit = (values, { setSubmitting, resetForm }) => {
		addPost(values.text)
		setSubmitting(false)
		resetForm()
	}

	return (
		<Formik
			initialValues={{ text: '' }}
			onSubmit={onSubmit}
		>
			{({
				dirty,
				isSubmitting,
				isValid,
				handleSubmit
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
							component={TextareaWithSendButtonField}
							name='text'
							placeholder='Type post text'
							onKeyPress={handlerKeyPress}
							validate={notNull}
							disabled={!isValid || isSubmitting || !dirty}
						/>
					</Form>
				)
			}}
		</Formik>
	)
}

export default AddPostForm