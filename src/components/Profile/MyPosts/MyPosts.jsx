import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => (
	<div className={s.postsBlock}>
		<h3>My posts</h3>
		<div>
			<textarea></textarea>
			<button>Add post</button>
		</div>
		<div className={s.postList}>
			<Post msg="Hi! How are you?" />
			<Post msg="It's my first post" />
			<Post msg="Bye!" />
		</div>
	</div>
)

export default MyPosts;