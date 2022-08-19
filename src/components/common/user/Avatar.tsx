import { ReactNode } from "react"
import { useTheme } from "react-jss"
import { defaultUserImage } from "../../../assets/images/globalImgSelector"
import { CustomTheme } from "../../../styles/themes"
import useStyles from "./Avatar.styled"

type Props = {
	url: string
	className: string
	children: ReactNode,
	[key: string]: any
}
const Avatar: React.FC<Props> = ({ url, className, children, ...props }) => {
	const theme = useTheme<CustomTheme>()
	const classes = useStyles({ theme })
	const avatarUrl = url ?? defaultUserImage
	return (
		<div className={classes.avatar + ' ' + className} {...props}>
			<img src={avatarUrl} alt="" />
			<div className={classes.children}>
				{children}
			</div>
		</div>
	)
}

export default Avatar