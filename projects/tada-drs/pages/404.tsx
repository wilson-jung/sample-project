import { useRouter } from 'next/router'
import { pageConfig } from '@lib/router/config'
import { useEffectOnce } from 'react-use'

export default function Custom404() {
  const router = useRouter()

  useEffectOnce(() => {
    router.replace(pageConfig.main.props.build())
  })

  return null
}
