import { MantineProvider } from '@mantine/core'
import { type PropsWithChildren } from 'react'
import mantineTheme from '../helpers/mantineTheme'

import '@mantine/core/styles.css'
import '@mantine/code-highlight/styles.css'
import './index.css'

export const Layout = ({ children }: PropsWithChildren<{}>) => {
	return (
		<MantineProvider defaultColorScheme="auto" theme={mantineTheme}>
			{children}
		</MantineProvider>
	)
}
