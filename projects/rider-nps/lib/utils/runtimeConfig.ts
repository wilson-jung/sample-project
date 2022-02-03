import getConfig from 'next/config'

interface RuntimeConfig {
  HOST: string
  PRODUCTION: string
  USE_MOCK: boolean
  IS_TEST_ENV: string
  USE_PROXY: string
  SENTRY_DSN?: string
}

export function getRuntimeConfig(): RuntimeConfig {
  const runtimeConfig = getConfig()?.publicRuntimeConfig
  if (runtimeConfig) {
    return runtimeConfig
  }
  // runtimeConfig for storybook, etc.
  return {
    HOST: 'https://rider-nps.test.tadatada.com',
    PRODUCTION: 'false',
    IS_TEST_ENV: 'true',
    USE_MOCK: true,
    USE_PROXY: 'false',
  }
}
