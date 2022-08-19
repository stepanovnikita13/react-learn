import { useEffect, useMemo, useState } from "react"
import { useTheme } from "react-jss"
import GlobalSvgSelector, { GlobalSvgSelectorType } from "../../../../assets/icons/global/globalSvgSelector"
import { CustomTheme, ThemeType } from "../../../../styles/themes"
import { useBurgerStyles, useButtonIconStyles, useButtonStyles, useThemeSwitcherStyles } from "./Buttons.styled"

interface ButtonProps {
	children?: React.ReactNode,
	className?: string,
	[key: string]: any
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
	const classes = useButtonStyles()
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

interface ButtonIconFadeProps {
	icon: GlobalSvgSelectorType
	className?: string
	color?: string
	[key: string]: any
}

export const ButtonIconFade: React.FC<ButtonIconFadeProps> = ({ icon, className, color, ...props }) => {
	const [hover, setHover] = useState(false)
	const theme = useTheme<CustomTheme>()
	const classes = useButtonIconStyles()
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
			onTouchEnd={() => { setHover(false) }}
		>
			<GlobalSvgSelector type={icon} color={hover && !props.disabled ? color : theme.colors.iconFade} />
		</button>
	)
}

interface ButtonIconProps extends ButtonIconFadeProps {
	disabled?: boolean
}
export const ButtonIcon: React.FC<ButtonIconProps> = ({ icon, className, color, disabled, ...props }) => {
	const theme = useTheme<CustomTheme>()
	const classes = useButtonIconStyles()
	const classNames = [
		classes.icon,
		className ?? null
	].join(' ')

	return (
		<button className={classNames} {...props} >
			<GlobalSvgSelector type={icon} color={disabled ? theme.colors.iconFade : color} />
		</button>
	)
}

interface ThemeSwitcherProps {
	onClick: () => void,
	currentTheme: ThemeType
}
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, onClick, ...props }) => {
	const [isActive, setisActive] = useState(false)
	const classes = useThemeSwitcherStyles(isActive)

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

type BurgerProps = {
	className?: string,
	onClick: () => void,
	isOpen: boolean,

}
export const Burger: React.FC<BurgerProps> = ({ isOpen, onClick, className, ...props }) => {
	const [isActive, setisActive] = useState(false)
	const classes = useBurgerStyles(isActive)
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