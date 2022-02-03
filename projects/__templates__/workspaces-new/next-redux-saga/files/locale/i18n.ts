import { tadaI18nInit } from '@tada-shared/util-i18n'
import i18n from 'i18next'
import en from './locales/en/translation.json'
import ko from './locales/ko/translation.json'

let currentLang: string | undefined

const options = {
  resources: {
    en: { translation: en },
    ko: { translation: ko },
  },
  fallbackLng: 'ko',
  ns: ['translation'],
  defaultNS: 'translation',
  debug: process.env.NODE_ENV !== 'production',
  react: {
    useSuspense: true,
  },
}

export function i18nChangeLanguage(lng: string) {
  if (currentLang !== lng) {
    currentLang = lng
    return i18n.changeLanguage(lng)
  }
  return Promise.resolve(undefined)
}

export const initLocale = () => {
  if (!i18n.isInitialized) {
    i18n.init(options)
  }
  tadaI18nInit()
}

export default i18n
