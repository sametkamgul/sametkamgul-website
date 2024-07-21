import { VStack, Link, Text, HStack, StackDivider } from "@chakra-ui/react";
import React from "react";

const educationsList = [
  {
    title: "Electrical & Electronics Engineering",
    school: "Ege University",
    location: "Izmir/Turkiye",
    dates: "2017",
  },
];

const Educations = () => {
  return (
    <VStack divider={<StackDivider borderColor="softBlack" gap="1rem" />}>
      {educationsList.map((e, idx) => (
        <VStack key={idx}>
          <Text>{e.title}</Text>
          <Text>{e.school}</Text>
          <Text>{e.location}</Text>
        </VStack>
      ))}
    </VStack>
  );
};

export default Educations;
