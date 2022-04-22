import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

	let postList = props.postsData.map(p => <Post msg={p.text} likesCount={p.likesCount} />)

	return (
		<div className={s.postsBlock} >
			<h3>My posts</h3>
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className={s.postList}>
				{postList}
			</div>
		</ div>
	)
}

export default MyPosts;