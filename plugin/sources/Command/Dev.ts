import { Option } from 'clipanion'
import { execute } from '@yarnpkg/shell'
import { TadaCommands } from './TadaCommands'

export class DevCommand extends TadaCommands {
  private project = Option.String(`-p,--project`)

  static paths = [[`dev`]]

  async execute() {
    const projects = await this.getNamesByScope('tada')

    if (!projects.includes(this.project)) {
      this.context.stderr.write(`🚨 다음 중 하나를 선택해주세요.\r\n${projects.join('\r\n')}\r\n`)
      return 1
    }

    await execute(`yarn workspace @tada/${this.project} run dev`)
    return 0
  }
}
