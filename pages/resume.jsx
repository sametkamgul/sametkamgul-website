import Navbar from "@/app/components/navbar";
import { Flex, HStack, Stack, Text, Image } from "@chakra-ui/react";
import React from "react";

const Resume = () => {
  return (
    <Flex width="100%">
      <Navbar />
      <Flex paddingTop="50px" width="100%">
        <HStack
          gap="2rem"
          alignItems="center"
          justifyContent="center"
          width="100%"
          paddingTop="8rem"
        >
          <Image
            boxSize="12rem"
            src="../../assets/maintenance.png"
            alt="maintenance icon"
          />
          <Text color="black" fontSize="2rem">
            this page is under construction
          </Text>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Resume;
