import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect, useRef } from "react"
import withField from "../../../../hoc/withField"
import { required } from "../../../../utilits/validators/validators"
import { InputLbl } from "../../../common/form/Input/Input"
import { Textarea } from "../../../common/form/Textarea/Textarea"
import TextareaFormik from "../../../common/form/Textarea/TextAreaFormik/TextareaFormik"


const AboutMeForm = ({ profile, bindRef, updateProfile, formErrors }) => {
	const formRef = useRef()

	const handleSubmit = async (values, { setSubmitting, setErrors }) => {
		const data = await updateProfile(values)
		setErrors(data)
		setSubmitting(false)
	}
	const { aboutMe, lookingForAJob, lookingForAJobDescription, fullName, userId } = profile
	const contacts = Object.fromEntries(
		Object.entries(profile.contacts).map(([key, value]) => [key.toLowerCase(), value ?? ''])
	)

	useEffect(() => {
		bindRef(formRef)
	}, [bindRef])

	return (
		<Formik
			initialValues={{
				userId,
				fullName: fullName ?? '',
				aboutMe: aboutMe ?? '',
				lookingForAJob,
				lookingForAJobDescription: lookingForAJobDescription ?? '',
				contacts
			}}
			initialErrors={formErrors}
			onSubmit={handleSubmit}
			innerRef={formRef}
		>
			{() => {
				return (
					<Form>
						<div>
							<Field
								component={InputLbl}
								label='full name'
								name='fullName'
								validate={required}
							/>
						</div>
						<div>
							<TextareaFormik
								label='about me'
								name='aboutMe'
								validate={required}
							/>
						</div>
						<div>
							<label>
								Looking for a job
								<Field name='lookingForAJob' type='checkbox' />
							</label>
						</div>
						<div>
							<TextareaFormik
								label='my skills'
								name='lookingForAJobDescription'
								validate={required}
							/>
						</div>
						<div>
							{Object.keys(contacts).map(key => {
								return (
									<div key={key} >
										<Field
											component={InputLbl}
											label={key}
											name={`contacts.${key}`}
											validate={required}
										/>
									</div>
								)
							})}
						</div>
					</Form>
				)
			}}
		</Formik>
	)
}

export default AboutMeForm