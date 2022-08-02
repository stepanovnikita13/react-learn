import { useEffect, useState } from "react"
import { useTheme } from "react-jss"
import ImageDropzone from "../../form/Dropzones/ImageDropzone/ImageDropzone"
import Modal from "../Modal"
import useStyles from "./UploadImageModal.styled"

const UploadImageModal = ({ hideModal, isModalOpen, updateProfilePhoto }) => {
	const [isDragEnter, setIsDragEnter] = useState(false)
	const [imageData, setImageData] = useState(null)
	const theme = useTheme()
	const classes = useStyles({ theme, isDragEnter })

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
			<div className={classes.container} >
				<div className={classes.header}>
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