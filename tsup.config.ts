import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/plugin/index.ts'],
	format: 'esm',
	dts: true,
	clean: true,
})
