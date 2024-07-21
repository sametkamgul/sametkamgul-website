import Maintenance from "@/app/components/maintenance";
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
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Resume = () => {
  return (
    <Flex width="100%" paddingTop="5rem">
      <Navbar />
      <Center width="full" height="full">
        <Accordion width="full">
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="center" fontSize="4xl">
                About
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel alignItems="start">
              <About />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="center" fontSize="4xl">
                Experiences
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel alignItems="start">
              <Experiences />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="center" fontSize="4xl">
                Educations
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel alignItems="start">
              <Educations />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Center>
    </Flex>
  );
};

export default Resume;
