import { Field, Form, Formik } from "formik"
import { required } from "../../../utilits/validators/validators"
import { Input } from "../../common/form/Input/Input"
import S from "./LoginForm.styled"

const LoginForm = ({ login, error, captchaUrl, setIsAuth }) => {

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
						<S.Wrapper>
							<S.Error>{error.message}</S.Error>
							{createField("email", "user", "Type Your Email")}
							{createField("password", "password", "Type Your Password")}

							<S.Row>
								<label>
									<Field type="checkbox" name="rememberMe" />Remember me
								</label>
								<a href="/login" className="">Forgot your Password?</a>
							</S.Row>
							{captchaUrl && <>
								<img src={captchaUrl} alt="captcha" />
								<div>
									{createField("captcha", null, "Enter captcha")}
								</div>
							</>
							}
							<S.Button type="submit" disabled={isSubmitting || !!Object.keys(errors).length} inProgress={isSubmitting}>Submit</S.Button>
						</S.Wrapper>
					</Form>
				)}
			</Formik>
			Dont have account
			<S.RegisterLink to={"/register"}>Register</S.RegisterLink>
			<S.SocialLogin>
				<p>Or, Sign in with your social account</p>
				<S.GoogleButton>Sign in with Google</S.GoogleButton>
				<S.FacebookButton>Sign in with Facebook</S.FacebookButton>
			</S.SocialLogin>
		</div>
	)
}

export default LoginForm