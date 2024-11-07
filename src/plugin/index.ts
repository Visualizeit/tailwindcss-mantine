import {
	type MantineThemeOverride,
	mergeMantineTheme,
	DEFAULT_THEME,
} from '@mantine/core'
import plugin from 'tailwindcss/plugin'
import { type CSSRuleObject, type KeyValuePair } from 'tailwindcss/types/config'

interface PluginOptions {
	themeOverride?: MantineThemeOverride
}

const prefix = 'mt'

export default plugin.withOptions<PluginOptions>(
	(options = {}) => {
		const theme = mergeMantineTheme(DEFAULT_THEME, options.themeOverride)

		return (api) => {
			const components: CSSRuleObject = {}

			// Headings
			for (const size in theme.headings.sizes) {
				const heading = size.replace('h', 'heading')

				components[`.${prefix}-${heading}`] = {
					fontSize: `var(--mantine-${size}-font-size)`,
					lineHeight: `var(--mantine-${size}-line-height)`,
					fontWeight: `var(--mantine-${size}-font-weight)`,
				}
			}

			api.addComponents(components)
		}
	},
	(options) => {
		const theme = mergeMantineTheme(DEFAULT_THEME, options.themeOverride)

		// Cursor
		const cursor: KeyValuePair = {
			[prefix]: 'var(--mantine-cursor-type)',
		}

		// Font family
		const fontFamily = {
			[prefix]: 'var(--mantine-font-family)',
			[`${prefix}-monospace`]: 'var(--mantine-font-family-monospace)',
			[`${prefix}-headings`]: 'var(--mantine-font-family-headings)',
		}

		// Font size
		const fontSize: KeyValuePair = {}

		for (const size in theme.fontSizes) {
			fontSize[`${prefix}-${size}`] = `var(--mantine-font-size-${size})`
		}

		// Line height
		const lineHeight: KeyValuePair = {
			[prefix]: 'var(--mantine-line-height)',
		}

		for (const key in theme.lineHeights) {
			lineHeight[`${prefix}-${key}`] = `var(--mantine-line-height-${key})`
		}

		// Font weight
		const fontWeight: KeyValuePair = {
			[`${prefix}-heading`]: 'var(--mantine-heading-font-weight)',
		}

		// Headings
		for (const size in theme.headings.sizes) {
			const heading = size.replace('h', 'heading')

			fontSize[`${prefix}-${heading}`] = `var(--mantine-${size}-font-size)`
			lineHeight[`${prefix}-${heading}`] = `var(--mantine-${size}-line-height)`
			fontWeight[`${prefix}-${heading}`] = `var(--mantine-${size}-font-weight)`
		}

		// Colors variables
		const colors: Record<string, string> = {}

		{
			for (const colorName in theme.colors) {
				for (let shade = 0; shade < 10; shade++) {
					colors[`${prefix}-${colorName}-${shade}`] =
						`var(--mantine-color-${colorName}-${shade})`
				}

				// Variant colors
				const variantColorNames = [
					// Filled variant
					'filled',
					'filled-hover',
					// Light variant
					'light',
					'light-hover',
					'light-color',
					// Outline variant
					'outline',
					'outline-hover',
				]

				for (const variantColorName of variantColorNames) {
					colors[`${prefix}-${colorName}-${variantColorName}`] =
						`var(--mantine-color-${colorName}-${variantColorName})`
				}
			}

			// Primary color variables
			for (let shade = 0; shade < 10; shade++) {
				colors[`${prefix}-primary-${shade}`] =
					`var(--mantine-primary-color-${shade})`
			}

			colors[`${prefix}-primary-contrast`] =
				'var(--mantine-primary-color-contrast)'

			const primaryColorNames = [
				'primary-filled',
				'primary-filled-hover',
				'primary-light',
				'primary-light-hover',
				'primary-light-color',
			]

			for (const colorName of primaryColorNames) {
				colors[`${prefix}-${colorName}`] = `var(--mantine-color-${colorName})`
			}

			// Other color variables
			const otherColorNames = [
				'white',
				'black',
				'text',
				'body',
				'error',
				'placeholder',
				'dimmed',
				'bright',
				'anchor',
				'default',
				'default-hover',
				'default-color',
				'default-border',
			]

			for (const colorName of otherColorNames) {
				colors[`${prefix}-${colorName}`] = `var(--mantine-color-${colorName})`
			}
		}

		// Spacing variables
		const spacing: KeyValuePair = {}

		for (const size in theme.spacing) {
			spacing[`${prefix}-${size}`] = `var(--mantine-spacing-${size})`
		}

		// Breakpoints variables
		const screens: KeyValuePair = {}

		for (const size in theme.breakpoints) {
			screens[`${prefix}-${size}`] = `var(--mantine-breakpoint-${size})`
		}

		// Border radius variables
		const borderRadius: KeyValuePair = {
			[`${prefix}`]: `var(--mantine-radius-${theme.defaultRadius})`,
		}

		for (const size in theme.radius) {
			borderRadius[`${prefix}-${size}`] = `var(--mantine-radius-${size})`
		}

		// Shadow variables
		const boxShadow: KeyValuePair = {}

		for (const size in theme.shadows) {
			boxShadow[`${prefix}-${size}`] = `var(--mantine-shadow-${size})`
		}

		// z-index variables
		const zIndexLevels = ['app', 'modal', 'popover', 'overlay', 'max']

		const zIndex: KeyValuePair = {}

		for (const level of zIndexLevels) {
			zIndex[`${prefix}-${level}`] = `var(--mantine-z-index-${level})`
		}

		return {
			theme: {
				extend: {
					cursor,
					fontFamily,
					fontSize,
					lineHeight,
					fontWeight,
					colors,
					spacing,
					screens,
					borderRadius,
					boxShadow,
					zIndex,
				},
			},
		}
	},
)
