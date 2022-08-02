import { ThemeProvider } from 'react-jss';
import { useLocalStorage } from '../hooks/useLocalStorage';
import getTheme from '../styles/themes';

const withTheme = (Component) => {
	function WithTheme(props) {
		const [theme, setTheme] = useLocalStorage('theme', 'light')
		return (
			<ThemeProvider theme={getTheme(theme)}>
				<Component {...props} currentTheme={theme} setTheme={setTheme} />
			</ThemeProvider>
		)
	}
	WithTheme.displayName = `WithTheme(${getDisplayName(Component)})`
	return WithTheme

	function getDisplayName(Component) {
		return Component.displayName || Component.name || 'Component'
	}
}

export default withTheme