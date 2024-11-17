import getThemeConfig from './getThemeConfig'
import utilityClassMap from './utilityClassMap'

const getSafelist = () => {
	const themeConfig = getThemeConfig()

	const safelist = Object.entries(themeConfig).flatMap(
		([utilityName, value]) => {
			const template = utilityClassMap[utilityName] ?? utilityName

			const utilities = Object.entries(value)

			return utilities.map(([className]) =>
				template ? template.replace('%s', className) : className,
			)
		},
	)

	return safelist
}

export default getSafelist
