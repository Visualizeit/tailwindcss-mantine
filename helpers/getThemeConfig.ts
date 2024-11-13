import { type ThemeConfig } from 'tailwindcss/types/config'
import mantinePlugin from '../plugin'
import mantineTheme from './mantineTheme'

const getThemeConfig = () => {
	const plugin = mantinePlugin({ themeOverride: mantineTheme })

	if (plugin.config && plugin.config.theme && plugin.config.theme.extend) {
		return plugin.config.theme.extend as ThemeConfig
	}

	throw new Error('theme is required')
}

export default getThemeConfig
