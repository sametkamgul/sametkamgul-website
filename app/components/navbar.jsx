import {
  AbsoluteCenter,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  GridItem,
  HStack,
  IconButton,
  Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useStyleConfig,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { HideOnDesktop, HideOnMobile } from "../responsive";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import constants from "../lib/constants";

const Navbar = ({ pageTitle }) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const styles = useStyleConfig("navbar");
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("softBlack", "gray");

  let navBarItems = [];

  // hiding home link when in home page
  if (router.pathname !== "/") {
    navBarItems.push(constants.NAV.ITEMS.HOME);
  }

  navBarItems = [
    ...navBarItems,
    constants.NAV.ITEMS.RESUME,
    constants.NAV.ITEMS.BLOG,
    constants.NAV.ITEMS.PROJECTS,
    constants.NAV.ITEMS.ABOUT,
    constants.NAV.ITEMS.CONTACT,
  ];

  return (
    <>
      <HideOnMobile>
        <Flex {...styles.nav} bgColor={bgColor}>
          <Link href="/">
            <motion.div
              initial={{ y: -1000 }}
              animate={{ y: 0, transition: { duration: 0.5 } }}
            >
              <Text {...styles.desktopPageTitle}>
                {pageTitle || "Samet Kamğul"}
              </Text>
            </motion.div>
          </Link>
          <HStack gap="1.8rem">
            {navBarItems?.map((item, idx) => (
              <Box key={idx}>
                <Link href={item.url} {...styles.navItem}>
                  <motion.div
                    initial={{ y: -100 }}
                    animate={{
                      y: 0,
                      transition: { duration: `${0.25 * (1 + idx / 2.5)}` },
                    }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              </Box>
            ))}
            <HStack>
              <Switch
                onChange={toggleColorMode}
                colorScheme="red"
                color="white"
                size="lg"
              />
              {colorMode === "light" ? (
                <MoonIcon color="white" boxSize="2rem" />
              ) : (
                <SunIcon color="white" boxSize="2rem" />
              )}
            </HStack>
          </HStack>
        </Flex>
      </HideOnMobile>
      <HideOnDesktop>
        <Flex {...styles.mobileWrapper} bgColor={bgColor}>
          <AbsoluteCenter axis="horizontal">
            <Link href="/">
              <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0, transition: { duration: 0.25 } }}
              >
                <Text {...styles.mobileNavTitle}>Samet Kamğul</Text>
              </motion.div>
            </Link>
          </AbsoluteCenter>
          <IconButton
            aria-label="Menu"
            onClick={onOpen}
            icon={<HamburgerIcon />}
          />
        </Flex>
        <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
          <DrawerOverlay width="full" height="full" />
          <DrawerContent>
            <DrawerCloseButton size="lg" />
            <DrawerBody
              paddingTop="2rem"
              paddingBottom="2rem"
              alignSelf="center"
            >
              <GridItem>
                {navBarItems?.map((item, idx) => (
                  <Box key={idx} textAlign="center">
                    <Link href={item.url} fontSize="2rem">
                      {item.label}
                    </Link>
                  </Box>
                ))}
                <HStack justifyContent="center">
                  <Switch
                    onChange={toggleColorMode}
                    colorScheme="red"
                    color="white"
                    size="lg"
                  />
                  {colorMode === "light" ? (
                    <MoonIcon boxSize="2rem" />
                  ) : (
                    <SunIcon boxSize="2rem" />
                  )}
                </HStack>
              </GridItem>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HideOnDesktop>
    </>
  );
};

export default Navbar;
