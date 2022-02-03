import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/main/step1')
  })

  return null
}