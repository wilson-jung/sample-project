import { Option } from 'clipanion'
import { execute } from '@yarnpkg/shell'
import { TadaCommands } from './TadaCommands'

export class InstallSharedCommand extends TadaCommands {
  private project = Option.String(`-p,--project`)

  private name = Option.String(`-n,--name`)

  static paths = [[`i`]]

  async execute() {
    const projects = await this.getNamesByScope('dragonball-shared')

    if (!this.name) {
      return 1
    }

    if (!projects.includes(this.project)) {
      this.context.stderr.write(`🚨 다음 중 하나를 선택해주세요.\r\n${projects.join('\r\n')}\r\n`)
      return 1
    }

    await execute(
      `yarn workspace @dragonball-shared/${this.project} add -D ${this.name} && yarn workspace @dragonball-shared/${this.project} add -P ${this.name}`
    )
    return 0
  }
}
