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
	const isMobile = useMedia([device.laptopS], [false], true)
	const [ref, setRef] = useState(null)

	useEffect(() => {
		if (!errors) {
			setEditMode(false)
		}
	}, [errors])

	useEffect(() => {
		setIsActive(isMobile)
		console.log('use');
	}, [setIsActive, isMobile])

	const toggleEditMode = () => {
		setEditMode(value => !value)
	}

	const handlerMouseEvent = () => {
		isOwner && !isMobile && !editMode && setIsActive(value => !value)
	}

	const handleSubmitForm = () => {
		if (ref) {
			ref.current.handleSubmit()
		}
	}

	const bindRef = useCallback(ref => {
		setRef(ref)
	}, [])

	return (
		<div className={classes.container} onMouseEnter={handlerMouseEvent} onMouseLeave={handlerMouseEvent}>
			<div className={classes.heading}>
				<h1>My profile</h1>
				{isActive && !editMode && <ButtonIconFade icon='edit' onClick={toggleEditMode} title='Edit' />}
				{editMode && <div>
					<ButtonIconFade
						icon='check'
						color={theme.colors.success}
						type='submit'
						onClick={handleSubmitForm}
						title='Apply change'
					/>
					<ButtonIconFade icon='close' color={theme.colors.error} onClick={toggleEditMode} title='Cancel' />
				</div>
				}
			</div>
			{!editMode
				? <AboutMe profile={profile} /> :
				<AboutMeForm profile={profile} bindRef={bindRef} updateProfile={updateProfile} formErrors={errors} />}
		</div>
	)
}

export default ProfileInfo