import { createContainer } from 'unstated-next'
import { getRuntimeConfig } from '@lib/utils/runtimeConfig'
import { useMain } from '@pagesImpl/main/__hooks__/useMain'

export const PageContainer = createContainer(useContainer)
export const MockContainer = createContainer(useMockContainer)

function useContainer() {
  return { ...useMain() }
}

function useMockContainer() {
  return {
    ...useContainer(),
  }
}

export function usePageContainer() {
  return (getRuntimeConfig().USE_MOCK ? MockContainer : PageContainer).useContainer()
}
