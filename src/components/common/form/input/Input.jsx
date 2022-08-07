import React, { useState } from "react"
import useStyles from "./Input.styled"

export const Input = ({ className, label, iconStart, iconEnd, isError, ...props }) => {
	const [isActive, setIsActive] = useState(false)
	const classes = useStyles(
		{
			isActive,
			isError,
			label: !!label,
			withIconStart: !!iconStart,
			withIconEnd: !!iconEnd,
		})
	const classNames = [
		classes.root,
		className || null
	].join(' ')

	const handlerEvent = (propsFunc, func) => (e) => {
		func(e)
		propsFunc && propsFunc(e)
	}

	const handlerMouseLeave = (e) => {
		if (e.target !== document.activeElement)
			setIsActive(false)
	}

	return (
		<div className={classes.wrapper}>
			<label className={classes.label} htmlFor={props.name}>{label}</label>
			<div className={classNames}>
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