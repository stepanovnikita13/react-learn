import facebook from './social/facebook.png'
import github from './social/github.png'
import instagram from './social/instagram.png'
import mainLink from './social/social-media.png'
import twitter from './social/twitter.png'
import vk from './social/vkontakte.png'
import whatsapp from './social/whatsapp.png'
import youtube from './social/youtube.png'

const iconTypes = { facebook, github, instagram, mainLink, twitter, vk, website: whatsapp, youtube }

const SocialIcon = ({ type, className }) => {
	return <img src={iconTypes[type]} alt={type} className={className} />
}

export default SocialIcon