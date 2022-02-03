import * as Sentry from '@sentry/nextjs'
import { getRuntimeConfig } from '@lib/utils/runtimeConfig'

const { SENTRY_DSN } = getRuntimeConfig()

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
  })
}
