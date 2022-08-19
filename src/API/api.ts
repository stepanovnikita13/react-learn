import axios from "axios"

export const instance = axios.create(
	{
		withCredentials: true,
		baseURL: "https://social-network.samuraijs.com/api/1.0/",
		headers: {
			"api-key": "e59ed79b-9e27-4eb1-af26-61ab53bf82dc" // Common
			//"api-key": "34862c57-615d-400d-926d-6344354d4068" // Secondary
		}
	}
)