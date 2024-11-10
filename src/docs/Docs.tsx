import { AppShell, Container, Stack } from '@mantine/core'
import Utilities from './Utilities'

const Docs = () => {
	return (
		<AppShell header={{ height: 56 }} padding="xl">
			<AppShell.Header />
			<AppShell.Main>
				<Container>
					<Stack gap="xl">
						<Utilities />
					</Stack>
				</Container>
			</AppShell.Main>
		</AppShell>
	)
}

export default Docs
