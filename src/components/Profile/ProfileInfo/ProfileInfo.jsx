import { isEmpty } from 'lodash';
import { useEffect } from 'react';
import { useCallback, useState } from 'react';
import { useTheme } from 'react-jss';
import useMedia from '../../../hooks/useMedia';
import { device } from '../../../styles/device';
import { ButtonIconFade } from '../../common/form/Buttons/Buttons';
import AboutMe from './AboutMe/AboutMe';
import AboutMeForm from './AboutMeForm/AboutMeForm';
import useStyles from './ProfileInfo.styled';

const ProfileInfo = ({ isOwner, profile, updateProfile, errors }) => {
	const theme = useTheme()
	const classes = useStyles()
	const [editMode, setEditMode] = useState(false)
	const [isActive, setIsActive] = useState(false)
	const [disabled, setDisabled] = useState(false)
	const [ref, setRef] = useState(null)
	const isMobile = useMedia([device.laptopS], [false], true)

	useEffect(() => {
		if (isEmpty(errors)) {
			setEditMode(false)
		}
	}, [errors])

	useEffect(() => {
		setIsActive(isMobile)
	}, [setIsActive, isMobile])

	const handlerMouseEvent = (value) => {
		isOwner && !isMobile && !editMode && setIsActive(value)
	}

	const handleSubmitForm = async () => {
		if (ref && !disabled) {
			await ref.current.handleSubmit()
		}
	}

	const bindRef = useCallback(ref => {
		setRef(ref)
	}, [])

	return (
		<div className={classes.container} onMouseEnter={() => handlerMouseEvent(true)} onMouseLeave={() => handlerMouseEvent(false)}>
			<div className={classes.heading}>
				<h1>My profile</h1>
				{isActive && !editMode && isOwner && <ButtonIconFade icon='edit' onClick={() => { setEditMode(true) }} title='Edit' />}
				{editMode && <div>
					<ButtonIconFade
						icon='check'
						color={theme.colors.success}
						type='submit'
						onClick={handleSubmitForm}
						disabled={disabled}
						title='Apply change'
					/>
					<ButtonIconFade
						icon='close'
						color={theme.colors.error}
						onClick={() => { setEditMode(false) }}
						title='Cancel'
					/>
				</div>
				}
			</div>
			{!editMode
				? <AboutMe profile={profile} /> :
				<AboutMeForm profile={profile} bindRef={bindRef} updateProfile={updateProfile} formErrors={errors} setDisabled={setDisabled} />}
		</div>
	)
}

export default ProfileInfo