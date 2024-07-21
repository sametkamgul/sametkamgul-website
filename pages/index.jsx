import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { Image, Flex, Stack, Text, HStack, VStack } from "@chakra-ui/react";

const Home = () => (
  <Stack gap="4rem">
    <Navbar />
    <VStack paddingTop="10rem" gap="4rem">
      <HStack gap="2rem" padding="4rem">
        <Image
          boxSize="3xs"
          borderRadius="100%"
          src="../../../../assets/samet.jpeg"
          alt="Samet Kamğul"
        />
        <Text
          textAlign="end"
          alignItems="center"
          top="100px"
          color="placeholderBlack"
          fontSize="2rem"
        >
          Software Developer, Hobbyist, Cyclist, Musicion and the most
          importantly a constant learner
        </Text>
      </HStack>
      <Text fontSize="1.5rem">
        This page is dedicated to my personal projects, blog posts and resume
      </Text>
    </VStack>
    <Footer />
  </Stack>
);

export default Home;
