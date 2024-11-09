import { JsonInput } from '@mantine/core'
import { type ThemeConfig } from 'tailwindcss/types/config'

declare global {
	const THEME_CONFIG: ThemeConfig
}

const Docs = () => {
	return <JsonInput autosize value={JSON.stringify(THEME_CONFIG)} />
}

export default Docs
