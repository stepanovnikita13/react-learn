import { useTheme } from "react-jss"
import { defaultUserImage } from "../../../assets/images/globalImgSelector"
import useStyles from "./Avatar.styled"

const Avatar = ({ url, className, children, ...props }) => {
	const theme = useTheme()
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