import { Anchor, Stack, Title } from '@mantine/core'
import { kebabCase } from 'scule'
import { type ThemeConfig } from 'tailwindcss/types/config'
import UtilitiesTable from './UtilitiesTable'
import utilityClassMap from '@/helpers/utilityClassMap'

interface UtilitiesProps {
	themeConfig: ThemeConfig
}

const Utilities = ({ themeConfig }: UtilitiesProps) => {
	return (
		<Stack>
			{Object.entries(themeConfig).map(([utilityName, value]) => {
				const prefix = utilityClassMap[utilityName] ?? utilityName

				return (
					<Stack key={utilityName}>
						<Anchor
							id={kebabCase(utilityName)}
							className="scroll-mt-16"
							href={`#${kebabCase(utilityName)}`}
						>
							<Title order={2}>{kebabCase(utilityName)}</Title>
						</Anchor>
						<UtilitiesTable
							classPrefix={prefix}
							utilities={Object.entries(value)}
						/>
					</Stack>
				)
			})}
		</Stack>
	)
}

export default Utilities
