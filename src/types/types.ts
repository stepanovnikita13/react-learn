export type PostsDataType = {
	id: number,
	text: string | null,
	likesCount: number
}
export type ContactsType = {
	github: string
	vk: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainLink: string
}
export type PhotosType = {
	small: string | null,
	large: string | null
}
export type ProfileType = {
	userId: number,
	lookingForAJob: boolean,
	lookingForAJobDescription: string,
	fullName: string,
	contacts: ContactsType,
	photos: PhotosType
}
export type UserType = {
	id: number,
	name: string,
	status: string,
	photos: PhotosType,
	followed: boolean
}
export type MsgDataType = {
	id: number,
	text: string
}
export type DialogsData = {
	id: number,
	firstName: string,
	lastName: string,
	avatar: string
}

type Event<E> = React.FormEvent<E> | undefined
export type EventInput = Event<HTMLInputElement>
export type EventTextarea = Event<HTMLTextAreaElement>