import s from './Post.module.css'

const Post = (props) => (
	<div className={s.item}>
		<img src='https://salvemusic.com.ua/wp-content/uploads/2020/02/ava-max.jpg' />
		{props.msg}
		<div>
			<span>like</span>
		</div>
	</div>
)

export default Post;