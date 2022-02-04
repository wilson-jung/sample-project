import React from 'react'
import { Login } from '@features/auth/__components__/Login'
import { getRuntimeConfig } from '@lib/utils/runtimeConfig'

const { PRODUCTION } = getRuntimeConfig()

export default function () {
  return <Login />
}

export function getStaticProps() {
  if (PRODUCTION !== 'false') {
    return {
      notFound: true,
    }
  }
  return { props: {} }
}
