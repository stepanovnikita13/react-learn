import { Field, Form, Formik } from "formik"
import { useEffect, useRef } from "react"
import { required } from "../../../../utilits/validators/validators"
import { InputLbl } from "../../../common/form/Input/Input"
import { Textarea } from "../../../common/form/Textarea/Textarea"

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
			{({ isSubmitting, errors, values, submitForm }) => {
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
							<Field
								component={Textarea}
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
							<Field
								component={Textarea}
								name='lookingForAJobDescription'
								label='my skills'
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