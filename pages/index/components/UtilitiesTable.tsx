import { Table, Code, HoverCard, ColorSwatch, Group } from '@mantine/core'

interface UtilitiesTableProps {
	classPrefix: string
	utilities: [className: string, properties: string | [string, object]][]
}

const UtilitiesTable = ({ classPrefix, utilities }: UtilitiesTableProps) => {
	return (
		<Table stickyHeader stickyHeaderOffset={56}>
			<Table.Thead>
				<Table.Tr>
					<Table.Th>Class</Table.Th>
					<Table.Th>Properties</Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>
				{utilities.map(([className, properties]) => {
					const property = (
						Array.isArray(properties) ? properties[0] : properties
					)
						.replace('var(', '')
						.replace(')', '')

					const propertyValue =
						typeof window === 'undefined'
							? null
							: window
									.getComputedStyle(document.documentElement)
									.getPropertyValue(property)

					return (
						<Table.Tr key={className}>
							<Table.Td>
								<Code unstyled>
									{classPrefix ? `${classPrefix}-${className}` : className}
								</Code>
							</Table.Td>
							<Table.Td>
								<HoverCard position="right">
									<HoverCard.Target>
										<Code unstyled>{property}</Code>
									</HoverCard.Target>
									<HoverCard.Dropdown>
										{propertyValue && (
											<Group className="max-w-72" align="center">
												<Code unstyled>{propertyValue}</Code>
												{property.includes('color') && (
													<ColorSwatch size={20} color={propertyValue} />
												)}
											</Group>
										)}
									</HoverCard.Dropdown>
								</HoverCard>
							</Table.Td>
						</Table.Tr>
					)
				})}
			</Table.Tbody>
		</Table>
	)
}

export default UtilitiesTable
