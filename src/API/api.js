import axios from "axios"

const instance = axios.create(
	{
		withCredentials: true,
		baseURL: "https://social-network.samuraijs.com/api/1.0/",
		headers: {
			"api-key": "e59ed79b-9e27-4eb1-af26-61ab53bf82dc"
		}
	}
)

export const usersAPI = {
	async getUsers(pageNumber = 1, pageSize = 10) {
		const res = await instance.get(`users?page=${pageNumber}&count=${pageSize}`)
		return res.data
	},

	async followUser(userId) {
		const res = await instance.post(`follow/${userId}`)
		return res.data
	},

	async unfollowUser(userId) {
		const res = await instance.delete(`follow/${userId}`)
		return res.data
	}
}

export const profileAPI = {
	async getProfile(userId) {
		const res = await instance.get(`profile/${userId}`)
		return res.data
	},

	async getStatus(userId) {
		const res = await instance.get(`profile/status/${userId}`)
		return res.data
	},

	async updateStatus(status) {
		const res = await instance.put('profile/status', { status: status })
		return res.data
	},

	async updateProfilePhoto(file) {
		const formData = new FormData()
		formData.append('image', file)

		const res = await instance.put('/profile/photo', formData, { headers: { "content-type": "multipart/form-data" } })
		console.log(formData.getAll('image'));
		return res.data
	}
}

export const authAPI = {
	async authMe() {
		const res = await instance.get(`auth/me`)
		return res.data
	},

	async login(email, password, rememberMe = false, captcha = null) {
		const res = await instance.post('/auth/login', { email, password, rememberMe, captcha })
		return res.data
	},

	async logout() {
		const res = await instance.delete('/auth/login')
		return res.data
	},

	async getCaptchaUrl() {
		const res = await instance.get('/security/get-captcha-url')
		return res
	}
}