import { useEffect, useState } from "react"
import GlobalSvgSelector from "../../../../assets/icons/global/globalSvgSelector"
import useStyles from "./Buttons.styled"

export const Button = ({ children, className, ...props }) => {
	const classes = useStyles()
	return (
		<button className={classes.button + ' ' + className} {...props} >
			{children}
		</button >
	)
}

export const ButtonIconFade = ({ icon, className, ...props }) => {
	const classes = useStyles(props)
	return (
		<button className={classes.iconFade + ' ' + className} {...props} >
			<GlobalSvgSelector type={icon} />
		</button>
	)
}

export const ThemeSwitcher = ({ currentTheme, onClick, ...props }) => {
	const [isActive, setisActive] = useState(false)
	const classes = useStyles({ isActive })

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

export const Burger = props => {
	return (
		<GlobalSvgSelector type='menu' />
	)
}