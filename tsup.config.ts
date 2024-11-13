import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['plugin/index.ts'],
	format: 'esm',
	dts: true,
	clean: true,
})
