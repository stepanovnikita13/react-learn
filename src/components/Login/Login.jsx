import { Field, Form, Formik } from "formik"
import { Navigate, NavLink } from "react-router-dom"
import { required } from "../../utilits/validators/validators"
import { Input } from "../common/form/Input/Input"
import s from "./Login.module.css"

const LoginForm = props => {
	const loginSubmit = (values, { setSubmitting }) => {
		props.login(values.email, values.password, values.rememberMe)
		alert(JSON.stringify(values, null, 2));
		setSubmitting(false);
	}

	return (
		<div>
			<Formik
				initialValues={{ email: '', password: '', rememberMe: false }}
				onSubmit={loginSubmit}
			>
				{({
					values,
					handleChange,
					handleBlur,
					isSubmitting
				}) => (
					<Form className={s.form}>
						<Field component={Input} name="email" type="user" placeholder="Type Your Username" validate={required} />
						<Field component={Input} name="password" type="password" placeholder="Type Your Password" validate={required} />
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

const Login = props => {
	if (props.isAuth) return <Navigate to="/profile" replace={true} />
	return (
		<div>
			<h1 className={s.heading}>Login into<br />your account</h1>
			<LoginForm login={props.login} />
		</div>
	)
}

export default Login