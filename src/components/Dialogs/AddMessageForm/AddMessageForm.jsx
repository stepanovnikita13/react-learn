import { Field, Form, Formik } from "formik"
import GlobalSvgSelector from "../../../assets/icons/global/globalSvgSelector"
import s from './AddMessageForm.module.css'

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
			<Form className={s.chatInput}>
				<Field
					type="textarea"
					name="message"
					placeholder="Enter Your message"
					className={s.input}
				/>
				<button
					type="submit"
					disabled={isSubmitting || values.message === ''}
					className={s.sendBtn}
				>
					<GlobalSvgSelector type='send' className={(isSubmitting || values.message === '') ? s.disabled : null} />
				</button>
			</Form>
		)}
	</Formik>
}

export default AddMessageForm