import { Field, Form, Formik } from "formik"
import { required } from "../../../utilits/validators/validators";
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
	let postList = props.postsData.map(p => <Post msg={p.text} likesCount={p.likesCount} key={p.id} />).reverse()

	return (
		<div className={s.container} >
			<h3>My posts</h3>
			<AddPostForm addPost={props.addPost} />
			<div className={s.postList}>
				{postList}
			</div>
		</ div>
	)
}

const AddPostForm = (props) => {
	const onSubmit = (values, { setSubmitting, resetForm }) => {
		props.addPost(values.text)
		setSubmitting(false)
		resetForm()
	}

	return (
		<Formik
			initialValues={{ text: '' }}
			onSubmit={onSubmit}
		>
			{({
				values,
				errors,
				touched,
				isSubmitting
			}) => (
				<Form>
					<Field
						type="textarea"
						name="text"
						placeholder="Enter Your message"
						validate={required}
					/>
					{errors.text && touched.text && <div>{errors.text}</div>}
					<div>
						<button type="submit" disabled={isSubmitting || values.text === ''}>Add post</button>
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default MyPosts;