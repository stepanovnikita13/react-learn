import AddPostForm from './AddPostForm/AddPostForm.jsx';
import S from './MyPosts.styled';
import Post from './Post/Post';

const MyPosts = ({ postsData, addPost, isOwner, profilePhoto }) => {
	let postList = postsData.map(p => <Post profilePhoto={profilePhoto} message={p.text} likesCount={p.likesCount} key={p.id} />).reverse()

	return (
		<S.Container>
			<h3>My posts</h3>
			{isOwner && <AddPostForm addPost={addPost} />}
			<S.PostList>
				{postList}
			</S.PostList>
		</ S.Container>
	)
}

export default MyPosts;