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
	getUsers(pageNumber = 1, pageSize = 10) {
		return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(res => res.data)
	},

	followUser(userId) {
		return instance.post(`follow/${userId}`).then(res => res.data)
	},

	unfollowUser(userId) {
		return instance.delete(`follow/${userId}`).then(res => res.data)
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`).then(res => res.data)
	},

	getStatus(userId) {
		return instance.get(`profile/status/${userId}`).then(res => res.data)
	},

	updateStatus(status) {
		return instance.put('profile/status', { status: status }).then(res => res.data)
	}
}

export const authAPI = {
	authMe() {
		return instance.get(`auth/me`).then(res => res.data)
	},

	login(email, password, rememberMe = false) {
		return instance.post('/auth/login', { email, password, rememberMe }).then(res => res.data)
	},

	logout() {
		return instance.delete('/auth/login').then(res => res.data)
	}
}