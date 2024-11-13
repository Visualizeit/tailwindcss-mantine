import { AppShell, Container, Divider, Stack } from '@mantine/core'
import { useData } from 'vike-react/useData'
import { type Data } from './+data'
import Installation from './components/Installation'
import Utilities from './components/Utilities'

export const Page = () => {
	const themeConfig = useData<Data>()

	return (
		<AppShell header={{ height: 56 }} padding="xl">
			<AppShell.Header />
			<AppShell.Main>
				<Container>
					<Stack gap="xl">
						<Installation />
						<Divider />
						<Utilities themeConfig={themeConfig} />
					</Stack>
				</Container>
			</AppShell.Main>
		</AppShell>
	)
}
