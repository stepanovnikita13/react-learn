import { useEffect } from "react"
import { useState } from "react"
import GlobalSvgSelector from "../../../../assets/icons/global/globalSvgSelector"
import S from "./Buttons.styled"

export const Button = props => (
	<S.Button {...props} >
		{props.children}
	</S.Button >
)

export const ButtonIconFade = ({ icon, ...props }) => (
	<S.IconFade {...props} >
		<GlobalSvgSelector type={icon} />
	</S.IconFade>
)

export const ThemeSwitcher = ({ theme, onClick, ...props }) => {
	const [isAnimate, setIsAnimate] = useState(false)

	useEffect(() => {
		if (isAnimate) {
			const timer = setTimeout(() => setIsAnimate(false), 200)
			return () => {
				clearTimeout(timer)
			}
		}
	}, [isAnimate])

	const handleClick = () => {
		setIsAnimate(true)
		onClick()
	}
	return (
		<S.ThemeSwitcher onClick={handleClick} isAnimate={isAnimate} {...props}>
			<S.Ellipse>
				<GlobalSvgSelector type={theme === 'dark' ? 'moon' : 'sun'} />
			</S.Ellipse>
		</S.ThemeSwitcher>
	)
}