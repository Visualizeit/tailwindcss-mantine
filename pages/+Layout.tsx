import { MantineProvider } from '@mantine/core'
import { type PropsWithChildren } from 'react'
import mantineTheme from '../configs/mantineTheme'

import '@mantine/core/styles.css'
import './index.css'

export const Layout = ({ children }: PropsWithChildren<{}>) => {
	return <MantineProvider theme={mantineTheme}>{children}</MantineProvider>
}
