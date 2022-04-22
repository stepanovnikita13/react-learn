import s from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

	let postList = props.postsData.map(p => <Post msg={p.text} likesCount={p.likesCount} />)

	let newPostElement = React.useRef();

	let addPost = () => {
		let text = newPostElement.current.value;

		props.addPost(text)
		newPostElement.current.value = '';
	}

	return (
		<div className={s.postsBlock} >
			<h3>My posts</h3>
			<div>
				<textarea ref={newPostElement}></textarea>
				<button onClick={addPost}>Add post</button>
			</div>
			<div className={s.postList}>
				{postList}
			</div>
		</ div>
	)
}

export default MyPosts;