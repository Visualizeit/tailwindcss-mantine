import getThemeConfig from './getThemeConfig'
import utilityClassMap from './utilityClassMap'

const getSafelist = () => {
	const themeConfig = getThemeConfig()

	return Object.entries(themeConfig).flatMap(([utilityName, value]) => {
		const prefix = utilityClassMap[utilityName] ?? utilityName

		const utilities = Object.entries(value)

		return utilities.map(([className]) =>
			prefix ? `${prefix}-${className}` : className,
		)
	})
}

export default getSafelist
