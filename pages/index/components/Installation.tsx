import { CodeHighlight } from '@mantine/code-highlight'
import { Stack, Text, Alert } from '@mantine/core'
import AnchorTitle from './AnchorTitle'

const tailwindConfigCode = `
import mantinePlugin from 'tailwindcss-mantine'
import mantineTheme from 'your mantine theme override'

/** @type {import('tailwindcss').Config} */
export default {
	//...
	plugins: [mantinePlugin({ themeOverride: mantineTheme })],
}
`

const Installation = () => {
	return (
		<Stack component="section">
			<AnchorTitle id="installation">Installation</AnchorTitle>
			<ol className="list-decimal space-y-m-lg *:space-y-m-sm">
				<li>
					<Text>Install the package from npm:</Text>
					<CodeHighlight code="npm i -D tailwindcss-mantine" language="bash" />
				</li>
				<li>
					<Text>Add the plugin and theme override to tailwind.config.js:</Text>
					<CodeHighlight code={tailwindConfigCode} />
					<Alert color="yellow">
						tailwindcss-mantine is a native ESM package and does not provide
						CommonJS exports.
					</Alert>
				</li>
			</ol>
		</Stack>
	)
}

export default Installation
