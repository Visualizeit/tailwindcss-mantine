import { Code, Table } from '@mantine/core'

interface UtilitiesTableProps {
	utilities: [className: string, properties: string][]
}

const UtilitiesTable = ({ utilities }: UtilitiesTableProps) => {
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
							<Code unstyled>{className}</Code>
						</Table.Td>
						<Table.Td>
							<Code unstyled>{properties}</Code>
						</Table.Td>
					</Table.Tr>
				))}
			</Table.Tbody>
		</Table>
	)
}

export default UtilitiesTable
