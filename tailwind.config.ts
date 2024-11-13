import { type Config } from 'tailwindcss'
import mantineTheme from './configs/mantineTheme'
import mantinePlugin from './plugin'

const config: Config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [mantinePlugin({ themeOverride: mantineTheme })],
}

export default config
