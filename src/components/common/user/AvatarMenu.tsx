import { ReactEventHandler, useCallback, useState } from 'react'
import GlobalSvgSelector from '../../../assets/icons/global/globalSvgSelector'
import UploadImageModal from '../modals/UploadImageModal/UploadImageModal'
import useStyles from './AvatarMenu.styled'

type Props = {
	updateProfilePhoto: (file: FormData) => Promise<void>
}
const AvatarMenu: React.FC<Props> = ({ updateProfilePhoto }) => {
	const [isActive, setIsActive] = useState(false)
	const [isModalOpen, setisModalOpen] = useState(false)
	const classes = useStyles({ isActive })

	const handlerMouseOver = () => {
		!isModalOpen && setIsActive(true)
	}

	const handlerMouseLeave = () => {
		setIsActive(false)
	}

	const handlerClick: ReactEventHandler<HTMLLIElement> = e => {
		setisModalOpen(true)
		setIsActive(false)
	}

	const hideModal = useCallback(() => {
		setisModalOpen(false)
	}, [setisModalOpen])

	const modal = isModalOpen
		? (<UploadImageModal
			hideModal={hideModal}
			isModalOpen={isModalOpen}
			updateProfilePhoto={updateProfilePhoto}
		/>)
		: null

	return (
		<div className={classes.menu}
			onMouseOver={handlerMouseOver}
			onMouseLeave={handlerMouseLeave}
		>
			<nav>
				<ul className={classes.list}>
					<li onClick={handlerClick}>
						<GlobalSvgSelector type='arrow-top' color='white' />Upload
					</li>
					{/* <li onClick={handlerClick}>
						<GlobalSvgSelector type='trash' color='white' />Delete
					</li>
					<li onClick={handlerClick}>
						<GlobalSvgSelector type='zoom-in' color='white' />Show
					</li> */}
				</ul>
			</nav>
			{modal}
		</div>

	)
}

export default AvatarMenu