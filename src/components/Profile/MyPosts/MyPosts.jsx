import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

	let postsData = [
		{ id: 0, text: 'Hi! How are you?', likesCount: 12 },
		{ id: 0, text: "It's my first post", likesCount: 11 },
		{ id: 0, text: 'Bye!', likesCount: 8 },
	]

	let postList = postsData.map(p => <Post msg={p.text} likesCount={p.likesCount} />)

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