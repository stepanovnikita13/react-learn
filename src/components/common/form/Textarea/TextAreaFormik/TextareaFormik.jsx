import { ErrorMessage, useField } from "formik"
import { Textarea } from "../Textarea"
import useStyles from "./TextareaFormik.styled"
import React from "react"

const TextareaFormik = ({ className, validate, name, ...props }) => {
	const [field, meta, helpers] = useField({ name, validate })
	const { onBlur, ...restField } = field
	const { touched, error } = meta
	const isError = touched && error

	const classes = useStyles({ isError })
	const classNames = [
		classes.fieldset,
		className || null
	].join(' ')

	const handlerBlur = () => {
		helpers.setTouched(field.name)
		onBlur(field.name)
	}

	return <>
		<Textarea
			className={classNames}
			onBlur={handlerBlur}
			{...restField}
			{...props}
		/>
		<ErrorMessage className={classes.error} component="div" name={name} />
	</>

}

export default React.memo(TextareaFormik)