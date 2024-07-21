import { Flex, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Navbar = ({ pageTitle }) => {
  const router = useRouter()
  return (
    <Flex
      backgroundColor="black"
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      paddingLeft="20px"
      paddingRight="20px"
      top="0"
      left="0"
      right="0"
      height="64px"
    >
      <Text fontSize="2rem" color="white">
        {pageTitle || "Samet Kamğul"}
      </Text>
      <HStack gap="2rem">
        {router.pathname !== "/" && (
          <Link textDecoration="none" fontSize="1.8rem" color="white" href="/">
            home
          </Link>
        )}
        <Link
          textDecoration="none"
          fontSize="1.8rem"
          color="white"
          href="/resume"
        >
          resume
        </Link>
        <Link
          textDecoration="none"
          fontSize="1.8rem"
          color="white"
          href="/about"
        >
          about me
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
