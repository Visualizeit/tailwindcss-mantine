import { type Config } from 'vike/types'
import vikeReact from 'vike-react/config'

const config: Config = {
	extends: vikeReact,
	ssr: false,
	title: 'tailwindcss-mantine',
	favicon: '/vite.svg',
}

export default config
