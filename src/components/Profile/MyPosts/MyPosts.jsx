import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className='posts'>
				<Post msg="Hi! How are you?" />
				<Post msg="It's my first post" />
				<Post msg="Bye!" />
			</div>
		</div>
	)
}

export default MyPosts;