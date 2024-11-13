import getThemeConfig from '@/helpers/getThemeConfig'

export const data = () => getThemeConfig()

export type Data = ReturnType<typeof data>
