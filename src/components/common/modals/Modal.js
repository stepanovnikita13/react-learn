import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import * as ReactDOM from 'react-dom';
import { useTheme } from 'react-jss';
import useStyles from './Modal.styled';

const Modal = ({ isModalOpen, hideModal, ...props }) => {
	const theme = useTheme()
	const classes = useStyles({ theme })
	const el = useMemo(() => document.createElement('div'), [])
	const wrapperRef = useRef(null)


	const handleClickOutsideCallback = useCallback(e => {
		if (wrapperRef.current && !wrapperRef.current.contains(e.target)) hideModal()
	}, [wrapperRef, hideModal])

	useEffect(() => {
		if (isModalOpen) {
			const app = document.getElementById('app')
			app.appendChild(el)
			document.addEventListener('mousedown', handleClickOutsideCallback, false)
			return () => {
				app.removeChild(el)
				document.removeEventListener('mousedown', handleClickOutsideCallback, false)
			}
		}

	}, [isModalOpen, el, handleClickOutsideCallback])

	if (isModalOpen) {
		return ReactDOM.createPortal(
			<div className={classes.modal}>
				<div className={classes.container} ref={wrapperRef}>
					{props.children}
				</div>
			</div>,
			el
		)
	}
	return null
}

export default Modal