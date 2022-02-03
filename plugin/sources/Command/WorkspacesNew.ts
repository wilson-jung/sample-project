/* eslint-disable no-await-in-loop */
import fg from 'fast-glob'
import ejs from 'ejs'
import fse from 'fs-extra'
import camelCase from 'lodash/camelCase'
import toUpper from 'lodash/toUpper'
import { renderForm } from '@yarnpkg/libui/sources/misc/renderForm'
import { execute } from '@yarnpkg/shell'

import { ScopeApp } from '../components/workspaceNew/scopeApp'
import { PrefixApp } from '../components/workspaceNew/prefixApp'
import { NameApp } from '../components/workspaceNew/nameApp'
import { TemplateApp } from '../components/workspaceNew/templateApp'
import { PluginApp } from '../components/workspaceNew/pluginApp'

import { TadaCommands } from './TadaCommands'
import { MINISTORE_DEFAULT, MINISTORE_PLUGIN } from '../components/constant'

type PluginOption = {
  key: string
  description: string
}

type Metadata = {
  description: string
  value: string
}

export class WorkspacesNewCommand extends TadaCommands {
  static paths = [[`workspaces`, `new`]]

  async execute() {
    // Step 1 : Scope 설정
    const scopes = await this.getScopes()
    const scopeRequests = await renderForm(ScopeApp, { scopes })
    if (typeof scopeRequests === `undefined`) return 1
    this.scope = scopeRequests.get(MINISTORE_DEFAULT)
    this.directory = await this.getDirectoryByScope(this.scope)

    // Step 2 : 프로젝트 Prefix 설정
    const prefixes = await this.getPrefixesByScope(this.scope)
    const prefixRequests = await renderForm(PrefixApp, { scope: this.scope, prefixes })
    if (typeof prefixRequests === `undefined`) return 1
    this.prefix = prefixRequests.get(MINISTORE_DEFAULT)

    // Step 3 : 프로젝트 이름 설정
    let exitSetName = true
    while (exitSetName) {
      const nameRequests = await renderForm(NameApp, {})
      if (typeof nameRequests === `undefined`) return 1
      this.name = nameRequests.get(MINISTORE_DEFAULT)

      exitSetName = await this.hasPackageName(this.scope, this.prefix, this.name)

      if (exitSetName) this.context.stdout.write(`🚨 이미 존재하는 패키지입니다. 다른 이름으로 시도해주세요.\r\n`)

      if (!this.name) {
        this.context.stdout.write(`🚨 패키지명이 비어있습니다.\r\n`)
        exitSetName = true
      }
    }

    // Step 4 : 템플릿 설정
    const templateList = await this.getTemplateList()
    const templateRequests = await renderForm(TemplateApp, { templateList })
    if (typeof templateRequests === `undefined`) return 1
    this.template = templateRequests.get(MINISTORE_DEFAULT)

    try {
      /*
       * TODO(hex):
       * Dockerfile, Deploy Script
       */
      const options = await this.getTemplateOptions()

      // (Optional) Step 5: Plugin 선택
      // eslint-disable-next-line no-restricted-syntax
      for (const option of options) {
        const storeKey = `${MINISTORE_PLUGIN}-${option.key}`
        const metadatas = await this.getPluginsMetadataByKey(option.key)
        const pluginRequest = await renderForm(PluginApp, { storeKey, description: option.description, metadatas })
        if (typeof pluginRequest === `undefined`) return 1
        this.pluginMap.set(option.key, pluginRequest.get(storeKey))
      }
    } catch (err) {
      this.context.stderr.write(String(err))
    }

    this.spinner.start('Loading...')
    await this.scaffoldAppTypeTemplate()
    await this.scaffolding()
    await execute('yarn install')
    this.spinner.stop()

    return 0
  }

  private scope: string

  private directory: string

  private prefix: string

  private name: string

  private template: string

  private pluginMap = new Map<string, string>()

  private async getTemplateList() {
    const globResult = await fg(`${this.directory}/__templates__/workspaces-new/*`, { onlyDirectories: true })
    return globResult.map(name => name.split(`${this.directory}/__templates__/workspaces-new/`)[1])
  }

  private async scaffoldAppTypeTemplate() {
    const globResult = await fg(
      `${this.directory}/__templates__/workspaces-new/${this.template}/AppType/${this.prefix}/files/**/*`,
      { dot: true }
    )

    const packageName = `${this.prefix}-${this.name}`

    return Promise.all([
      ...globResult.map(async path => {
        const renderedFile = await ejs.renderFile(path, {
          name: this.name,
          camelCaseName: camelCase(this.name),
          pascalCaseName: camelCase(this.name).replace(/^(.)/, toUpper),
          prefix: this.prefix,
          packageName,
        })

        fse.outputFile(`${this.directory}/${packageName}/${path.split(`/files/`)[1]}`, renderedFile, err => {
          if (err !== null) {
            console.error(err)
            process.exit(1)
          }
        })
      }),
    ])
  }

  private async getTemplateOptions(): Promise<PluginOption[]> {
    return fse.readJsonSync(`${this.directory}/__templates__/workspaces-new/${this.template}/plugins/option.json`)
  }

  private async getPluginsMetadataByKey(key: string) {
    const pluginsCwd = await fg(
      `${this.directory}/__templates__/workspaces-new/${this.template}/plugins/${key}/**/metadata.json`
    )
    return pluginsCwd.map(cwd => fse.readJsonSync(cwd) as Metadata)
  }

  private async scaffolding() {
    const globResult = await fg(`${this.directory}/__templates__/workspaces-new/${this.template}/files/**/*`, {
      dot: true,
    })
    const pluginFiles = (
      await Promise.all(
        [...this.pluginMap].map(async ([key, value]) =>
          fg(`${this.directory}/__templates__/workspaces-new/${this.template}/plugins/${key}/${value}/files/**/*`, {
            dot: true,
          })
        )
      )
    ).flatMap(plugin => plugin)

    const packageName = `${this.prefix}-${this.name}`

    return Promise.all([
      ...globResult.map(async path => {
        const renderedFile = await ejs.renderFile(path, {
          name: this.name,
          prefix: this.prefix,
          packageName,
        })

        fse.outputFile(`${this.directory}/${packageName}/${path.split(`/files/`)[1]}`, renderedFile, err => {
          if (err !== null) {
            console.error(err)
            process.exit(1)
          }
        })
      }),
      ...pluginFiles.map(async path => {
        const renderedFile = await ejs.renderFile(path, {
          name: this.name,
          prefix: this.prefix,
          packageName,
        })

        fse.outputFile(`${this.directory}/${packageName}/${path.split(`/files/`)[1]}`, renderedFile, err => {
          if (err !== null) {
            console.error(err)
            process.exit(1)
          }
        })
      }),
    ])
  }

  private async scaffoldBuild() {
    const globResult = await fg(
      `${this.directory}/__templates__/workspaces-new/${this.template}/AppType/${this.prefix}/files/**/*`,
      { dot: true }
    )

    const packageName = `${this.prefix}-${this.name}`

    return Promise.all([
      ...globResult.map(async path => {
        const renderedFile = await ejs.renderFile(path, {
          name: this.name,
          camelCaseName: camelCase(this.name),
          pascalCaseName: camelCase(this.name).replace(/^(.)/, toUpper),
          prefix: this.prefix,
          packageName,
        })

        fse.outputFile(`${this.directory}/${packageName}/${path.split(`/files/`)[1]}`, renderedFile, err => {
          if (err !== null) {
            console.error(err)
            process.exit(1)
          }
        })
      }),
    ])
  }
}
