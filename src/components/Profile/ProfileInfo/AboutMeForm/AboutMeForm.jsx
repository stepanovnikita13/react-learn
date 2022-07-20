import { Field, Form, Formik } from "formik"
import { useEffect, useRef } from "react"

const AboutMeForm = ({ profile, bindRef, updateProfile }) => {
	const formRef = useRef()

	const handleSubmit = async (values, { setSubmitting }) => {
		await updateProfile(values)
		setSubmitting(false)
	}
	const { aboutMe, lookingForAJob, lookingForAJobDescription, fullName, userId } = profile
	const contacts = Object.fromEntries(
		Object.entries(profile.contacts).map(([key, value]) => [key, value ?? ''])
	)

	useEffect(() => {
		bindRef(formRef)
	})

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
			onSubmit={handleSubmit}
			innerRef={formRef}
		>
			{({ isSubmitting, errors, values, submitForm }) => {
				return (
					<Form>
						<div>
							<label htmlFor="fullName">Full Name</label><br />
							<Field
								id='fullName'
								name='fullName'
								value={values.fullName}
								placeholder='Type Your fullname'
							/>
						</div>
						<div>
							<label htmlFor="aboutMe">About me</label><br />
							<Field
								id='aboutMe'
								name='aboutMe'
								component='textarea'
								value={values.aboutMe}
								placeholder='Write a little about yourself'
							/>
						</div>
						<div>
							<label>
								Looking for a job
								<Field id='lookingForAJob' name='lookingForAJob' type='checkbox' />
							</label>
						</div>
						<div>
							<label htmlFor="lookingForAJobDescription">My skills</label><br />
							<Field
								id='lookingForAJobDescription'
								name='lookingForAJobDescription'
								component='textarea'
								value={values.lookingForAJobDescription}
								placeholder='Describe your professional skills'
							/>
						</div>
						<div>
							{Object.keys(contacts).map(key => {
								return (
									<div key={key}>
										<label htmlFor={key}>{key}</label>
										<Field id={key} name={`contacts.${key}`} placeholder={`${key} link`} />
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