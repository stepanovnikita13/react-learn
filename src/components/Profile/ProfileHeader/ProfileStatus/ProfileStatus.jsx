import React, { useRef, useState, useEffect } from 'react'
import { useTheme } from 'react-jss'
import { ButtonIconFade } from '../../../common/form/Buttons/Buttons'
import { Textarea } from '../../../common/form/Textarea/Textarea'
import useStyles from './ProfileStatus.styled'
import useOnClickOutside from '../../../../hooks/useOnClickOutside'

const ProfileStatus = ({ status, updateStatus, isOwner }) => {
	const [editMode, setEditMode] = useState(false)
	const [statusState, setStatus] = useState(status)
	const theme = useTheme()
	const classes = useStyles(theme)
	const ref = useRef()
	useOnClickOutside(ref, () => {
		setEditMode(false)
		setStatus(status)
	})

	useEffect(() => {
		setStatus(status)
	}, [status])

	const activateEditMode = () => {
		isOwner && setEditMode(true)
	}

	const setAndUpdateStatus = () => {
		setEditMode(false)
		if (statusState !== status) updateStatus(statusState)
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	const Button = (props) => <ButtonIconFade {...props} color={theme.colors.success} icon='check' />
	return (
		<>
			{!editMode
				? <div className={classes.container}>
					<span onClick={activateEditMode}>{status || (isOwner && 'Set status...')}</span>
					<ButtonIconFade onClick={activateEditMode} icon='edit' />
				</div>
				: <div ref={ref}>
					<Textarea
						SendButton={Button}
						autoFocus={true}
						value={statusState}
						handleClick={setAndUpdateStatus}
						onChange={onStatusChange}
					/>
				</div>
			}
		</>
	)
}

export default ProfileStatus