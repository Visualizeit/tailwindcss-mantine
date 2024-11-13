import { createTheme, type MantineThemeOverride } from '@mantine/core'

const mantineTheme: MantineThemeOverride = createTheme({
	defaultRadius: 'md',
	activeClassName: 'active:brightness-90',
})

export default mantineTheme
