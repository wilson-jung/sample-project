import '@lib/polyfill'
import { wrapper } from '../store/store'

function MyApp({ Component, pageProps }: any) {
  return <AppShell Component={Component} pageProps={pageProps} />
}

function AppShell({ Component, pageProps }: any) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp)
