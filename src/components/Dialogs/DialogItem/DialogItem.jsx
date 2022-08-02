import { NavLink } from 'react-router-dom'
import useStyles from './DialogItem.styled'

const DialogItem = (props) => {
	const classes = useStyles()
	return (
		<div className={classes.container} >
			<img src={props.avatar} alt="" />
			<NavLink to={'/dialogs/' + props.id} >{props.name}</NavLink>
		</div>
	)
}

export default DialogItem;