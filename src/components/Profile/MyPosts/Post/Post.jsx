import { useState } from 'react';
import { Avatar } from '../../../common/user/Avatar';
import S from './Post.styled';

const Post = ({ profilePhoto, likesCount, message }) => {
	const [isLiked, setIsLiked] = useState(false)

	const handleClick = () => {
		setIsLiked(!isLiked)
	}

	return (
		<S.Post>
			<Avatar style={{ width: '50px', height: '50px' }} url={profilePhoto} />
			{message}
			<S.LikeContainer>
				<S.ButtonLike icon='heart' onClick={handleClick} isLiked={isLiked} title='Like' />
				<div>{likesCount}</div>
			</S.LikeContainer>
		</S.Post>
	)
}

export default Post;