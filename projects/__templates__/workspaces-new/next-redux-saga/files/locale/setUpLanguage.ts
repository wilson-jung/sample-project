import { tadaI18nChangeLanguage } from '@tada-shared/util-i18n'
import { i18nChangeLanguage } from '@locale/i18n'

export function setUpLanguage(lng: string): Promise<any> {
  return Promise.all([i18nChangeLanguage(lng), tadaI18nChangeLanguage(lng)])
}
