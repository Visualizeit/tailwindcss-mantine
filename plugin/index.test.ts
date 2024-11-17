import postcss from 'postcss'
import tailwind from 'tailwindcss'
import { test, assert } from 'vitest'
import { getCSSVariablesList } from '../helpers/getCSSVariablesList'
import getSafelist from '../helpers/getSafelist'
import mantineTheme from '../helpers/mantineTheme'
import mantinePlugin from '../plugin'

const generateCSSFromInput = async () => {
	const result = await postcss(
		tailwind({
			content: [
				{
					raw: getSafelist().join(' '),
				},
			],
			plugins: [mantinePlugin({ themeOverride: mantineTheme })],
		}),
	).process('@tailwind utilities', {
		from: undefined,
	})

	return result.css
}

test('it should generate CSS with all Mantine CSS variables', async () => {
	const css = await generateCSSFromInput()

	const result = getCSSVariablesList().every((variable) =>
		css.includes(variable),
	)

	assert(result, 'All Mantine CSS variables are included in the generated CSS')
})
