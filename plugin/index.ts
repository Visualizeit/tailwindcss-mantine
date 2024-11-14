import {
	type MantineThemeOverride,
	mergeMantineTheme,
	DEFAULT_THEME,
	defaultCssVariablesResolver,
} from '@mantine/core'
import plugin from 'tailwindcss/plugin'
import { type KeyValuePair } from 'tailwindcss/types/config'

interface PluginOptions {
	themeOverride?: MantineThemeOverride
	overrideDarkMode?: boolean
}

const prefix = 'm'

export default plugin.withOptions<PluginOptions>(
	() => () => {},
	({ themeOverride, overrideDarkMode = true } = {}) => {
		const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)

		const resolvedVariables = defaultCssVariablesResolver(theme)

		const themeConfig = {
			scale: {} as KeyValuePair,
			cursor: {} as KeyValuePair,
			fontFamily: {} as KeyValuePair,
			fontSize: {} as KeyValuePair<
				string,
				[
					string,
					{
						lineHeight: string
						fontWeight: string
					},
				]
			>,
			lineHeight: {} as KeyValuePair,
			fontWeight: {} as KeyValuePair,
			colors: {} as KeyValuePair,
			spacing: {} as KeyValuePair,
			screens: {} as KeyValuePair,
			borderRadius: {} as KeyValuePair,
			boxShadow: {} as KeyValuePair,
			zIndex: {} as KeyValuePair,
		}

		{
			// headings
			themeConfig.fontWeight['heading'] = '--mantine-heading-font-weight'

			for (const size in theme.headings.sizes) {
				const tokenName = `${prefix}-${size.replace('h', 'heading')}`

				const lineHeight = `var(--mantine-${size}-line-height)`,
					fontWeight = `var(--mantine-${size}-font-weight)`

				themeConfig.fontSize[tokenName] = [
					`var(--mantine-${size}-font-size)`,
					{
						lineHeight,
						fontWeight,
					},
				]
				themeConfig.lineHeight[tokenName] = `var(--mantine-${size}-line-height)`
				themeConfig.fontWeight[tokenName] = `var(--mantine-${size}-font-weight)`
			}
		}

		{
			// z-index
			const zIndexLevels = ['app', 'modal', 'popover', 'overlay', 'max']

			for (const level of zIndexLevels) {
				themeConfig.zIndex[`${prefix}-${level}`] =
					`var(--mantine-z-index-${level})`
			}
		}

		interface TokenNameConfig {
			tokens: Record<string, string | [string, object]>
			searchValue: string
			replaceValue?: string
		}

		const tokenNameConfigs: TokenNameConfig[] = [
			{
				tokens: themeConfig.scale,
				searchValue: '--mantine-scale',
			},
			{
				tokens: themeConfig.cursor,
				searchValue: '--mantine-cursor-type',
			},
			{
				tokens: themeConfig.fontFamily,
				searchValue: '--mantine-font-family',
			},
			{
				tokens: themeConfig.fontSize,
				searchValue: '--mantine-font-size',
			},
			{
				tokens: themeConfig.lineHeight,
				searchValue: '--mantine-line-height',
			},
			{
				tokens: themeConfig.colors,
				searchValue: '--mantine-primary-color',
				replaceValue: '-primary',
			},
			{ tokens: {}, searchValue: '--mantine-color-scheme' },
			{
				tokens: themeConfig.colors,
				searchValue: '--mantine-color',
			},
			{
				tokens: themeConfig.spacing,
				searchValue: '--mantine-spacing',
			},
			{
				tokens: themeConfig.screens,
				searchValue: '--mantine-breakpoint',
			},
			{
				tokens: themeConfig.borderRadius,
				searchValue: '--mantine-radius-default',
			},
			{
				tokens: themeConfig.borderRadius,
				searchValue: '--mantine-radius',
			},
			{
				tokens: themeConfig.boxShadow,
				searchValue: '--mantine-shadow',
			},
		]

		for (const key in resolvedVariables) {
			const variables = resolvedVariables[key as keyof typeof resolvedVariables]

			for (const variable in variables) {
				const tokenNameConfig = tokenNameConfigs.find((config) =>
					variable.startsWith(config.searchValue),
				)

				if (tokenNameConfig) {
					const tokenName = variable.replace(
						tokenNameConfig.searchValue,
						tokenNameConfig.replaceValue ?? '',
					)

					const tokenNameWithPrefix =
						tokenName === '' ? prefix : prefix + tokenName

					tokenNameConfig.tokens[tokenNameWithPrefix] = `var(${variable})`
				}
			}
		}

		return {
			darkMode: overrideDarkMode
				? ['selector', '[data-mantine-color-scheme="dark"]']
				: undefined,
			theme: {
				extend: themeConfig,
			},
		}
	},
)
