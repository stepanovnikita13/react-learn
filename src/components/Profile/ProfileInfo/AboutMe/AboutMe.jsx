import { useMemo } from 'react';
import SocialIcon from '../../../../assets/icons/SocialIcon';
import S from './AboutMe.styled';

const AboutMe = ({ profile }) => {
	const { lookingForAJob, lookingForAJobDescription, contacts } = profile
	const contactItems = useMemo(() => {
		const items = Object.keys(contacts).filter(key => contacts[key]).map(key => {
			return <li key={key}><a href={contacts[key]}><SocialIcon type={key} /></a></li>
		})
		return items.length !== 0 ? items : undefined
	}, [contacts])

	return (
		<S.AboutList>
			<li>
				Looking for a job: {lookingForAJob ? 'Yes' : 'No'}
				{lookingForAJob && <div>{lookingForAJobDescription}</div>}
			</li>
			{contactItems &&
				<li>
					<span>My contacts: </span>
					<S.ContactList>{contactItems}</S.ContactList>
				</li>
			}
		</S.AboutList>
	)
}

export default AboutMe