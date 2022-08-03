import AddPostForm from './AddPostForm/AddPostForm.jsx';
import useStyles from './MyPosts.styled';
import Post from './Post/Post';

const MyPosts = ({ postsData, addPost, isOwner, profilePhoto }) => {
	const classes = useStyles()
	let postList = postsData.map(p => <Post profilePhoto={profilePhoto} message={p.text} likesCount={p.likesCount} key={p.id} />).reverse()

	return (
		<div className={classes.container} >
			<h3>My posts</h3>
			{isOwner && <AddPostForm addPost={addPost} />}
			<div className={classes.postList} >
				{postList}
			</div>
		</ div>
	)
}

export default MyPosts;