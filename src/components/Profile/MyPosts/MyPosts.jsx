import s from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
	let postList = props.postsData.map(p => <Post msg={p.text} likesCount={p.likesCount} />)
	let newPostElement = React.useRef();

	let addPost = () => {
		props.addPost()
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateCurrentPostText(text);
	}

	return (
		<div className={s.postsBlock} >
			<h3>My posts</h3>
			<div>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.currentPostText} />
				<button onClick={addPost}>Add post</button>
			</div>
			<div className={s.postList}>
				{postList}
			</div>
		</ div>
	)
}

export default MyPosts;