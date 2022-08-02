import { Field, Form, Formik } from "formik"
import { useTheme } from "react-jss"
import { NavLink } from "react-router-dom"
import { required } from "../../../utilits/validators/validators"
import { Button } from "../../common/form/Buttons/Buttons"
import { Input } from "../../common/form/Input/Input"
import useStyles from "./LoginForm.styled"

const LoginForm = ({ login, error, captchaUrl, setIsAuth }) => {
	const theme = useTheme()
	const classes = useStyles({ theme })
	const loginSubmit = async ({ email, password, rememberMe, captcha }, { setSubmitting }) => {
		await login(email, password, rememberMe, captcha, setIsAuth)
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
			<h1>Login into<br />your account</h1>
			<Formik
				initialValues={{ email: '', password: '', rememberMe: false, captcha: '' }}
				onSubmit={loginSubmit}
			>
				{({
					isSubmitting,
					errors
				}) => (
					<Form>
						<div className={classes.wrapper}>
							<div className={classes.error}>{error.message}</div>
							{createField("email", "user", "Type Your Email")}
							{createField("password", "password", "Type Your Password")}

							<div className={classes.row}>
								<label>
									<Field type="checkbox" name="rememberMe" />Remember me
								</label>
								<a href="/login" className="">Forgot your Password?</a>
							</div>
							{captchaUrl && <>
								<img src={captchaUrl} alt="captcha" />
								<div>
									{createField("captcha", null, "Enter captcha")}
								</div>
							</>
							}
							<Button
								style={{ width: '100%' }}
								type="submit"
								disabled={isSubmitting || !!Object.keys(errors).length}
							>
								Submit
							</Button>
						</div>
					</Form>
				)}
			</Formik>
			Dont have account
			<NavLink to={"/register"} className={classes.registerLink}>Register</NavLink>
			<div className={classes.socialLogin} >
				<p>Or, Sign in with your social account</p>
				<Button className={classes.googleButton}>Sign in with Google</Button>
				<Button className={classes.facebookButton}>Sign in with Facebook</Button>
			</div>
		</div>
	)
}

export default LoginForm