import { GetUsers, Resopnse } from './types'
import { instance } from "./api"

export const usersAPI = {
	async getUsers(pageNumber = 1, pageSize = 10) {
		const res = await instance.get<GetUsers>(`users?page=${pageNumber}&count=${pageSize}`)
		return res.data
	},

	async followUser(userId: number) {
		const res = await instance.post<Resopnse>(`follow/${userId}`)
		return res.data
	},

	async unfollowUser(userId: number) {
		const res = await instance.delete<Resopnse>(`follow/${userId}`)
		return res.data
	}
}