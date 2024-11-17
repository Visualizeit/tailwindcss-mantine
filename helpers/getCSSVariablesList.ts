import {
	DEFAULT_THEME,
	mergeMantineTheme,
	defaultCssVariablesResolver,
} from '@mantine/core'
import mantineTheme from './mantineTheme'

const ignoredCSSVariables = [
	'--mantine-color-scheme',
	'--mantine-webkit-font-smoothing',
	'--mantine-moz-font-smoothing',
	'--mantine-heading-text-wrap',
]

export const getCSSVariablesList = () => {
	const theme = mergeMantineTheme(DEFAULT_THEME, mantineTheme)

	const resolvedVariables = defaultCssVariablesResolver(theme)

	const variablesList: string[] = []

	for (const key in resolvedVariables) {
		const variables = resolvedVariables[key as keyof typeof resolvedVariables]

		for (const variable in variables) {
			if (ignoredCSSVariables.includes(variable)) {
				continue
			}

			variablesList.push(variable)
		}
	}

	return variablesList
}
