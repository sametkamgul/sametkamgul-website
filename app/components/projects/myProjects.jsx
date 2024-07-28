import {
  VStack,
  Link,
  Text,
  HStack,
  StackDivider,
  Stack,
  Grid,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import Tags from "../common/tags";

const projectsList = [
  {
    title: "www.sametkamgul.com",
    description: "a personal website",
    projectURL: "https://www.sametkamgul.com",
    sourceURL: "https://github.com/sametkamgul/sametkamgul-website",
    techs:
      "Next.js, git, framer motion, chakra ui, tanstack query, formik, vercel",
  },
  {
    title: "Text Analyzer API",
    description: "a word/sentence analyzer API for given text",
    projectURL: "https://rapidapi.com/sametkamgul/api/text-analyzer-api",
    sourceURL: "https://github.com/sametkamgul/Word-Analyzer-API",
    techs: "Node.js, git, jest, rapidapi, netlify",
  },
  {
    title: "Kerevizlog",
    description: "a logger npm package",
    projectURL: "https://www.npmjs.com/package/kerevizlog",
    sourceURL: "https://github.com/sametkamgul/kerevizlog",
    techs: "JavaScript, npm, git",
  },
  {
    title: "Youtube Ad Auto Skip",
    description: "a chrome extension for skipping ads automatically",
    projectURL: "",
    sourceURL: "https://github.com/sametkamgul/youtube-ad-auto-skip",
    techs: "JavaScript",
  },
  {
    title: "Image Uploading With QR Code",
    description: "a Web browser based photo booth",
    projectURL: "https://snapmate.com.tr/code.html",
    sourceURL: "",
    techs: "Node.js, JavaScript, HTML, AWS Services",
  },
  {
    title: "Pinball Game Controlled by Facial Gestures",
    description: "A pinball machine is controlled by human facial gestures.",
    projectURL: "https://mate.com.tr/projeler/gulumse-sarjini-fulle/",
    sourceURL: "",
    techs: "Python, OpenCV, MySQL, Arduino",
  },
  {
    title:
      "Python/OpenCV Image Processing Software Powered by Machine Learning",
    description:
      "a realtime Fast style transfer Machine Learning model(Picasso's Cubism art style)",
    projectURL: "https://mate.com.tr/projeler/deha-picasso/",
    sourceURL: "",
    techs: "Python, OpenCV, MySQL, Machine Learning",
  },
];

const MyProjects = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="softBlack" paddingTop="1.2rem" />}
      marginTop="6rem"
      marginBottom="8rem"
      alignItems="center"
      width={{ base: "full" }}
    >
      <Text fontSize={{ base: "2rem", md: "3rem" }}>Projects</Text>
      {projectsList.map((e, idx) => (
        <Grid
          key={idx}
          alignItems="start"
          justifyContent={{ base: "center", sm: "stretch" }}
          width={{ base: "full", sm: "30rem" }}
        >
          <Stack>
            <Text fontSize="2xl" textAlign="center">
              {e.title}
            </Text>
          </Stack>

          <VStack width={{ base: "20rem", sm: "30rem" }} justifySelf="center">
            <HStack alignSelf="baseline" alignItems="baseline">
              <Text
                border="1px solid"
                borderColor="softBlack"
                borderRadius="0.25rem"
                padding="0.125rem"
                backgroundColor="softGrey"
                color="white"
                height="full"
              >
                description:
              </Text>
              <Text>{e.description}</Text>
            </HStack>
            {e.projectURL && (
              <HStack alignSelf="baseline" alignItems="baseline">
                <Text
                  border="1px solid"
                  borderColor="softBlack"
                  borderRadius="0.25rem"
                  padding="0.125rem"
                  backgroundColor="softGrey"
                  color="white"
                >
                  project url:
                </Text>
                <Link href={e.projectURL} isExternal={true}>
                  <Text
                    border="1px solid"
                    borderColor="softBlack"
                    borderRadius="0.25rem"
                    padding="0.125rem"
                    _hover={{ color: "white", backgroundColor: "softBlack" }}
                  >
                    open
                  </Text>
                </Link>
              </HStack>
            )}
            {e.sourceURL && (
              <HStack alignSelf="baseline" alignItems="baseline">
                <Text
                  border="1px solid"
                  borderColor="softBlack"
                  borderRadius="0.25rem"
                  padding="0.125rem"
                  backgroundColor="softGrey"
                  color="white"
                >
                  source code:
                </Text>
                <Link href={e.sourceURL} isExternal={true}>
                  <Text
                    border="1px solid"
                    borderColor="softBlack"
                    borderRadius="0.25rem"
                    padding="0.125rem"
                    _hover={{ color: "white", backgroundColor: "softBlack" }}
                  >
                    open
                  </Text>
                </Link>
              </HStack>
            )}
            <Stack alignSelf="baseline">
              <Tags tags={e.techs} />
            </Stack>
          </VStack>
        </Grid>
      ))}
    </VStack>
  );
};

export default MyProjects;