import { VStack, Link, Text, HStack, StackDivider } from "@chakra-ui/react";
import React from "react";
import Tags from "../common/tags";

const Experiences = ({ experiences }) => {
  return (
    <VStack
      divider={<StackDivider borderColor="softBlack" paddingTop="1.2rem" />}
      alignItems="start"
    >
      {experiences?.map((e, idx) => (
        <VStack
          key={idx}
          textAlign="start"
          alignItems="start"
          alignSelf="center"
          width={{ base: "full", sm: "25rem" }}
        >
          <Text
            fontSize="2xl"
            textAlign="center"
            display="flex"
            alignSelf="center"
          >
            {e.title}
          </Text>
          <HStack alignItems="baseline">
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
          <HStack alignItems="baseline">
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
          <HStack alignItems="baseline">
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
          <HStack alignItems="baseline">
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
