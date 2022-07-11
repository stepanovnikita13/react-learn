import React, { useState } from 'react'
import { useEffect } from 'react'
// import s from './ProfileStatus.module.css'

const ProfileStatus = ({ status, updateStatus, isOwner }) => {
	let [editMode, setEditMode] = useState(false)
	let [statusState, setStatus] = useState(status)

	useEffect(() => {
		setStatus(status)
	}, [status])

	const activateEditMode = () => {
		isOwner && setEditMode(true)
	}

	const deactivateEditMode = () => {
		setEditMode(false)
		updateStatus(statusState)
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<div>
			{!editMode
				? <div>
					<span onClick={activateEditMode}>{status || 'Set status...'}</span>
				</div>
				: <div>
					<input autoFocus={true} type="text" value={statusState} onBlur={deactivateEditMode} onChange={onStatusChange} />
				</div>
			}
		</div>
	)
}

export default ProfileStatus