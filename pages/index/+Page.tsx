import { AppShell, Container, Stack } from '@mantine/core'
import { useData } from 'vike-react/useData'
import { type Data } from './+data'
import Utilities from './components/Utilities'

export const Page = () => {
	const themeConfig = useData<Data>()

	return (
		<div>
			<AppShell header={{ height: 56 }} padding="xl">
				<AppShell.Header />
				<AppShell.Main>
					<Container>
						<Stack gap="xl">
							<Utilities themeConfig={themeConfig} />
						</Stack>
					</Container>
				</AppShell.Main>
			</AppShell>
		</div>
	)
}
