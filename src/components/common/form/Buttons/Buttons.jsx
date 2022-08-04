import { useEffect, useMemo, useState } from "react"
import { useTheme } from "react-jss"
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

export const ButtonIconFade = ({ icon, className, color, ...props }) => {
	const [hover, setHover] = useState(false)
	const theme = useTheme()
	const classes = useStyles()
	const classNames = [
		classes.icon,
		className ?? null
	].join(' ')

	return (
		<button
			className={classNames}
			{...props}
			onMouseEnter={() => { setHover(true) }}
			onMouseLeave={() => { setHover(false) }}
			onTouchStart={() => { setHover(true) }}
			onTouchEnd={() => { setHover(false) }}>
			<GlobalSvgSelector type={icon} color={hover ? color : theme.colors.iconFade} />
		</button>
	)
}
export const ButtonIcon = ({ icon, className, color, ...props }) => {
	const theme = useTheme()
	const classes = useStyles()
	const classNames = [
		classes.icon,
		className ?? null
	].join(' ')
	const { disabled } = props
	return (
		<button className={classNames} {...props} >
			<GlobalSvgSelector type={icon} color={disabled ? theme.colors.iconFade : color} />
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