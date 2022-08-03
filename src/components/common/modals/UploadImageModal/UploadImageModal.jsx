import { useEffect, useState } from "react"
import { useTheme } from "react-jss"
import useMedia from "../../../../hooks/useMedia"
import { device } from "../../../../styles/device"
import { Button, ButtonIcon } from "../../form/Buttons/Buttons"
import ImageDropzone from "../../form/Dropzones/ImageDropzone/ImageDropzone"
import Modal from "../Modal"
import useStyles from "./UploadImageModal.styled"

const UploadImageModal = ({ hideModal, isModalOpen, updateProfilePhoto }) => {
	const [isDragEnter, setIsDragEnter] = useState(false)
	const [imageData, setImageData] = useState(null)
	const isMobile = useMedia([device.laptopS], [false], true)
	const theme = useTheme()
	const classes = useStyles({ theme, isDragEnter })

	const setDragActive = (value) => {
		setIsDragEnter(value)
	}

	const uploadPhoto = () => {
		if (imageData) {
			let formData = new FormData()
			formData.append('image', imageData)
			updateProfilePhoto(formData)
		}
	}

	const onImageSelected = (e) => {
		if (e.target.files.length) {
			setImageData(e.target.files[0])
		}
	}

	useEffect(() => {
		console.log(imageData)
	}, [imageData])

	return (
		<Modal hideModal={hideModal} isModalOpen={isModalOpen}>
			<div className={classes.container} >
				<div className={classes.header}>
					Uploading your avatar
					<ButtonIcon onClick={hideModal} icon='close' />
				</div>
				<div className={classes.content} >
					{isMobile
						? <Button>
							<label htmlFor='upload-file' className={classes.customUploadFile} >
								Choose a file
								<input id='upload-file' type='file' onChange={onImageSelected} />
							</label>
						</Button>
						: <ImageDropzone setDragActive={setDragActive} setImage={setImageData} />
					}
					<Button onClick={uploadPhoto}>upload</Button>
				</div>
			</div>
		</Modal >
	)
}

export default UploadImageModal