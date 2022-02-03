import { Command } from 'clipanion'
import { CommandContext, Configuration, Project, structUtils } from '@yarnpkg/core'
import ora from 'ora'
import dedupe from '../utils/dedupe'

export abstract class TadaCommands extends Command<CommandContext> {
  public spinner = ora()

  async getScopes() {
    const workspaces = await this.workspaces()
    const scopes = workspaces.map(workspace => workspace.manifest.name.scope).filter(scope => Boolean(scope))

    return dedupe(scopes)
  }

  async getDirectoryByScope(scope: string) {
    const workspaces = await this.workspaces()

    const workspacesByScope = workspaces.filter(workspace => workspace.manifest.name.scope === scope)
    const workspacesDirectories = workspacesByScope.map(workspace => workspace.relativeCwd.split('/')[0])

    const dedupedDir = dedupe(workspacesDirectories)
    if (dedupedDir.length !== 1) throw Error(`getDirectoryByScope(scope: ${scope}): scope 디렉터리를 확인해주세요.`)

    return dedupedDir[0]
  }

  async getPrefixesByScope(scope: string) {
    const names = await this.getNamesByScope(scope)
    return dedupe(names.filter(name => name.includes('-')).map(name => name.split('-')[0]))
  }

  async getNamesByScope(scope: string) {
    const workspaces = await this.workspaces()
    return workspaces
      .map(workspace => workspace.manifest.name)
      .filter(ident => ident.scope === scope)
      .map(ident => ident.name)
  }

  async hasPackageName(scope: string, prefix: string, name: string) {
    const workspaces = await this.workspaces()
    return workspaces
      .map(workspace => structUtils.stringifyIdent(workspace.manifest.name))
      .includes(`${scope}/${prefix}-${name}`)
  }

  async getProjectDependencies(project: string) {
    const workspaces = await this.workspaces()

    return workspaces
      .filter(workspace => workspace.manifest.name.name === project)
      .map(workspace => [...workspace.manifest.dependencies.values()])[0]
  }

  private async workspaces() {
    const configuration = await Configuration.find(this.context.cwd, this.context.plugins)
    const { project } = await Project.find(configuration, this.context.cwd)
    return project.workspaces
  }
}
