import React, { ReactNode, useState } from "react"
import { EventInput } from "../../../../types/types"
import useStyles from "./Input.styled"

type InputProps = {
	iconStart?: ReactNode,
	iconEnd?: ReactNode,
	className?: string,
	label?: string,
	isError?: boolean,
	name: string,
	onFocus: () => void,
	onBlur: () => void,
	onMouseEnter: () => void,
	onMouseLeave: () => void,
}
export type StyleProps = {
	isActive: boolean,
	isError: boolean,
	label: boolean,
	withIconStart: boolean,
	withIconEnd: boolean
}
export const Input: React.FC<InputProps> = ({ className, label, iconStart, iconEnd, isError, ...props }) => {
	const [isActive, setIsActive] = useState(false)
	const classes = useStyles(
		{
			isActive,
			isError: isError || false,
			label: !!label,
			withIconStart: !!iconStart,
			withIconEnd: !!iconEnd,
		})
	const classNames = [
		classes.wrapper,
		className || null
	].join(' ')

	const handlerEvent = (propsFunc: (e?: EventInput) => void, func: (e?: EventInput) => void) => (e: EventInput) => {
		func(e)
		propsFunc && propsFunc(e)
	}

	const handlerMouseLeave = (e: EventInput) => {
		if (e && (e.target !== document.activeElement))
			setIsActive(false)
	}

	return (
		<div className={classNames}>
			<label className={classes.label} htmlFor={props.name}>{label}</label>
			<div className={classes.root}>
				{iconStart && <div className={classes.iconStart}>
					{iconStart}
				</div>}
				{iconEnd && <div className={classes.iconEnd}>
					{iconEnd}
				</div>}
				<input
					{...props}
					className={classes.input}
					onFocus={handlerEvent(props.onFocus, () => { setIsActive(true) })}
					onBlur={handlerEvent(props.onBlur, () => { setIsActive(false) })}
					onMouseEnter={handlerEvent(props.onMouseEnter, () => { setIsActive(true) })}
					onMouseLeave={handlerEvent(props.onMouseLeave, handlerMouseLeave)}
				/>
				<fieldset className={classes.outline}>
					<legend className={classes.legend}>
						<span>{label}</span>
					</legend>
				</fieldset>
			</div>
		</div>
	)
}