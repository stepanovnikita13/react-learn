import React, { useState } from 'react'
import { useEffect } from 'react'
import s from './ProfileStatus.module.css'

const ProfileStatus = (props) => {
	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<div>
			{!editMode
				? <div>
					<span onClick={activateEditMode}>{props.status || 'Set status...'}</span>
				</div>
				: <div>
					<input autoFocus={true} type="text" value={status} onBlur={deactivateEditMode} onChange={onStatusChange} />
				</div>
			}
		</div>
	)
}

export default ProfileStatus