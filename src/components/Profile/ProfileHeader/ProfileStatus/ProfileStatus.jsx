import React, { useRef, useState } from 'react'
import { useTheme } from 'react-jss'
import { ButtonIconFade } from '../../../common/form/Buttons/Buttons'
import useStyles from './ProfileStatus.styled'
import useOnClickOutside from '../../../../hooks/useOnClickOutside'
import withField from '../../../../hoc/withField'
import { TextareaWithSendButton } from '../../../common/form/Textarea/Textarea'
import { Field, Form, Formik } from 'formik'

const TextareaField = withField(TextareaWithSendButton)

const ProfileStatus = ({ status, updateStatus, isOwner }) => {
	const [editMode, setEditMode] = useState(false)
	const theme = useTheme()
	const classes = useStyles(theme)
	const ref = useRef()

	const onSubmit = (values, { setSubmitting, resetForm }) => {
		if (values.status !== status) updateStatus(values.status)
		setSubmitting(false)
		setEditMode(false)
		resetForm()
	}

	useOnClickOutside(ref, () => {
		setEditMode(false)
	})

	const activateEditMode = () => {
		isOwner && setEditMode(true)
	}

	return (
		<>
			{!editMode
				? <div className={classes.container}>
					<span onClick={activateEditMode}>{status || (isOwner && 'Set status...')}</span>
					{isOwner && <ButtonIconFade onClick={activateEditMode} icon='edit' />}
				</div>
				: <div ref={ref}>
					<Formik
						initialValues={{ status }}
						onSubmit={onSubmit}
					>
						{({
							isSubmitting,
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
										component={TextareaField}
										autoFocus={true}
										name='status'
										onKeyPress={handlerKeyPress}
									>
										<ButtonIconFade
											icon='check'
											type='submit'
											disabled={isSubmitting}
											color={theme.colors.success}
										/>
									</Field>

								</Form>
							)
						}}
					</Formik>

				</div>
			}
		</>
	)
}

export default ProfileStatus