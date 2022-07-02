import s from "./Input.module.css"
import GlobalSvgSelector from "../../../../assets/icons/global/globalSvgSelector"

export const Input = ({ field, form: { touched, errors }, ...props }) => {
	let isError = touched[field.name] && errors[field.name]

	return (
		<div>
			<div className={`${s.container} ${isError && s.error}`}>
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