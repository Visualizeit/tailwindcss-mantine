import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['plugin/index.ts'],
	format: ['esm', 'cjs'],
	dts: true,
	clean: true,
})
