import { Box, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

const Tags = ({ tags = "" }) => {
  const tagsArr = tags?.split(",");

  return (
    <HStack gap="0.25rem" flexWrap="wrap">
      <Text
        border="1px solid"
        borderColor="softBlack"
        borderRadius="0.25rem"
        padding="0.125rem"
        backgroundColor="softGrey"
        color="white"
      >
        keywords:
      </Text>
      {tagsArr.map((t, idx) => (
        <Link
          key={idx}
          href={`https://www.google.com/search?q=${t}`}
          isExternal
        >
          <Box
            border="1px solid"
            borderColor="softBlack"
            borderRadius="0.25rem"
            padding="0.125rem"
            _hover={{color: "white", backgroundColor: "softBlack"}}
          >
            <Text>{t}</Text>
          </Box>
        </Link>
      ))}
    </HStack>
  );
};

export default Tags;
