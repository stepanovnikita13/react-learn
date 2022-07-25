import { useCallback, useState } from 'react';
import { ButtonIconFade } from '../../common/form/Buttons/Buttons';
import AboutMe from './AboutMe/AboutMe';
import AboutMeForm from './AboutMeForm/AboutMeForm';
import S from './ProfileInfo.styled';

const ProfileInfo = ({ isOwner, profile, updateProfile }) => {
	const [editMode, setEditMode] = useState(false)
	const [isMouseEnter, setIsMouseEnter] = useState(false)
	const [ref, setRef] = useState(null)

	const toggleEditMode = () => {
		setEditMode(!editMode)
	}

	const handlerMouseEnter = () => {
		isOwner && setIsMouseEnter(true)
	}
	const handlerMouseLeave = () => {
		isOwner && setIsMouseEnter(false)
	}

	const handleSubmitForm = () => {
		if (ref) {
			ref.current.handleSubmit()
			if (ref.current.isValid) toggleEditMode()
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
				<AboutMeForm profile={profile} bindRef={bindRef} updateProfile={updateProfile} />}
		</S.Container>
	)
}

export default ProfileInfo