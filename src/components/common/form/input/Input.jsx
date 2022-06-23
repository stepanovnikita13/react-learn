import s from "./Input.module.css"
import GlobalSvgSelector from "../../../../assets/icons/global/globalSvgSelector"

const placeholder = {
	user: 'Type Your Username',
	password: 'Type Password'
}

const Input = props => (
	<div className={s.inputWrapper}>
		<div className={s.icon}>
			<GlobalSvgSelector type={props.type} color='#6667AB' />
		</div>
		<input
			type="text"
			name="userName"
			onChange={props.handleChange}
			onBlur={props.handleBlur}
			value={props.values.userName}
			placeholder={placeholder[props.type]}
			className={s.input}
		/>
	</div>
)

export default Input