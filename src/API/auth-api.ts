import { AuthMeData, GetCaptchaUrl, LoginData, Resopnse } from "./types"
import { instance } from "./api"

export const authAPI = {
	async authMe() {
		const res = await instance.get<Resopnse<AuthMeData>>(`auth/me`)
		return res.data
	},

	async login(email: string, password: string, rememberMe = false, captcha: null | string) {
		const res = await instance.post<Resopnse<LoginData>>('/auth/login', { email, password, rememberMe, captcha })
		return res.data
	},

	async logout() {
		const res = await instance.delete<Resopnse>('/auth/login')
		return res.data
	},

	async getCaptchaUrl() {
		const res = await instance.get<GetCaptchaUrl>('/security/get-captcha-url')
		return res
	}
}