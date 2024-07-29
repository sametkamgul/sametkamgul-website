import { VStack, Link, Text, HStack, StackDivider } from "@chakra-ui/react";
import React from "react";

const Educations = ({ education }) => {
  return (
    <VStack divider={<StackDivider borderColor="softBlack" gap="1rem" />}>
      {education && (
        <VStack>
          <Text>{education?.title}</Text>
          <Text>{education?.school}</Text>
          <Text>{education?.location}</Text>
        </VStack>
      )}
    </VStack>
  );
};

export default Educations;
