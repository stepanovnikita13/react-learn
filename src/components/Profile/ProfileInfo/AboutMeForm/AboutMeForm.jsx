import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik"
import { useEffect, useRef } from "react"
import withField from "../../../../hoc/withField"
import { required } from "../../../../utilits/validators/validators"
import { Input } from "../../../common/form/Input/Input"
import { Textarea } from "../../../common/form/Textarea/Textarea"
import useStyles from './AboutMeForm.styled'

const inputWithFormik = withField(Input)
const textareaWithFormik = withField(Textarea)
const AutoDisable = ({ setDisabled }) => {
	const { isValid } = useFormikContext()
	useEffect(() => {
		setDisabled(!isValid)
	}, [isValid, setDisabled])
}

const AboutMeForm = ({ profile, bindRef, updateProfile, formErrors, setDisabled }) => {
	const { aboutMe, lookingForAJob, lookingForAJobDescription, fullName, userId } = profile
	const formRef = useRef()
	const contacts = Object.fromEntries(
		Object.entries(profile.contacts).map(([key, value]) => [key.toLowerCase(), value ?? ''])
	)
	const classes = useStyles()

	const handleSubmit = async (values, { setSubmitting, setErrors }) => {
		const data = await updateProfile(values)
		setErrors(data)
		setSubmitting(false)
	}

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
			{({
				errors,
				touched,
				dirty
			}) => {
				return (
					<Form>
						<div className={classes.root}>
							<div>
								<Field
									component={inputWithFormik}
									label='Full name'
									name='fullName'
									validate={required}
									error
								/>
								<ErrorMessage className='text-error' component={'div'} name='fullName' />
							</div>
							<div>
								<Field
									component={textareaWithFormik}
									label='About me'
									name='aboutMe'
									validate={required}
									error
								/>
								<ErrorMessage className='text-error' component={'div'} name='aboutMe' />
							</div>
							<div>
								<label>
									Looking for a job
									<Field name='lookingForAJob' type='checkbox' />
								</label>
							</div>
							<div>
								<Field
									component={textareaWithFormik}
									label='My skills'
									name='lookingForAJobDescription'
									validate={required}
									error
								/>
								<ErrorMessage className='text-error' component={'div'} name='aboutMe' />
							</div>
							<div>
								{Object.keys(contacts).map(key => {
									return (
										<div key={key} >
											<Field
												component={inputWithFormik}
												label={key.charAt(0).toUpperCase() + key.slice(1)}
												name={`contacts.${key}`}
												validate={required}
												error
											/>
											<ErrorMessage className='text-error' component={'div'} name={`contacts.${key}`} />
										</div>
									)
								})}
							</div>
						</div>
						<AutoDisable setDisabled={setDisabled} />
					</Form>
				)
			}}
		</Formik>
	)
}

export default AboutMeForm