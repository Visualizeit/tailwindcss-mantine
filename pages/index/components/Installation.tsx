import { Code, Stack } from '@mantine/core'
import AnchorTitle from './AnchorTitle'

const Installation = () => {
	return (
		<Stack component="section">
			<AnchorTitle id="installation">Installation</AnchorTitle>
			<Code block className="text-m-sm">
				npm i tailwindcss-mantine
			</Code>
		</Stack>
	)
}

export default Installation
