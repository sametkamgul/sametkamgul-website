import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  useStyleConfig,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Navbar = ({ pageTitle }) => {
  const router = useRouter();
  const styles = useStyleConfig("navbar");

  let navBarItems = [];
  // hiding home link when in home page
  if (router.pathname !== "/") {
    navBarItems.push({
      label: "home",
      link: "/",
    });
  }

  navBarItems = [
    ...navBarItems,
    {
      label: "resume",
      link: "/resume",
    },
    {
      label: "blog",
      link: "/blog",
    },
    {
      label: "projects",
      link: "/projects",
    },
    {
      label: "about me",
      link: "/about",
    },
  ];

  return (
    <Flex {...styles.nav}>
      <Text fontSize="2rem" color="white">
        {pageTitle || "Samet Kamğul"}
      </Text>
      <HStack gap="1.8rem">
        {navBarItems?.map((item, idx) => (
          <Box key={idx}>
            <Link href={item.link} {...styles.navItem}>
              {item.label}
            </Link>
          </Box>
        ))}

        {/*    {router.pathname !== "/" && (
          <Link textDecoration="none" fontSize="1.4rem" color="white" href="/">
            home
          </Link>
        )} */}
      </HStack>
    </Flex>
  );
};

export default Navbar;
