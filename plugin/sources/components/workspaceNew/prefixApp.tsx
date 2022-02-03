import React from 'react'
import { useMinistore } from '@yarnpkg/libui/sources/hooks/useMinistore'
import { SubmitInjectedComponent } from '@yarnpkg/libui/sources/misc/renderForm'
import { Box } from 'ink'

import { Header } from '../common/Header'
import { Select } from '../common/Select'
import { MINISTORE_DEFAULT } from '../constant'

type Props = {
  scope: string
  storeKey?: string
  prefixes: string[]
}

export const PrefixApp: SubmitInjectedComponent<Map<string, string | null>, React.ComponentType<Props>> = ({
  useSubmit,
  scope,
  storeKey = MINISTORE_DEFAULT,
  prefixes,
}) => {
  useSubmit(useMinistore())

  return (
    <Box flexDirection="column">
      <Header step={2}>{scope}의 prefix를 선택해주세요.</Header>
      <Select storeKey={storeKey} values={prefixes} />
    </Box>
  )
}
