import Maintenance from "@/app/components/maintenance";
import Navbar from "@/app/components/navbar";
import { Flex, HStack, Text, Image, useStyleConfig } from "@chakra-ui/react";
import React from "react";

const Resume = () => {
  const styles = useStyleConfig("maintenance");

  return (
    <Flex width="100%">
      <Navbar />
      <Maintenance />
    </Flex>
  );
};

export default Resume;
