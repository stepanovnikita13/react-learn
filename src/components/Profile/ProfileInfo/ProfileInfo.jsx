import { useState } from 'react';
import GlobalSvgSelector from '../../../assets/icons/global/globalSvgSelector';
import AboutMe from './AboutMe/AboutMe';
import AboutMeForm from './AboutMeForm/AboutMeForm';
import s from './ProfileInfo.module.css'

const ProfileInfo = ({ isOwner, profile, updateProfile }) => {
	const [editMode, setEditMode] = useState(false)
	const [isMouseEnter, setIsMouseEnter] = useState(false)
	const [ref, setRef] = useState(null)

	const toggleEditMode = () => {
		setEditMode(!editMode)
	}

	const handlerMouseEnter = () => {
		setIsMouseEnter(true)
	}
	const handlerMouseLeave = () => {
		setIsMouseEnter(false)
	}

	const handleSubmitForm = () => {
		if (ref) ref.current.handleSubmit()
		toggleEditMode()
	}

	const bindRef = ref => {
		setRef(ref)
	}


	return (
		<div className={s.container} onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave}>
			<div className={s.heading}>
				<h1>My profile</h1>
				{(isOwner && isMouseEnter) && (
					!editMode
						? <button className={s.btnEdit} onClick={toggleEditMode}>
							<GlobalSvgSelector type='edit' />
						</button>
						: <button type='submit' className={s.btnEdit} onClick={handleSubmitForm}>
							<GlobalSvgSelector type='check' />
						</button>)
				}
			</div>
			{!editMode ? <AboutMe profile={profile} /> : <AboutMeForm profile={profile} bindRef={bindRef} updateProfile={updateProfile} />}
		</div>
	)
}

export default ProfileInfo