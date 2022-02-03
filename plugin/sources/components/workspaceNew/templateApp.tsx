import React from 'react'
import { useMinistore } from '@yarnpkg/libui/sources/hooks/useMinistore'
import { SubmitInjectedComponent } from '@yarnpkg/libui/sources/misc/renderForm'
import { Box } from 'ink'

import { Header } from '../common/Header'
import { Select } from '../common/Select'
import { MINISTORE_DEFAULT } from '../constant'

type Props = {
  storeKey?: string
  templateList: string[]
}

export const TemplateApp: SubmitInjectedComponent<Map<string, string | null>, React.ComponentType<Props>> = ({
  useSubmit,
  storeKey = MINISTORE_DEFAULT,
  templateList,
}) => {
  useSubmit(useMinistore())

  return (
    <Box flexDirection="column">
      <Header step={4}>사용할 템플릿을 선택해주세요.</Header>
      <Select storeKey={storeKey} values={templateList} />
    </Box>
  )
}
