import React from "react";
import Navbar from "@/app/components/navbar";
import About from "@/app/components/resume/about";
import Educations from "@/app/components/resume/education";
import Experiences from "@/app/components/resume/experiences";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Flex,
  Spinner,
  useStyleConfig,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ScrollToTop from "react-scroll-to-top";
import useContents from "@/app/hooks/useContents";

const Resume = () => {
  const { data, isLoading } = useContents();
  const styles = useStyleConfig("projects");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <Flex width="100%" paddingTop="5rem">
        <Navbar />
        {isLoading ? (
          <Flex
            alignItems="center"
            justifyContent="center"
            width="full"
            height="100vh"
          >
            <Spinner width="3rem" height="3rem" alignSelf="center" />
          </Flex>
        ) : (
          <Center width="full" height="full">
            <Accordion width="50rem" allowToggle>
              <AccordionItem>
                <AccordionButton
                  _expanded={{ backgroundColor: "softBlack", color: "white" }}
                >
                  <Box flex="1" textAlign="center" fontSize="4xl">
                    About
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <About about={data?.about} />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  _expanded={{ backgroundColor: "softBlack", color: "white" }}
                >
                  <Box flex="1" textAlign="center" fontSize="4xl">
                    Experiences
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Experiences experiences={data?.experiences} />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  _expanded={{ backgroundColor: "softBlack", color: "white" }}
                >
                  <Box flex="1" textAlign="center" fontSize="4xl">
                    Educations
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Educations education={data?.education} />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Center>
        )}
      </Flex>
      <ScrollToTop
        smooth={true}
        {...styles.scrollToTop}
        style={styles.scrollToTopInner}
      />
    </motion.div>
  );
};

export default Resume;
