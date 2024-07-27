import { Flex, Image, Stack, Text, useStyleConfig } from "@chakra-ui/react";
import React from "react";
import constants from "../lib/constants";

const Maintenance = () => {
  const styles = useStyleConfig("maintenance");

  return (
    <Flex {...styles.wrapper}>
      <Stack {...styles.subWrapper}>
        <Image
          src="../../assets/maintenance.png"
          alt="maintenance icon"
          {...styles.icon}
        />
        <Text {...styles.text}>{constants.TEXT.maintenance}</Text>
      </Stack>
    </Flex>
  );
};

export default Maintenance;
