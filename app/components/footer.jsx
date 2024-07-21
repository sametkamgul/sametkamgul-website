import {
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      backgroundColor="#ffeece"
      alignItems="center"
      justifyContent="space-between"
      position="absolute"
      paddingLeft="20px"
      paddingRight="20px"
      bottom="0"
      left="0"
      right="0"
      height="50px"
      borderTop="2px solid black"
    >
      <HStack gap="1rem">
        <Link href="https://www.linkedin.com/in/sametkamgul" isExternal>
          <Image color="white" src="../../assets/linkedin.png" alt="linkedin" width="2rem" />
        </Link>
        <Link href="https://github.com/sametkamgul" isExternal>
          <Image src="../../assets/github.png" alt="github" width="2rem" />
        </Link>
      </HStack>
    </Flex>
  );
};

export default Footer;
