import { useMemo } from 'react';
import SocialIcon from '../../../../assets/icons/SocialIcon';
import useStyles from './AboutMe.styled';

const AboutMe = ({ profile }) => {
	const classes = useStyles()
	const { aboutMe, lookingForAJob, lookingForAJobDescription, contacts } = profile
	const contactItems = useMemo(() => {
		const items = Object.keys(contacts).filter(key => contacts[key]).map(key => {
			return <li key={key}><a href={contacts[key]}><SocialIcon type={key} /></a></li>
		})
		return items.length !== 0 ? items : undefined
	}, [contacts])

	return (
		<ul className={classes.aboutList}>
			<li>
				{aboutMe && <div>{aboutMe}</div>}
			</li>
			<li>
				Looking for a job: {lookingForAJob ? 'Yes' : 'No'}
			</li>
			<li>
				{lookingForAJob && <div>{lookingForAJobDescription}</div>}
			</li>
			{contactItems &&
				<li>
					<span>My contacts: </span>
					<ul className={classes.contactList}>{contactItems}</ul>
				</li>
			}
		</ul>
	)
}

export default AboutMe