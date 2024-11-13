import { Anchor, Title, type TitleProps } from '@mantine/core'
import { type PropsWithChildren } from 'react'

interface AnchorTitleProps {
	id: string
	order?: TitleProps['order']
}

const AnchorTitle = ({
	children,
	id,
	order,
}: PropsWithChildren<AnchorTitleProps>) => {
	return (
		<Anchor id={id} className="scroll-mt-16 text-m-text" href={'#' + id}>
			<Title order={order}>{children}</Title>
		</Anchor>
	)
}

export default AnchorTitle
