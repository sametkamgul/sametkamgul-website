import {
  VStack,
  Link,
  Text,
  HStack,
  StackDivider,
  Stack,
  Grid,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import Tags from "../common/tags";

const MyProjects = ({ projects, isLoading }) => {
  return isLoading ? (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="full"
      height="100vh"
    >
      <Spinner width="3rem" height="3rem" alignSelf="center" />
    </Flex>
  ) : (
    <VStack
      divider={<StackDivider borderColor="softBlack" paddingTop="1.2rem" />}
      marginTop="6rem"
      marginBottom="8rem"
      alignItems="center"
      width={{ base: "full" }}
    >
      <Text fontSize={{ base: "2rem", md: "3rem" }}>Projects</Text>
      {projects?.map((e, idx) => (
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
