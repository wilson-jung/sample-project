import React from 'react'
import { useMinistore } from '@yarnpkg/libui/sources/hooks/useMinistore'
import { SubmitInjectedComponent } from '@yarnpkg/libui/sources/misc/renderForm'
import { Box } from 'ink'

import { Header } from '../common/Header'
import { Input } from '../common/Input'
import { MINISTORE_DEFAULT } from '../constant'

type Props = {
  storeKey?: string
}

export const NameApp: SubmitInjectedComponent<Map<string, string | null>, React.ComponentType<Props>> = ({
  useSubmit,
  storeKey = MINISTORE_DEFAULT,
}) => {
  useSubmit(useMinistore())

  return (
    <Box flexDirection="column">
      <Header step={3}>생성할 패키지 이름을 입력해주세요.</Header>
      <Input storeKey={storeKey} />
    </Box>
  )
}
