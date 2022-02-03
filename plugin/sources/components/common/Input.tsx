import { useMinistore } from "@yarnpkg/libui/sources/hooks/useMinistore";
import React from "react";
import { Box, Text } from "ink";
import TextInput from "ink-text-input";

type Props = {
  storeKey: string;
};

export const Input = ({ storeKey }: Props) => {
  const [name, setName] = useMinistore<string>(storeKey, "");

  return (
    <Box>
      <Box marginRight={1}>
        <Text>입력:</Text>
      </Box>
      <TextInput value={name} onChange={setName} showCursor={false} />
    </Box>
  );
};
