import useStyles from './Message.styled';

const Message = ({ text }) => {
	const classes = useStyles()
	return (
		<div className={classes.message}>{text}</div>
	)
}
export default Message;