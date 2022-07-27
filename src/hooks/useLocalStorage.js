import { useCallback, useState } from "react"

function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key)
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
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			console.log(error)
		}
	}, [key, storedValue])

	return [storedValue, setValue];
}

export default useLocalStorage