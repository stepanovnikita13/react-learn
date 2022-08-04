import { Field, Form, Formik } from "formik"
import { notNull } from "../../../../utilits/validators/validators";
import { ButtonIcon } from "../../../common/form/Buttons/Buttons";
import { Textarea } from "../../../common/form/Textarea/Textarea";

const AddPostForm = ({ addPost }) => {
	const onSubmit = (values, { setSubmitting, resetForm }) => {
		addPost(values.text)
		setSubmitting(false)
		resetForm()
	}

	const Button = (props) => <ButtonIcon {...props} icon='send' />
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
					<Field
						component={Textarea}
						SendButton={Button}
						name='text'
						placeholder='Enter Your message'
						validate={notNull}
						hideError={true} />
				</Form>
			)}
		</Formik>
	)
}

export default AddPostForm