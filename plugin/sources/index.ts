import { Plugin } from '@yarnpkg/core'
import { DevCommand } from './Command/Dev'
import { InstallSharedCommand } from './Command/InstallShared'
import { WorkspacesNewCommand } from './Command/WorkspacesNew'

const plugin: Plugin = {
  commands: [WorkspacesNewCommand, InstallSharedCommand, DevCommand],
}

export default plugin
