import { useEffect, useState } from "react"
import ImageDropzone from "../../form/Dropzones/ImageDropzone/ImageDropzone"
import Modal from "../Modal"
import S from "./UploadImageModal.styled"

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
			<S.Container isDragEnter={isDragEnter}>
				<S.Header>
					Uploading your avatar
					<button onClick={hideModal}>X</button>
				</S.Header>
				<ImageDropzone setDragActive={setDragActive} setImage={setImage} />
				<button onClick={handlerClick}>upload</button>
			</S.Container>
		</Modal >
	)
}

export default UploadImageModal