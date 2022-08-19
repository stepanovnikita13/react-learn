import { ChangeEventHandler, useState } from "react"
import { useTheme } from "react-jss"
import useMedia from "../../../../hooks/useMedia"
import { device } from "../../../../styles/device"
import { CustomTheme } from "../../../../styles/themes"
import { Button, ButtonIcon } from "../../form/Buttons/Buttons"
import ImageDropzone from "../../form/Dropzones/ImageDropzone/ImageDropzone"
import Modal from "../Modal"
import useStyles from "./UploadImageModal.styled"

type Props = {
	hideModal: () => void,
	isModalOpen: boolean,
	updateProfilePhoto: (file: FormData) => Promise<void>
}
export type StyleProps = {
	isDragEnter: boolean
}

const UploadImageModal: React.FC<Props> = ({ hideModal, isModalOpen, updateProfilePhoto }) => {
	const [isDragEnter, setIsDragEnter] = useState(false)
	const [imageData, setImageData] = useState<File | null>(null)
	const isMobile = useMedia([device.laptopS], [false], true)
	const theme = useTheme<CustomTheme>()
	const classes = useStyles({ theme, isDragEnter })

	const setDragActive = (value: boolean) => {
		setIsDragEnter(value)
	}

	const uploadPhoto = () => {
		if (imageData) {
			let formData = new FormData()
			formData.append('image', imageData)
			updateProfilePhoto(formData)
		}
	}

	const handlerFiles: ChangeEventHandler<HTMLInputElement> = (e) => {
		const files = e.target.files
		if (!files || files?.length === 0) return
		setImageData(files[0])
	}

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
								<input id='upload-file' type='file' onChange={handlerFiles} />
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