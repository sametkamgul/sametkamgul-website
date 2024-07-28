import Navbar from "@/app/components/navbar";
import MyProjects from "@/app/components/projects/myProjects";
import { Flex, Stack, useStyleConfig } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import ScrollToTop from "react-scroll-to-top";
import { ArrowUpIcon } from "@chakra-ui/icons";

const Projects = () => {
  const styles = useStyleConfig("projects");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <Flex>
        <Navbar />
        <MyProjects />
        <ScrollToTop
          smooth={true}
          {...styles.scrollToTop}
          style={styles.scrollToTopInner}
        />
      </Flex>
    </motion.div>
  );
};

export default Projects;
