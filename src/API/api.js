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
	},

	getProfile(userId) {
		return instance.get(`profile/${userId}`).then(res => res.data)
	}
}

export const authAPI = {
	authMe() {
		return instance.get(`auth/me`).then(res => res.data)
	}
}