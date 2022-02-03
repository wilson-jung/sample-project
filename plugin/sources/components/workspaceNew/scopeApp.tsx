import React from 'react'
import { useMinistore } from '@yarnpkg/libui/sources/hooks/useMinistore'
import { SubmitInjectedComponent } from '@yarnpkg/libui/sources/misc/renderForm'
import { Box } from 'ink'

import { Header } from '../common/Header'
import { Select } from '../common/Select'
import { MINISTORE_DEFAULT } from '../constant'

type Props = {
  scopes: string[]
  storeKey?: string
}

export const ScopeApp: SubmitInjectedComponent<Map<string, string | null>, React.ComponentType<Props>> = ({
  useSubmit,
  storeKey = MINISTORE_DEFAULT,
  scopes,
}) => {
  useSubmit(useMinistore())

  return (
    <Box flexDirection="column">
      <Header step={1}>패키지 범위를 선택해주세요.</Header>
      <Select storeKey={storeKey} values={scopes} />
    </Box>
  )
}
