import { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import GlobalSvgSelector from '../../../../../assets/icons/global/globalSvgSelector'
import useStyles from './ImageDropzone.styled'

type ImageDropzoneProps = {
	setDragActive: (value: boolean) => void,
	setImage: (file: File) => void,
}

const ImageDropzone: React.FC<ImageDropzoneProps> = ({ setDragActive, setImage }) => {
	const onDrop = useCallback((acceptedFiles: Array<File>) => {
		const [file] = acceptedFiles
		setImage(file)
	}, [setImage])

	const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
		noClick: true,
		noKeyboard: true,
		maxFiles: 1,
		multiple: false,
		onDrop,
		accept: {
			'image/jpeg': [],
			'image/png': []
		}
	})

	const classes = useStyles({ isActive: isDragActive })

	useEffect(() => {
		setDragActive(isDragActive)
	}, [isDragActive, setDragActive])

	return (
		<div  {...getRootProps({ className: classes.wrapper })} >
			<input {...getInputProps()} />
			<div className={classes.border}>
				<div className={classes.content}>
					<GlobalSvgSelector type='arrow-bottom' className={classes.icon} />
					<div>
						<p className={classes.link} onClick={open} >Choose a file</p>
						<p>or drag it here.</p>
						<p className={classes.notice}>(Only *.jpeg and *.png images)</p>
					</div>
				</div>
			</div>
		</div >
	)
}

export default ImageDropzone