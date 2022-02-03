import { PageConfigItem } from '@tada-shared/common'

export const pageConfig = {
  mainStep1: new PageConfigItem({
    build: () => '/main/step1',
    pattern: '/main/step1',
  }),
  mainStep2: new PageConfigItem({
    build: () => '/main/step2',
    pattern: '/main/step2',
  }),
  confirm: new PageConfigItem({
    build: () => '/main/confirm',
    pattern: '/main/confirm',
  }),
}
