import { defineConfig } from 'tsup'

export default defineConfig({
	entryPoints: ['src/plugin/index.ts'],
	format: 'esm',
	dts: true,
	clean: true,
})
