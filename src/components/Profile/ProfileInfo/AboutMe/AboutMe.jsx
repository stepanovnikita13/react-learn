import { useMemo } from 'react';
import SocialIcon from '../../../../assets/icons/SocialIcon';
import s from './AboutMe.module.css'

const AboutMe = ({ profile }) => {
	const { lookingForAJob, lookingForAJobDescription, contacts } = profile
	const contactItems = useMemo(() => {
		const items = Object.keys(contacts).filter(key => contacts[key]).map(key => {
			return <li key={key}><a href={contacts[key]}><SocialIcon type={key} /></a></li>
		})
		return items.length !== 0 ? items : undefined
	}, [contacts])

	return (
		<>
			<ul className={s.aboutList}>
				<li>
					Looking for a job: {lookingForAJob ? 'Yes' : 'No'}
					{lookingForAJob && <div>{lookingForAJobDescription}</div>}
				</li>
				{contactItems &&
					<li>
						<span>My contacts: </span>
						<ul className={s.contactList}>{contactItems}</ul>
					</li>
				}
			</ul>
		</>
	)
}

export default AboutMe