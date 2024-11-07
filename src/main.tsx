import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import mantineTheme from './configs/mantineTheme'

import '@mantine/core/styles.css'
import './index.css'

const container = document.getElementById('root')

if (container) {
	ReactDOM.createRoot(container).render(
		<React.StrictMode>
			<MantineProvider theme={mantineTheme}>
				<h1>Hello World</h1>
			</MantineProvider>
		</React.StrictMode>,
	)
}
