import getConfig from 'next/config'

interface RuntimeConfig {
  HOST: string
  PRODUCTION: string
  USE_MOCK: boolean
  IS_TEST_ENV: string
  SENTRY_DSN?: string
}

export function getRuntimeConfig(): RuntimeConfig {
  const runtimeConfig = getConfig()?.publicRuntimeConfig
  if (runtimeConfig) {
    return runtimeConfig
  }
  // runtimeConfig for storybook, etc.
  return {
    HOST: 'https://dragonball.tadatada.com',
    PRODUCTION: 'false',
    IS_TEST_ENV: 'true',
    USE_MOCK: true,
  }
}
