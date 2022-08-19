import { PhotosType, UserType } from "../types/types"

export enum ResutlCodesEnum {
	success = 0,
	error = 1,
	captcha = 10,
}

export type Resopnse<D = {}> = {
	resultCode: ResutlCodesEnum,
	messages: Array<string>,
	fieldsErrors: Array<{ field: string, error: string }>
	data: D
}

export type AuthMeData = {
	id: number,
	email: string,
	login: string
}

export type LoginData = {
	userId?: number,
}

export type GetCaptchaUrl = {
	url: string
}

export type UpdateProfilePhotoData = {
	photos: PhotosType
}

export type GetUsers = {
	error: string | null,
	totalCount: number,
	items: Array<UserType>
}