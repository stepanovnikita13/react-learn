import GlobalSvgSelector from "../../../../assets/icons/global/globalSvgSelector"
import React from "react"
import { Error } from '../../global/Span'
import useStyles from "./Input.styled"
import _ from 'lodash'

const Input = ({ field, form: { touched, errors }, ...props }) => {
	let isServerError = !!props.errormessage === !props.errorfield || field.name === props.errorfield
	let isError = !!(_.get(touched, field.name) && _.get(errors, field.name)) || isServerError
	const classes = useStyles({ isError })

	return (
		<>
			<div className={classes.container}>
				<div className={classes.icon + ' ' + classes.iconFieldType}>
					<GlobalSvgSelector type={props.type} />
				</div>
				{isError &&
					<div className={classes.icon + ' ' + classes.iconErrorInfo}>
						<GlobalSvgSelector type='info' />
					</div>
				}
				<input
					className={classes.input}
					{...field}
					{...props}
				/>
			</div>
			{isError && <Error>{errors[field.name]}</Error>}
		</>
	)
}

const InputLbl = ({ field, form: { touched, errors }, label, ...props }) => {
	let isError = !!(_.get(touched, field.name) && _.get(errors, field.name))
	const classes = useStyles({ isError })
	return (
		<>
			<fieldset className={classes.fieldset} isError={isError}>
				<legend className={classes.legend} >{label}</legend>
				<input className={classes.InputLbl} {...props} {...field} />
			</fieldset>
			{isError && <Error style={{ fontSize: .8 }}>{_.get(errors, field.name)}</Error>}
		</>
	)
}

export { Input, InputLbl }