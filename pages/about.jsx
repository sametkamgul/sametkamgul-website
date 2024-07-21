import Navbar from "@/app/components/navbar";
import { Flex, Text, Stack } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Flex>
      <Navbar />
      <Stack paddingTop="50px">
        <Text top="100px" color="red">
          this is about page
        </Text>
      </Stack>
    </Flex>
  );
};

export default About;
