export const required = value => {
	return !value ? "This field is required!" : false
}

export const maxLength = maxLength => value => {
	return (value && value.length > maxLength) ? `Max length is ${maxLength} symbols` : false
}