import { useEffect, useState } from "react"
import ImageDropzone from "../../form/Dropzones/ImageDropzone/ImageDropzone"
import Modal from "../Modal"
import s from './UploadImageModal.module.css'

const UploadImageModal = ({ hideModal, isModalOpen, updateProfilePhoto }) => {
	const [isDragEnter, setIsDragEnter] = useState(false)
	const [imageData, setImageData] = useState(null)

	useEffect(() => {

	}, [imageData])

	const setImage = (image) => {
		setImageData(image)
	}

	const setDragActive = (value) => {
		setIsDragEnter(value)
	}

	const handlerClick = () => {
		if (imageData) {
			updateProfilePhoto(imageData)
		}
	}

	return (
		<Modal hideModal={hideModal} isModalOpen={isModalOpen}>
			<div className={s.container} style={{ backgroundColor: isDragEnter ? 'white' : null }}>
				<div className={s.header}>
					Uploading your avatar
					<button onClick={hideModal}>X</button>
				</div>
				<ImageDropzone setDragActive={setDragActive} setImage={setImage} />
				<button onClick={handlerClick}>upload</button>
			</div>
		</Modal >
	)
}

export default UploadImageModal