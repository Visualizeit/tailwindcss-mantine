import { type Config } from 'vike/types'
import vikeReact from 'vike-react/config'

const config: Config = {
	extends: vikeReact,
	title: 'tailwindcss-mantine',
	favicon: '/favicon.png',
	description: `A plugin that integrates Mantine's theme variables into Tailwind CSS.`,
}

export default config
