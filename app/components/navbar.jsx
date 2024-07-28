import {
  AbsoluteCenter,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  GridItem,
  HStack,
  IconButton,
  Link,
  Text,
  useDisclosure,
  useStyleConfig,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { HideOnDesktop, HideOnMobile } from "../responsive";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import constants from "../lib/constants";

const Navbar = ({ pageTitle }) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const styles = useStyleConfig("navbar");
  const [windowHeight, setWindowHeight] = useState(0);

  // fix for drawer height problem on projects page
  useEffect(() => {
    setWindowHeight(window?.innerHeight);
  }, []);

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
        <Flex {...styles.nav}>
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
          </HStack>
        </Flex>
      </HideOnMobile>
      <HideOnDesktop>
        <Flex {...styles.mobileWrapper}>
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
                    <Link href={item.url} {...styles.navItem} fontSize="2rem">
                      {item.label}
                    </Link>
                  </Box>
                ))}
              </GridItem>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HideOnDesktop>
    </>
  );
};

export default Navbar;
