import { useState } from 'react'
import GlobalSvgSelector from '../../../assets/icons/global/globalSvgSelector'
import UploadImageModal from '../modals/UploadImageModal/UploadImageModal'
import S from './AvatarMenu.styled'

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
		<S.Menu
			onMouseOver={handlerMouseOver}
			onMouseLeave={handlerMouseLeave}
			isActive={isActive}
		>
			<nav>
				<S.List>
					<li onClick={handlerClick}>
						<GlobalSvgSelector type='arrow-top' color='white' />Upload
					</li>
					{/* <li onClick={handlerClick}>
						<GlobalSvgSelector type='trash' color='white' />Delete
					</li>
					<li onClick={handlerClick}>
						<GlobalSvgSelector type='zoom-in' color='white' />Show
					</li> */}
				</S.List>
			</nav>
			{modal}
		</S.Menu>

	)
}

export default AvatarMenu