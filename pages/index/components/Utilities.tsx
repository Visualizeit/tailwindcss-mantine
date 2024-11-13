import { Stack } from '@mantine/core'
import { kebabCase } from 'scule'
import { type ThemeConfig } from 'tailwindcss/types/config'
import AnchorTitle from './AnchorTitle'
import UtilitiesTable from './UtilitiesTable'
import utilityClassMap from '@/helpers/utilityClassMap'

interface UtilitiesProps {
	themeConfig: ThemeConfig
}

const Utilities = ({ themeConfig }: UtilitiesProps) => {
	return (
		<Stack component="section">
			<AnchorTitle id="utilities">Utilities</AnchorTitle>
			<Stack>
				{Object.entries(themeConfig).map(([utilityName, value]) => {
					const prefix = utilityClassMap[utilityName] ?? utilityName

					return (
						<Stack key={utilityName}>
							<AnchorTitle id={kebabCase(utilityName)} order={3}>
								{kebabCase(utilityName)}
							</AnchorTitle>
							<UtilitiesTable
								classPrefix={prefix}
								utilities={Object.entries(value)}
							/>
						</Stack>
					)
				})}
			</Stack>
		</Stack>
	)
}

export default Utilities
