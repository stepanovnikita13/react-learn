import React, { useState } from 'react'
import { useEffect } from 'react'
import { Textarea } from '../../../common/form/Textarea/Textarea'

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
		<>
			{!editMode
				? <div>
					<span onClick={activateEditMode}>{status || (isOwner && 'Set status...')}</span>
				</div>
				: <Textarea
					autoFocus={true}
					value={statusState}
					onBlur={deactivateEditMode}
					onChange={onStatusChange}
					style={{ width: '100%' }}
				/>
			}
		</>
	)
}

export default ProfileStatus