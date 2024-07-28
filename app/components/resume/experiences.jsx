import { VStack, Link, Text, HStack, StackDivider } from "@chakra-ui/react";
import React from "react";
import Tags from "../common/tags";

const experiencesList = [
  {
    title: "Software Developer",
    company: "feature/mind",
    compantyURL: "https://www.featuremind.com",
    roles: "Frontend Development, Backend Development",
    location: "Izmir/Turkiye - remote",
    dates: "06.2023 - still working",
    techs:
      "JavaScript, React, jQuery, Node.js, github, eCommerce",
  },
  {
    title: "Backend Developer",
    company: "OSF Digital",
    compantyURL: "https://www.osfdigital.com",
    roles: "Backend Development",
    location: "Izmir/Turkiye - remote",
    dates: "12.2021 ~ 06.2023",
    techs:
      "Node.js, JavaScript, React, jQuery, github, eCommerce",
  },
  {
    title: "Software Development Engineer in Test (SDET)",
    company: "Payten",
    compantyURL: "https://www.payten.com",
    roles: "Automation test development",
    location: "Izmir/Turkiye - remote",
    dates: "02.2021 ~ 12.2021",
    techs: "Java, Selenium, git, MySql",
  },
  {
    title: "Software Developer",
    company: "MATE Marketing Technologies",
    compantyURL: "https://www.mate.com.tr",
    roles: "Development of apps and hardwares",
    location: "Istanbul/Turkiye - on site",
    dates: "04.2018 ~ 06.2020",
    techs: "Python, OpenCV, MySQL, C/C++",
  },
  {
    title: "Software Developer",
    company: "Proge",
    compantyURL: "https://www.progeltd.com/",
    roles:
      "Develop IoT based ESP8266 system for monitoring the embedded system on website",
    location: "Izmir/Turkiye - freelance",
    dates: "09.2017 ~ 03.2018",
    techs: "PHP, MySQL, JavaScript, HTML, CSS",
  },
  {
    title: "Intern Engineer",
    company: "Proge",
    compantyURL: "https://www.progeltd.com/",
    roles:
      "Research & Development: Develop the system for being compatible with IoT",
    location: "Izmir/Turkiye - on site",
    dates: "09.2017 ~ 10.2017",
    techs: "PHP, MySQL, JavaScript, HTML,  CSS",
  },
];

const Experiences = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="softBlack" paddingTop="1.2rem" />}
      alignItems="start"
    >
      {experiencesList.map((e, idx) => (
        <VStack key={idx} textAlign="start" alignItems="start" alignSelf="center" width="full">
          <Text fontSize="2xl" textAlign="center" display="flex" alignSelf="center">
            {e.title}
          </Text>
          <HStack>
            <Text
              border="1px solid"
              borderColor="softBlack"
              borderRadius="0.25rem"
              padding="0.125rem"
              backgroundColor="softGrey"
              color="white"
            >
              company:
            </Text>
            <Link href={e.compantyURL} isExternal>
              {e.company}
            </Link>
          </HStack>
          <HStack>
            <Text
              border="1px solid"
              borderColor="softBlack"
              borderRadius="0.25rem"
              padding="0.125rem"
              backgroundColor="softGrey"
              color="white"
            >
              role:
            </Text>
            <Text>{e.roles}</Text>
          </HStack>
          <HStack>
            <Text
              border="1px solid"
              borderColor="softBlack"
              borderRadius="0.25rem"
              padding="0.125rem"
              backgroundColor="softGrey"
              color="white"
            >
              location:
            </Text>
            <Text>{e.location}</Text>
          </HStack>
          <HStack>
            <Text
              border="1px solid"
              borderColor="softBlack"
              borderRadius="0.25rem"
              padding="0.125rem"
              backgroundColor="softGrey"
              color="white"
            >
              date:
            </Text>
            <Text>{e.dates}</Text>
          </HStack>
          <Tags tags={e.techs} />
        </VStack>
      ))}
    </VStack>
  );
};

export default Experiences;
