import Maintenance from "@/app/components/maintenance";
import Navbar from "@/app/components/navbar";
import { Flex, Text, HStack, Image } from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  return (
    <Flex width="100%">
      <Navbar />
      <Maintenance />
    </Flex>
  );
};

export default Projects;
