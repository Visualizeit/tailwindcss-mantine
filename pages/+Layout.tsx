import { MantineProvider } from '@mantine/core'
import { ShikiProvider } from '@mantinex/shiki'
import { type PropsWithChildren } from 'react'
import mantineTheme from '../helpers/mantineTheme'

import '@mantine/core/styles.css'
import '@mantinex/shiki/styles.css'
import './index.css'

const loadShiki = async () => {
	const { createHighlighter } = await import('shiki')

	return createHighlighter({
		themes: [],
		langs: ['bash', 'javascript'],
	})
}

export const Layout = ({ children }: PropsWithChildren<{}>) => {
	return (
		<MantineProvider defaultColorScheme="auto" theme={mantineTheme}>
			{/* @ts-expect-error */}
			<ShikiProvider loadShiki={loadShiki}>{children}</ShikiProvider>
		</MantineProvider>
	)
}
