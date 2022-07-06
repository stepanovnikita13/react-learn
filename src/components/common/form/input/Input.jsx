import s from "./Input.module.css"
import GlobalSvgSelector from "../../../../assets/icons/global/globalSvgSelector"
import React from "react"

let Input = ({ field, form: { touched, errors }, ...props }) => {
	let isAnimateError = !!props.errormessage === !props.errorfield || field.name === props.errorfield
	let isError = (touched[field.name] && errors[field.name]) || isAnimateError

	return (
		<div>
			<div className={[s.container, isError ? s.error : null, isAnimateError ? s.animate : null].join(' ')}>
				<div className={`${s.icon} ${s.inputIcon}`}>
					<GlobalSvgSelector type={props.type} />
				</div>
				{isError &&
					<div className={`${s.icon} ${s.infoIcon}`}>
						<GlobalSvgSelector type='info' />
					</div>
				}
				<input
					{...field}
					{...props}
					className={s.input}
				/>
			</div>
			{isError && <div className="error">{errors[field.name]}</div>}
		</div>
	)
}

Input = React.memo(Input)

export { Input }