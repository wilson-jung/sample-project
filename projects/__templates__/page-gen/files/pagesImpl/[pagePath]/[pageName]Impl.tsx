import { useMemo } from 'react'
import { useLogPageView, PAGE_LOG_PLATFORM } from '@tada-shared/hooks'
import { <%= camelCaseName %>NativeLog } from '@lib/native/NativeService'

export default function <%= pageComponent %>Impl() {
  const logConfig = useMemo(
    () => [
      {
        type: PAGE_LOG_PLATFORM.FIREBASE,
        getParams: () => ({}),
      },
    ],
    []
  )
  useLogPageView(logConfig, <%= camelCaseName %>NativeLog)

  return null
}
