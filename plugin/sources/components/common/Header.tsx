import React from 'react'
import { Box, Text } from 'ink'

type Props = {
  step?: number
}

export const Header: React.FC<Props> = ({ step = 0, children }) => {
  const stepText = step > 0 ? `${step}. ` : `- `
  return (
    <Box flexDirection="row" paddingTop={1}>
      <Box width={50}>
        <Text bold>
          <Text color="greenBright">{stepText}</Text>
          <Text>{children}</Text>
        </Text>
      </Box>
    </Box>
  )
}
