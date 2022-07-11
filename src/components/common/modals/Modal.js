import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import * as ReactDOM from 'react-dom';
import s from './Modal.module.css'

/* class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.modalRef = React.createRef()
		this.el = document.createElement('div')
		this.el.className = s.modal
		this.app = document.getElementById('app')
		this.handleClickOutside = this.handleClickOutside.bind(this)

		this.state = { isActive: false }
	}

	componentDidMount() {
		this.app.appendChild(this.el)
		this.setState(() => ({ isActive: true }))
		document.addEventListener('mousedown', this.handleClickOutside, false)
	}

	componentWillUnmount() {
		this.app.removeChild(this.el)
		document.removeEventListener('mousedown', this.handleClickOutside, false)
	}

	handleClickOutside(e) {
		if (this.modalRef && !this.modalRef.current.contains(e.target)) {
			this.setState(() => ({ isActive: false }))
			this.app.removeChild(this.el)
			document.removeEventListener('mousedown', this.handleClickOutside, false)
			//this.props.handleHide()
		}
	}

	render() {
		return this.state.isActive ?
			ReactDOM.createPortal(
				<div ref={this.modalRef}>{this.props.children}</div>,
				this.el
			) :
			null
	}
}

export default Modal */
const Modal = ({ isModalOpen, hideModal, ...props }) => {
	const el = useMemo(() => document.createElement('div'), [])
	const wrapperRef = useRef(null)
	el.className = s.modal
	const app = document.getElementById('app')

	const handleClickOutsideCallback = useCallback(e => {
		if (wrapperRef.current && !wrapperRef.current.contains(e.target)) hideModal()
	}, [wrapperRef, hideModal])

	useEffect(() => {
		if (isModalOpen) {
			app.appendChild(el)
			document.addEventListener('mousedown', handleClickOutsideCallback, false)
			return () => {
				app.removeChild(el)
				document.removeEventListener('mousedown', handleClickOutsideCallback, false)
			}
		}

	}, [isModalOpen, el, app, handleClickOutsideCallback])

	if (isModalOpen) {
		return ReactDOM.createPortal(
			<div ref={wrapperRef}>{props.children}</div>,
			el
		)
	}

	return null
}

export default Modal