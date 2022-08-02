import { useCallback, useState } from "react"

function getUseStorage(storageType) {
	function useStorage(key, initialValue) {
		const storage = storageType === 'local' ? window.localStorage : window.sessionStorage
		const [storedValue, setStoredValue] = useState(() => {
			try {
				const item = storage.getItem(key)
				return item ? JSON.parse(item) : initialValue
			} catch (error) {
				console.log(error)
				return initialValue
			}
		})
		const setValue = useCallback((value) => {
			try {
				const valueToStore = value instanceof Function ? value(storedValue) : value
				setStoredValue(valueToStore)
				storage.setItem(key, JSON.stringify(valueToStore))
			} catch (error) {
				console.log(error)
			}
		}, [key, storedValue, storage])

		return [storedValue, setValue];
	}

	return useStorage
}

export const useLocalStorage = getUseStorage('local')
export const useSessionStorage = getUseStorage('session')