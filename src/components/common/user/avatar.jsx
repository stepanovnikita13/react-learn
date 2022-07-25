import { defaultUserImage } from "../../../assets/images/globalImgSelector"
import S from "./Avatar.styled"

export const Avatar = ({ url, className, children, ...props }) => {
	const avatarUrl = url ?? defaultUserImage
	return (
		<S.Avatar className={className} {...props}>
			<img src={avatarUrl} alt="" />
			<S.Children>
				{children}
			</S.Children>
		</S.Avatar>
	)
}
