import {
  AbsoluteCenter,
  Box,
  Center,
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
  Stack,
  Text,
  useDisclosure,
  useStyleConfig,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { HideOnDesktop, HideOnMobile } from "../responsive";
import { HamburgerIcon } from "@chakra-ui/icons";
import constants from "../lib/constants";

const Navbar = ({ pageTitle }) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const styles = useStyleConfig("navbar");

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
            <Text {...styles.desktopPageTitle}>
              {pageTitle || "Samet Kamğul"}
            </Text>
          </Link>
          <HStack gap="1.8rem">
            {navBarItems?.map((item, idx) => (
              <Box key={idx}>
                <Link href={item.url} {...styles.navItem}>
                  {item.label}
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
              <Text {...styles.mobileNavTitle}>Samet Kamğul</Text>
            </Link>
          </AbsoluteCenter>
          <IconButton
            aria-label="Menu"
            onClick={onOpen}
            icon={<HamburgerIcon />}
          />
        </Flex>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody>
              <GridItem {...styles.gridItem}>
                {navBarItems?.map((item, idx) => (
                  <Box key={idx}>
                    <Link href={item.url} {...styles.navItem}>
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
