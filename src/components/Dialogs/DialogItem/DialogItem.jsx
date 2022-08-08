import { NavLink } from 'react-router-dom'
import useStyles from './DialogItem.styled'

const DialogItem = (props) => {
	const { id, avatar, name, onClick } = props
	const classes = useStyles()
	return (
		<div className={classes.container} onClick={onClick} >
			<img src={avatar} alt="" />
			<NavLink to={'/dialogs/' + id} >{name}</NavLink>
		</div>
	)
}

export default DialogItem;