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
} from "@chakra-ui/react";
import React from "react";

const Resume = () => {
  return (
    <Flex width="100%" paddingTop="5rem">
      <Navbar />
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
              <About />
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
              <Experiences />
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
              <Educations />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Center>
    </Flex>
  );
};

export default Resume;
