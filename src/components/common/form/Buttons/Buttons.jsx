import { useEffect, useMemo, useState } from "react"
import GlobalSvgSelector from "../../../../assets/icons/global/globalSvgSelector"
import useStyles from "./Buttons.styled"

export const Button = ({ children, className, ...props }) => {
	const classes = useStyles()
	const classNames = [
		classes.button,
		className ?? null
	].join(' ')
	return (
		<button className={classNames} {...props} >
			{children}
		</button >
	)
}

export const ButtonIconFade = ({ icon, className, ...props }) => {
	const classes = useStyles(props)
	const classNames = [
		classes.iconFade,
		className ?? null
	].join(' ')
	return (
		<button className={classNames} {...props} >
			<GlobalSvgSelector type={icon} />
		</button>
	)
}
export const ButtonIcon = ({ icon, className, ...props }) => {
	const classes = useStyles(props)
	const classNames = [
		classes.icon,
		className ?? null
	].join(' ')
	return (
		<button className={classNames} {...props} >
			<GlobalSvgSelector type={icon} />
		</button>
	)
}

export const ThemeSwitcher = ({ currentTheme, onClick, ...props }) => {
	const [isActive, setisActive] = useState(false)
	const classes = useStyles(isActive)

	useEffect(() => {
		if (isActive) {
			const timer = setTimeout(() => setisActive(false), 200)
			return () => {
				clearTimeout(timer)
			}
		}
	}, [isActive])

	const handleClick = () => {
		setisActive(true)
		onClick()
	}
	return (
		<button className={classes.themeSwitcher} onClick={handleClick} {...props}>
			<div className={classes.ellipse}>
				<GlobalSvgSelector type={currentTheme === 'dark' ? 'moon' : 'sun'} />
			</div>
		</button>
	)
}

export const Burger = ({ isOpen, onClick, className, ...props }) => {
	const [isActive, setisActive] = useState(false)
	const classes = useStyles(isActive)
	const type = useMemo(() => isOpen ? 'arrow-left-1' : 'menu', [isOpen])
	useEffect(() => {
		if (isActive) {
			const timer = setTimeout(() => setisActive(false), 200)

			return () => {
				clearTimeout(timer)
			}
		}
	}, [isActive])

	const handleClick = () => {
		setisActive(true)
		onClick()
	}

	return (
		<button className={classes.burger + ' ' + className} onClick={handleClick} {...props}>
			<GlobalSvgSelector type={type} />
		</button>
	)
}