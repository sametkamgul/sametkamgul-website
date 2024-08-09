import { Text, VStack } from "@chakra-ui/react";
import React from "react";

const About = ({ about }) => {
  return (
    <VStack>
      <Text textAlign="center" fontSize="xl">
        {about}
      </Text>
    </VStack>
  );
};

export default About;
