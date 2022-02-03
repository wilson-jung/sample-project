import { ScrollableItems } from '@yarnpkg/libui/sources/components/ScrollableItems'
import { useMinistore } from '@yarnpkg/libui/sources/hooks/useMinistore'
import { Box, Text } from 'ink'
import React, { useEffect } from 'react'
import { Gem } from '@yarnpkg/libui/sources/components/Gem'

type ItemProps = {
  active: boolean
  value: string
  description: string
  storeKey: string
}

const Item = ({ active, value, description, storeKey }: ItemProps) => {
  const [_, setAction] = useMinistore<string | null>(storeKey, null)
  useEffect(() => {
    if (active) setAction(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, value])

  return (
    <Box>
      <Gem active={active} />
      <Text>{` ${description}`}</Text>
    </Box>
  )
}

type Props = {
  values: string[]
  descriptions?: string[]
  storeKey: string
}

export const Select = ({ values, descriptions, storeKey }: Props) => {
  return (
    <Box marginBottom={1}>
      <ScrollableItems radius={10}>
        {values.map((value, index) => (
          <Item
            key={value}
            active={index === 0}
            value={value}
            description={descriptions?.[index] ?? value}
            storeKey={storeKey}
          />
        ))}
      </ScrollableItems>
    </Box>
  )
}
