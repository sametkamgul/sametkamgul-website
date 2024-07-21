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
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaSoundcloud,
} from "react-icons/fa";
import constants from "../lib/constants";

const Footer = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      left="0"
      right="0"
      height="75px"
      paddingLeft="20px"
      paddingRight="20px"
    >
      <HStack gap="1rem" justifyContent="space-between" width="100%">
        <Text fontSize="1rem">{constants.TEXT.trademark}</Text>
        <HStack>
          <Link href="https://www.linkedin.com/in/sametkamgul" isExternal>
            <FaLinkedin size="2rem" color="black" />
          </Link>
          <Link href="https://github.com/sametkamgul" isExternal>
            <FaGithub size="2rem" color="black" />
          </Link>
          <Link href="https://instagram.com/sametkamgul" isExternal>
            <FaInstagram size="2rem" color="black" />
          </Link>
          <Link href="https://soundcloud.com/sametkamgul" isExternal>
            <FaSoundcloud size="2rem" color="black" />
          </Link>
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Footer;
