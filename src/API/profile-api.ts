import { Resopnse, UpdateProfilePhotoData } from "./types"
import { ProfileType } from "../types/types"
import { instance } from "./api"

export const profileAPI = {
	async getProfile(userId: number) {
		const res = await instance.get<ProfileType>(`profile/${userId}`)
		return res.data
	},

	async getStatus(userId: number) {
		const res = await instance.get<string>(`profile/status/${userId}`)
		return res.data
	},

	async updateStatus(status: string) {
		const res = await instance.put<Resopnse>('profile/status', { status })
		debugger
		return res.data
	},

	async updateProfilePhoto(file: FormData) {
		const res = await instance.put<Resopnse<UpdateProfilePhotoData>>('/profile/photo', file, { headers: { 'Content-Type': 'multipart/form-data' } })
		return res.data
	},

	async updateProfile(profile: ProfileType) {
		const res = await instance.put<Resopnse>('/profile', profile)
		return res.data
	}
}