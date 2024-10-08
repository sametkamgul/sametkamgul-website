import Navbar from "@/app/components/navbar";
import MyProjects from "@/app/components/projects/myProjects";
import { Flex, useColorModeValue, useStyleConfig } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import ScrollToTop from "react-scroll-to-top";
import useContents from "@/app/hooks/useContents";

const Projects = () => {
  const styles = useStyleConfig("projects");
  const { data, isLoading } = useContents();
  const bgColor = useColorModeValue("black", "white");
  const arrowColor = useColorModeValue("white", "black");

  // dark/ligth mode style override
  styles.scrollToTopInner.backgroundColor = bgColor;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <Flex>
        <Navbar />
        <MyProjects projects={data?.projects} isLoading={isLoading} />
      </Flex>
      <ScrollToTop
        smooth={true}
        {...styles.scrollToTop}
        style={styles.scrollToTopInner}
        color={arrowColor}
      />
    </motion.div>
  );
};

export default Projects;
