import { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import GlobalSvgSelector from '../../../../../assets/icons/global/globalSvgSelector'
import s from './ImageDropzone.module.css'

const ImageDropzone = ({ setDragActive, setImage }) => {
	const onDrop = useCallback(acceptedFiles => {
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

	useEffect(() => {
		setDragActive(isDragActive)
	}, [isDragActive, setDragActive])

	return (
		<div className={s.wrapper} {...getRootProps({ className: s.wrapper })} >
			<input {...getInputProps()} />
			<div className={`${s.border} ${isDragActive ? s.active : ''}`}>
				<div className={s.content}>
					<GlobalSvgSelector type='arrow-bottom' className={s.icon} />
					<div>
						<p className={s.link} onClick={open} >Choose a file</p>
						<p>or drag it here.</p>
						<p className={s.notice}>(Only *.jpeg and *.png images)</p>
					</div>
				</div>
			</div>
		</div >
	)
}

export default ImageDropzone