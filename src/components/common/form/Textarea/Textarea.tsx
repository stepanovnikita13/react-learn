import { useState } from 'react'
import { EventTextarea } from '../../../../types/types'
import useStyles from "./Textarea.styled"

type Props = {
	children?: React.ReactNode,
	label?: string,
	className?: string,
	isError?: boolean,
	name?: string,
	onFocus?: () => void,
	onBlur?: () => void,
	onMouseEnter?: () => void,
	onMouseLeave?: () => void,
}
export type StyleProps = {
	isError: boolean,
	isActive: boolean,
	label: boolean,
}
export const Textarea: React.FC<Props> = ({ children, label, className, isError, ...props }) => {
	const [isActive, setIsActive] = useState(false)
	const classes = useStyles({
		isError: isError || false,
		isActive,
		label: !!label
	})
	const classNames = [
		classes.wrapper,
		className || null
	].join(' ')

	const handlerEvent = (func: (e: EventTextarea) => void,
		propsFunc?: (e: EventTextarea) => void,) => (e: EventTextarea) => {
			func(e)
			propsFunc && propsFunc(e)
		}

	const handlerMouseLeave = (e: EventTextarea) => {
		if (e && e.target !== document.activeElement)
			setIsActive(false)
	}

	return (
		<div className={classNames}>
			<label className={classes.label} htmlFor={props.name}>{label}</label>
			<div className={classes.root}>
				<textarea
					className={classes.textarea}
					{...props}
					onFocus={handlerEvent(() => { setIsActive(true) }, props.onFocus)}
					onBlur={handlerEvent(() => { setIsActive(false) }, props.onBlur)}
					onMouseEnter={handlerEvent(() => { setIsActive(true) }, props.onMouseEnter)}
					onMouseLeave={handlerEvent(handlerMouseLeave, props.onMouseLeave)}
				/>
				<fieldset className={classes.outline}>
					<legend className={classes.legend}>
						<span>{label}</span>
					</legend>
				</fieldset>
				{children}
			</div>
		</div>
	)
}