import { Field, Form, Formik } from "formik"
import { NavLink } from "react-router-dom"
import Input from "../common/form/input/Input"
import s from "./Login.module.css"

const LoginForm = props => {
	const loginSubmit = (values, { setSubmitting }) => {
		setSubmitting(false);
	}

	return <Formik
		initialValues={{ userName: '', password: '', rememberMe: false }}
		onSubmit={loginSubmit}
	>
		{({
			values,
			handleChange,
			handleBlur,
			isSubmitting
		}) => (
			<Form className={s.form}>
				<Input
					type="user"
					handleChange={handleChange}
					handleBlur={handleBlur}
					values={values}
				/>
				<Input
					type='password'
					handleChange={handleChange}
					handleBlur={handleBlur}
					values={values}
				/>
				<div className={s.adds}>
					<label>
						<Field type="checkbox" name="rememberMe" />Remember me
					</label>
					<a href="/" className="">Forgot your Password?</a>
				</div>
				<button type="submit" disabled={isSubmitting} className={`${s.button} ${s.submitButton}`} >Submit</button>
			</Form>
		)}
	</Formik>
}

const Login = props => {
	return (
		<div>
			<h1 className={s.heading}>Login into<br />your account</h1>
			<LoginForm />
			Dont have account
			<NavLink to={"/register"} className={s.registerLink}>
				Register
			</NavLink>
			<div className={s.socialLogin}>
				<p>Or, Sign in with your social account</p>
				<button className={`${s.button} ${s.socialButton} ${s.googleButton}`}>Sign in with Google</button>
				<button className={`${s.button} ${s.socialButton} ${s.facebookButton}`}>Sign in with Facebook</button>
			</div>
		</div>
	)
}

export default Login