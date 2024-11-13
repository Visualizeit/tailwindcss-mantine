import { type Config } from 'tailwindcss'
import getSafelist from './helpers/getSafelist'
import mantineTheme from './helpers/mantineTheme'
import mantinePlugin from './plugin'

const config: Config = {
	content: ['./index.html', './pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [mantinePlugin({ themeOverride: mantineTheme })],
	safelist: getSafelist(),
}

export default config
