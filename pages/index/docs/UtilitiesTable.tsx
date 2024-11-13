import { Code, Table } from '@mantine/core'

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
				{utilities.map(([className, properties]) => (
					<Table.Tr key={className}>
						<Table.Td>
							<Code unstyled>
								{classPrefix ? `${classPrefix}-${className}` : className}
							</Code>
						</Table.Td>
						<Table.Td>
							<Code unstyled>
								{Array.isArray(properties) ? properties[0] : properties}
							</Code>
						</Table.Td>
					</Table.Tr>
				))}
			</Table.Tbody>
		</Table>
	)
}

export default UtilitiesTable
