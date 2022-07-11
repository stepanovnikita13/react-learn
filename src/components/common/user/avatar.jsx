import { defaultUserImage } from "../../../assets/images/globalImgSelector"
import s from './Avatar.module.css'

export const Avatar = ({ url, className, children, ...props }) => {
	const avatarUrl = url ?? defaultUserImage
	return (
		<div className={`${s.avatar} ${className}`}>
			<img src={avatarUrl} alt="" />
			<div className={s.children}>
				{children}
			</div>

		</div>
	)
}
