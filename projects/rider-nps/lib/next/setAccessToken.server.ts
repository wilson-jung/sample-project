import { GetServerSidePropsContext, NextPageContext } from 'next'
import { EnhancedStore } from '@reduxjs/toolkit'
import { ACCESS_TOKEN_KEY } from '@lib/constants'
import isUndefined from 'lodash/isUndefined'
import { getValueFromCookie } from '@tada-shared/util-application'
import { accessTokenActions } from '@lib/store/application/accessToken/accessToken.slice'

interface SetAccessTokenProps {
  context: NextPageContext | GetServerSidePropsContext
  store: EnhancedStore
}

export function setAccessToken({ context, store }: SetAccessTokenProps) {
  if (isUndefined(context.req)) return

  const rawCookie = context.req?.headers?.cookie
  const accessToken = getValueFromCookie({ rawCookie, key: ACCESS_TOKEN_KEY })

  if (isUndefined(accessToken)) {
    store.dispatch(accessTokenActions.clearAccessToken())
  } else {
    store.dispatch(accessTokenActions.setAccessToken(accessToken))
  }
}
