import { Field, Form, Formik } from "formik"
import { NavLink } from "react-router-dom"
import { required } from "../../utilits/validators/validators"
import { Input } from "../common/form/Input/Input"
import s from "./LoginForm.module.css"

const LoginForm = ({ login, error, captchaUrl }) => {
	const loginSubmit = (values, { setSubmitting }) => {
		login(values.email, values.password, values.rememberMe, values.captcha)
		setSubmitting(false);
	}

	const createField = (name, type, placeholder) => {
		return (
			<Field
				component={Input}
				name={name}
				type={type}
				placeholder={placeholder}
				validate={required}
				errormessage={error.message}
				errorfield={error.field}
			/>
		)
	}

	return (
		<div>
			<Formik
				initialValues={{ email: '', password: '', rememberMe: false, captcha: '' }}
				onSubmit={loginSubmit}
			>
				{({
					isSubmitting
				}) => (
					<Form className={s.form}>
						<div className={'error ' + s.error}>{error.message}</div>
						{createField("email", "user", "Type Your Email")}
						{createField("password", "password", "Type Your Password")}

						<div className={s.adds}>
							<label>
								<Field type="checkbox" name="rememberMe" />Remember me
							</label>
							<a href="/" className="">Forgot your Password?</a>
						</div>
						{captchaUrl && <>
							<img src={captchaUrl} alt="captcha" />
							<div>
								{createField("captcha", null, "Enter captcha")}
							</div>
						</>
						}
						<button type="submit" disabled={isSubmitting} className={`${s.button} ${s.submitButton}`} >Submit</button>
					</Form>
				)}
			</Formik>
			Dont have account
			<NavLink to={"/register"} className={s.registerLink}>Register</NavLink>
			<div className={s.socialLogin}>
				<p>Or, Sign in with your social account</p>
				<button className={`${s.button} ${s.socialButton} ${s.googleButton}`}>Sign in with Google</button>
				<button className={`${s.button} ${s.socialButton} ${s.facebookButton}`}>Sign in with Facebook</button>
			</div>
		</div>
	)
}

export default LoginForm