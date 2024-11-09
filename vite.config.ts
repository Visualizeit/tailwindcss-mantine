import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import mantinePlugin from './src/plugin'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [tsconfigPaths(), react()],
	server: {
		open: true,
	},
	define: {
		THEME_CONFIG: JSON.stringify(mantinePlugin({}).config?.theme?.extend),
	},
})
