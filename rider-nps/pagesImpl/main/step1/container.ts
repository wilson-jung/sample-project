import { createContainer } from 'unstated-next'
import { getRuntimeConfig } from '@lib/utils/runtimeConfig'
import { useSetTopTextPosition } from '@pagesImpl/main/step1/__hooks__/useSetTopTextPosition'

export const PageContainer = createContainer(useContainer)
export const MockContainer = createContainer(useMockContainer)

function useContainer() {
  return { ...useSetTopTextPosition() }
}

function useMockContainer() {
  return {
    ...useContainer(),
  }
}

export function usePageContainer() {
  return (getRuntimeConfig().USE_MOCK ? MockContainer : PageContainer).useContainer()
}
