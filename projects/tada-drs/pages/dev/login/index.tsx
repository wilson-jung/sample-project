import React from 'react'
import { Login } from '@features/auth/__components__/Login'
import { getRuntimeConfig } from '@lib/utils/runtimeConfig'
import { PageView } from '@features/layout/__components__/PageView'
import { Counter } from '@features/counter/__components__/Counter'

const { PRODUCTION } = getRuntimeConfig()

export default function () {
  return (
    <PageView>
      <Login />
      <Counter />
    </PageView>
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
