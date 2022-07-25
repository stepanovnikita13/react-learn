import GlobalSvgSelector from "../../../../assets/icons/global/globalSvgSelector"
import React from "react"
import { Error } from '../../global/Span'
import S from "./Input.styled"
import _ from 'lodash'

const Input = ({ field, form: { touched, errors }, ...props }) => {
	let isServerError = !!props.errormessage === !props.errorfield || field.name === props.errorfield
	let isError = !!(_.get(touched, field.name) && _.get(errors, field.name)) || isServerError

	return (
		<>
			<S.Container isError={isError}>
				<S.IconFieldType>
					<GlobalSvgSelector type={props.type} />
				</S.IconFieldType>
				{isError &&
					<S.IconErrorInfo>
						<GlobalSvgSelector type='info' />
					</S.IconErrorInfo>
				}
				<S.Input
					{...field}
					{...props}
				/>
			</S.Container>
			{isError && <Error>{errors[field.name]}</Error>}
		</>
	)
}

const InputLbl = ({ field, form: { touched, errors }, label, ...props }) => {
	let isError = !!(_.get(touched, field.name) && _.get(errors, field.name))
	return (
		<>
			<S.Lbl.Fieldset isError={isError}>
				<S.Lbl.Legend >{label}</S.Lbl.Legend>
				<S.Lbl.Input {...props} {...field} />
			</S.Lbl.Fieldset>
			{isError && <S.Lbl.Error>{errors[field.name]}</S.Lbl.Error>}
		</>
	)
}

export { Input, InputLbl }