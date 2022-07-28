import { useEffect } from 'react';
import { useCallback, useState } from 'react';
import { ButtonIconFade } from '../../common/form/Buttons/Buttons';
import AboutMe from './AboutMe/AboutMe';
import AboutMeForm from './AboutMeForm/AboutMeForm';
import S from './ProfileInfo.styled';

const ProfileInfo = ({ isOwner, profile, updateProfile, errors }) => {
	const [editMode, setEditMode] = useState(false)
	const [isMouseEnter, setIsMouseEnter] = useState(false)
	const [ref, setRef] = useState(null)

	useEffect(() => {
		if (!errors) {
			setEditMode(false)
		}
	}, [errors])

	const toggleEditMode = () => {
		setEditMode(!editMode)
	}

	const handlerMouseEnter = () => {
		isOwner && !editMode && setIsMouseEnter(true)
	}
	const handlerMouseLeave = () => {
		isOwner && !editMode && setIsMouseEnter(false)
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
		<S.Container onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave}>
			<S.Heading>
				<h1>My profile</h1>
				{isMouseEnter && !editMode && <ButtonIconFade icon='edit' onClick={toggleEditMode} title='Edit' />}
				{editMode && <div>
					<ButtonIconFade
						icon='check'
						color='success'
						type='submit'
						onClick={handleSubmitForm}
						title='Apply change'
					/>
					<ButtonIconFade icon='close' color='error' onClick={toggleEditMode} title='Cancel' />
				</div>
				}
			</S.Heading>
			{!editMode
				? <AboutMe profile={profile} /> :
				<AboutMeForm profile={profile} bindRef={bindRef} updateProfile={updateProfile} formErrors={errors} />}
		</S.Container>
	)
}

export default ProfileInfo