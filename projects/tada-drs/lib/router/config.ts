export interface IPageConfig {
  build: (...args: Array<string>) => string
  pattern: string
  title?: string
}

export class PageConfigItem {
  constructor(public props: IPageConfig) {}
}

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
