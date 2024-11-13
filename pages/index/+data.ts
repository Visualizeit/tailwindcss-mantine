import { type ThemeConfig } from 'tailwindcss/types/config'
import invariant from 'tiny-invariant'
import mantinePlugin from '../../plugin'

export const data = () => {
	const plugin = mantinePlugin({})

	invariant(plugin.config?.theme?.extend, 'theme is required')

	return plugin.config.theme.extend as ThemeConfig
}

export type Data = ReturnType<typeof data>
