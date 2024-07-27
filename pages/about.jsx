import React from "react";
import Maintenance from "@/app/components/maintenance";
import Navbar from "@/app/components/navbar";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <Flex width="100%">
        <Navbar />
        <Maintenance />
      </Flex>
    </motion.div>
  );
};

export default About;
