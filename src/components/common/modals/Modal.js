import React, { useEffect, useMemo, useRef } from 'react'
import * as ReactDOM from 'react-dom';
import { useTheme } from 'react-jss';
import useStyles from './Modal.styled';
import useOnClickOutside from '../../../hooks/useOnClickOutside'

const Modal = ({ isModalOpen, hideModal, ...props }) => {
	const theme = useTheme()
	const classes = useStyles({ theme })
	const ref = useRef()
	useOnClickOutside(ref, hideModal)
	const el = useMemo(() => document.createElement('div'), [])

	useEffect(() => {
		if (isModalOpen) {
			const app = document.getElementById('app')
			app.appendChild(el)
			return () => {
				app.removeChild(el)
			}
		}
	}, [isModalOpen, el])

	if (isModalOpen) {
		return ReactDOM.createPortal(
			<div className={classes.modal}>
				<div className={classes.container} ref={ref}>
					{props.children}
				</div>
			</div>,
			el
		)
	}
	return null
}

export default Modal