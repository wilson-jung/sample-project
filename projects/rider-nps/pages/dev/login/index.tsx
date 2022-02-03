import React from 'react'
import { PageContainer } from '@pagesImpl/dev/login/container'
import LoginImpl from '@pagesImpl/dev/login/loginImpl'
import { getRuntimeConfig } from '@lib/utils/runtimeConfig'

const { PRODUCTION } = getRuntimeConfig()

export default function Login() {
  return (
    <PageContainer.Provider>
      <LoginImpl />
    </PageContainer.Provider>
  )
}

export function getStaticProps() {
  if (PRODUCTION !== 'false') {
    return {
      notFound: true,
    }
  }
  return { props: {} }
}
