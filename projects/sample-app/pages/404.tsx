import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { pageConfig } from '@lib/router/config'

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    router.replace(pageConfig.main.props.build())
  })

  return null
}
