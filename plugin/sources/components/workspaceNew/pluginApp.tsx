import React from 'react'
import { useMinistore } from '@yarnpkg/libui/sources/hooks/useMinistore'
import { SubmitInjectedComponent } from '@yarnpkg/libui/sources/misc/renderForm'
import { Box } from 'ink'

import { Header } from '../common/Header'
import { Select } from '../common/Select'
import { MINISTORE_DEFAULT } from '../constant'

type Metadata = {
  value: string
  description: string
}

type Props = {
  description: string
  metadatas: Metadata[]
  storeKey?: string
}

export const PluginApp: SubmitInjectedComponent<Map<string, string | null>, React.ComponentType<Props>> = ({
  useSubmit,
  metadatas,
  description,
  storeKey = MINISTORE_DEFAULT,
}) => {
  useSubmit(useMinistore())
  const values = metadatas.map(metadata => metadata.value)
  const descriptions = metadatas.map(metadata => metadata.description)

  return (
    <Box flexDirection="column">
      <Header>{description}</Header>
      <Select values={values} descriptions={descriptions} storeKey={storeKey} />
    </Box>
  )
}
