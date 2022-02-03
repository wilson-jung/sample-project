import { GetServerSidePropsContext, NextPageContext } from 'next'
import { EnhancedStore } from '@reduxjs/toolkit'
import { APP_USER_AGENT_KEY } from '@lib/constants'
import isUndefined from 'lodash/isUndefined'
import { appUserAgentActions } from '@lib/store/application/appUserAgent/appUserAgent.slice'
import { getRiderAppUserAgent, getValueFromCookie } from '@tada-shared/util-application'

interface SetAppUserAgentProps {
  context: NextPageContext | GetServerSidePropsContext
  store: EnhancedStore
}

export function setAppUserAgent({ context, store }: SetAppUserAgentProps) {
  if (isUndefined(context.req)) return

  const rawCookie = context.req?.headers?.cookie
  const appUserAgent = getValueFromCookie({ rawCookie, key: APP_USER_AGENT_KEY })

  store.dispatch(appUserAgentActions.set(getRiderAppUserAgent(appUserAgent)))
}
