import { useState } from 'react';
import { useTheme } from 'react-jss';
import { ButtonIconFade } from '../../../common/form/Buttons/Buttons';
import Avatar from '../../../common/user/Avatar';
import useStyles from './Post.styled';

const Post = ({ profilePhoto, likesCount, message }) => {
	const [isLiked, setIsLiked] = useState(false)
	const theme = useTheme()
	const classes = useStyles({ theme, isLiked })

	const handleClick = () => {
		setIsLiked(!isLiked)
	}

	return (
		<div className={classes.post}>
			<Avatar style={{ width: '50px', height: '50px' }} url={profilePhoto} />
			{message}
			<div className={classes.likeContainer}>
				<ButtonIconFade className={classes.buttonLike} icon='heart' onClick={handleClick} title='Like' />
				<div>{likesCount}</div>
			</div>
		</div>
	)
}

export default Post;