import s from './MyPosts.module.css'
import Post from './Post/Post';

import { addPostCreator, updatePostTextCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {
	let postList = props.postsData.map(p => <Post msg={p.text} likesCount={p.likesCount} />)

	let addPost = () => {
		props.dispatch(addPostCreator());
	}

	let onPostChange = (e) => {
		let text = e.target.value;
		props.dispatch(updatePostTextCreator(text));
	}

	return (
		<div className={s.postsBlock} >
			<h3>My posts</h3>
			<div>
				<textarea onChange={onPostChange} value={props.currentPostText} />
				<button onClick={addPost}>Add post</button>
			</div>
			<div className={s.postList}>
				{postList}
			</div>
		</ div>
	)
}

export default MyPosts;