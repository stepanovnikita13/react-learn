import { Field, Form, Formik } from "formik"
import { notNull } from "../../../../utilits/validators/validators";
import { Textarea } from "../../../common/form/Textarea/Textarea";

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
				values,
				errors,
				touched,
				isSubmitting
			}) => (
				<Form>
					<Field component={Textarea} name='text' placeholder='Enter Your message' validate={notNull} />
				</Form>
			)}
		</Formik>
	)
}

export default AddPostForm