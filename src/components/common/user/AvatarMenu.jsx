import { useState } from 'react'
import GlobalSvgSelector from '../../../assets/icons/global/globalSvgSelector'
import UploadImageModal from '../modals/UploadImageModal/UploadImageModal'
import s from './AvatarMenu.module.css'

const AvatarMenu = ({ updateProfilePhoto }) => {
	const [isActive, setIsActive] = useState(false)
	const [isModalOpen, setisModalOpen] = useState(false)

	const handlerMouseOver = () => {
		!isModalOpen && setIsActive(true)
	}

	const handlerMouseLeave = () => {
		setIsActive(false)
	}

	const handlerClick = e => {
		setisModalOpen(true)
		setIsActive(false)
	}

	const hideModal = () => {
		setisModalOpen(false)
	}

	const modal = isModalOpen ? (<UploadImageModal hideModal={hideModal} isModalOpen={isModalOpen} updateProfilePhoto={updateProfilePhoto} />) : null

	return (
		<div
			className={`${s.avatarMenu} ${isActive ? s.active : ''}`}
			onMouseOver={handlerMouseOver}
			onMouseLeave={handlerMouseLeave}
		>
			<nav>
				<ul className={s.list}>
					<li onClick={handlerClick}>
						<GlobalSvgSelector type='arrow-top' color='white' />Upload
					</li>
					<li onClick={handlerClick}>
						<GlobalSvgSelector type='trash' color='white' />Delete
					</li>
					<li onClick={handlerClick}>
						<GlobalSvgSelector type='zoom-in' color='white' />Show
					</li>
				</ul>
			</nav>
			{modal}
		</div>

	)
}

export default AvatarMenu