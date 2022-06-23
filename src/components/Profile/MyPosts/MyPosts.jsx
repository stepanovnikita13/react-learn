import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
	let postList = props.postsData.map(p => <Post msg={p.text} likesCount={p.likesCount} key={p.id} />).reverse()

	let addPost = () => {
		props.addPost()
	}

	let updatePostText = (e) => {
		let text = e.target.value;
		props.updatePostText(text)
	}
	return (
		<div className={s.postsBlock} >
			<h3>My posts</h3>
			<div>
				<textarea onChange={updatePostText} value={props.currentPostText} />
				<button onClick={addPost}>Add post</button>
			</div>
			<div className={s.postList}>
				{postList}
			</div>
		</ div>
	)
}

export default MyPosts;