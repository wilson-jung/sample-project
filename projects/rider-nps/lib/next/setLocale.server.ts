import { GetServerSidePropsContext, NextPageContext } from 'next'
import { EnhancedStore } from '@reduxjs/toolkit'
import { localeSliceActions } from '@lib/store/locale/locale.slice'
import isUndefined from 'lodash/isUndefined'

interface SetLocaleProps {
  context: NextPageContext | GetServerSidePropsContext
  store: EnhancedStore
}

export function setLocale({ context, store }: SetLocaleProps) {
  if (isUndefined(context.locale)) return

  const { locale } = context

  store.dispatch(localeSliceActions.setLocale(locale ?? 'en'))
}
