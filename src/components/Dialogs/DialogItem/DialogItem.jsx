import { NavLink } from 'react-router-dom'
import S from './DialogItem.styled';

const DialogItem = (props) => (
	<S.Container>
		<img src={props.avatar} alt="" />
		<NavLink to={'/dialogs/' + props.id} >{props.name}</NavLink>
	</S.Container>
)

export default DialogItem;