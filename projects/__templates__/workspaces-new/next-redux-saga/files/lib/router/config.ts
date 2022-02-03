import { PAGE_LOG_PLATFORM, PageConfigItem } from '@tada-shared/common'

export const pageConfig = {
  main: new PageConfigItem({ build: () => '/main', pattern: '/main', logPlatform: [PAGE_LOG_PLATFORM.FIREBASE] }),
}
