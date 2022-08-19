import React, { ReactNode, useEffect, useMemo, useRef } from 'react'
import * as ReactDOM from 'react-dom';
import { useTheme } from 'react-jss';
import useStyles from './Modal.styled';
import useOnClickOutside from '../../../hooks/useOnClickOutside'
import { CustomTheme } from '../../../styles/themes';

type Props = {
	isModalOpen: boolean
	hideModal: () => void
	children: ReactNode
}
const Modal: React.FC<Props> = ({ isModalOpen, hideModal, children }) => {
	const theme = useTheme<CustomTheme>()
	const classes = useStyles({ theme })
	const ref = useRef<HTMLDivElement>(null)
	useOnClickOutside(ref, hideModal)
	const el = useMemo(() => document.createElement('div'), [])
	//const container = 

	useEffect(() => {
		if (isModalOpen) {
			const app = document.getElementById('app')
			app!.appendChild(el)
			return () => {
				app!.removeChild(el)
			}
		}
	}, [isModalOpen, el])

	if (isModalOpen) {
		return ReactDOM.createPortal(
			<div className={classes.modal}>
				<div className={classes.container} ref={ref}>
					{children}
				</ div>
			</ div>,
			el
		)
	}
	return null
}

export default Modal