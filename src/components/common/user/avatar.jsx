import { defaultUser } from "../../../assets/icons/global/globalImgSelector"
import s from './avatar.module.css'

export const Avatar = ({ url, className }) => {
	const avatarUrl = url ?? defaultUser
	return <img src={avatarUrl} alt="" className={`${s.avatar} ${className}`} />
}
