import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="dns-prefetch" href="https://static.tadatada.com" />
          <link rel="preconnect" href="https://static.tadatada.com" />

          <link
            href="https://static.tadatada.com/resources/fonts/SpoqaHanSansRegular.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            href="https://static.tadatada.com/resources/fonts/SpoqaHanSansBold.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link rel="icon" href="/ic_favicon_tada.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
