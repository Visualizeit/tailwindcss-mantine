import { Anchor, Stack, Title } from '@mantine/core'
import { kebabCase } from 'scule'
import { type ThemeConfig } from 'tailwindcss/types/config'
import UtilitiesTable from './UtilitiesTable'

declare global {
	const THEME_CONFIG: ThemeConfig
}

const Utilities = () => {
	return (
		<Stack>
			{Object.entries(THEME_CONFIG).map(([utilityName, value]) => (
				<Stack key={utilityName}>
					<Anchor id={utilityName} href={`#${kebabCase(utilityName)}`}>
						<Title order={2}>{kebabCase(utilityName)}</Title>
					</Anchor>
					<UtilitiesTable utilities={Object.entries(value)} />
				</Stack>
			))}
		</Stack>
	)
}

export default Utilities
