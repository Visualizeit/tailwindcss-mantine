import {
	ActionIcon,
	Anchor,
	AppShell,
	Container,
	Divider,
	Group,
	Stack,
	Title,
	Tooltip,
} from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons-react'
import { useData } from 'vike-react/useData'
import { type Data } from './+data'
import About from './components/About'
import Installation from './components/Installation'
import Utilities from './components/Utilities'

export const Page = () => {
	const themeConfig = useData<Data>()

	return (
		<AppShell header={{ height: 56 }} padding="sm">
			<AppShell.Header>
				<Group
					className="h-full"
					justify="space-between"
					align="center"
					px="md"
				>
					<Anchor className="text-m-text" href="/">
						<Title order={3}>tailwindcss-mantine</Title>
					</Anchor>
					<Tooltip label="GitHub repository">
						<Anchor
							href="https://github.com/Visualizeit/tailwindcss-mantine"
							target="_blank"
						>
							<ActionIcon variant="default" size="lg">
								<IconBrandGithub />
							</ActionIcon>
						</Anchor>
					</Tooltip>
				</Group>
			</AppShell.Header>
			<AppShell.Main>
				<Container>
					<Stack gap="xl">
						<About />
						<Divider />
						<Installation />
						<Divider />
						<Utilities themeConfig={themeConfig} />
					</Stack>
				</Container>
			</AppShell.Main>
		</AppShell>
	)
}
