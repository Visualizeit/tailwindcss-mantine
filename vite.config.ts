import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import mantinePlugin from './plugin'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [tsconfigPaths(), react(), vike({ prerender: true })],
	server: {
		open: true,
	},
	define: {
		THEME_CONFIG: JSON.stringify(mantinePlugin({}).config?.theme?.extend),
	},
})
