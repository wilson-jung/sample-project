import '@lib/polyfill'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { I18nextProvider } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useEffectOnce } from 'react-use'
import { GlobalFont } from '@tada-shared/ui-common'
import { ResetStyle } from '@tada-shared/ui-rider'

import i18n, { initLocale } from '@locale/i18n'
import { wrapper } from '@lib/store/store'
import { localeSliceActions } from '@lib/store/locale/locale.slice'
import { setUpLanguage } from '@locale/setUpLanguage'

import { setLocale, setAccessToken, setAppUserAgent } from '@lib/next'
import { AppContext } from 'next/app'
import { npsNativeService } from '@lib/native/NativeService'
import { GlobalUi } from '@lib/ui/GlobalUi'

initLocale()

function MyApp({ Component, pageProps }: any) {
  return <AppShell Component={Component} pageProps={pageProps} />
}

function AppShell({ Component, pageProps }: any) {
  const { locale } = useRouter()
  const dispatch = useDispatch()

  useEffectOnce(() => {
    npsNativeService.setAppBarVisibility.call(false)
  })

  setUpLanguage(locale!)

  useEffect(() => {
    dispatch(localeSliceActions.setLocale(locale!))
  }, [dispatch, locale])

  return (
    <>
      <GlobalFont />
      <ResetStyle />
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
        <div id="portal" />
        <GlobalUi />
      </I18nextProvider>
    </>
  )
}

MyApp.getInitialProps = wrapper.getInitialAppProps(store => async ({ ctx: context }: AppContext) => {
  setLocale({ context, store })

  setAccessToken({ context, store })

  setAppUserAgent({ context, store })

  return { pageProps: {} }
})

export default wrapper.withRedux(MyApp)
