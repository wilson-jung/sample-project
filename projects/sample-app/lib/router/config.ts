import { PageConfigItem } from '@dragonball-shared/common'

export const pageConfig = {
  login: new PageConfigItem({
    build: () => '/dev/login',
    pattern: '/dev/login',
  }),
  main: new PageConfigItem({
    build: () => '/main',
    pattern: '/main',
  }),
}
