import { Group, Image, Stack, Text, Title } from '@mantine/core'
import AnchorTitle from './AnchorTitle'

const About = () => {
	return (
		<Stack component="section">
			<AnchorTitle id="about">About</AnchorTitle>
			<Group>
				<Image
					src="/logo.png"
					alt="tailwindcss-mantine logo"
					className="inline size-10"
				/>
				<Title order={2}>tailwindcss-mantine</Title>
			</Group>
			<Text>
				tailwindcss-mantine is a plugin that integrates Mantine's theme
				variables into Tailwind CSS, enabling you to use Mantine's design system
				with Tailwind's utility-first classes.
			</Text>
		</Stack>
	)
}

export default About
