import { Option } from 'clipanion'
import { execute } from '@yarnpkg/shell'
import { TadaCommands } from './TadaCommands'

export class DevCommand extends TadaCommands {
  private project = Option.String(`-p,--project`)

  static paths = [[`dev`]]

  async execute() {
    const projects = await this.getNamesByScope('dragonball')

    if (!projects.includes(this.project)) {
      this.context.stderr.write(`π¨ λ€μ μ€ νλλ₯Ό μ νν΄μ£ΌμΈμ.\r\n${projects.join('\r\n')}\r\n`)
      return 1
    }

    await execute(`yarn workspace @dragonball/${this.project} run dev`)
    return 0
  }
}
