import { createContainer } from 'unstated-next'
import { getRuntimeConfig } from '@lib/utils/runtimeConfig'

export const PageContainer = createContainer(useContainer)
export const MockContainer = createContainer(useMockContainer)

function useContainer() {
  return {}
}

function useMockContainer() {
  return {
    ...useContainer(),
  }
}

export function usePageContainer() {
  return (getRuntimeConfig().USE_MOCK ? MockContainer : PageContainer).useContainer()
}
