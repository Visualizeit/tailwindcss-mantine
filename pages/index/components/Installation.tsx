import { Code, Stack, Text } from '@mantine/core'
import AnchorTitle from './AnchorTitle'

const Installation = () => {
	return (
		<Stack component="section">
			<AnchorTitle id="installation">Installation</AnchorTitle>
			<Code block fz="sm" p="md">
				npm i -D tailwindcss-mantine
			</Code>
			<Text>
				<Code fz="sm">tailwindcss-mantine</Code> is a native ESM package and
				does not provide CommonJS exports.
			</Text>
		</Stack>
	)
}

export default Installation
