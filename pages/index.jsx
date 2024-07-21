import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { Image, Flex, Stack, Text, HStack } from "@chakra-ui/react";

const Home = () => (
  <Flex>
    <Navbar />
    <Stack paddingTop="50px">
      <HStack gap="2rem" padding="4rem">
        <Image
          boxSize="15rem"
          border="2px solid wheat"
          borderRadius="100%"
          src="../../../../assets/samet.jpeg"
          alt="Samet Kamğul"
        />
        <Text alignItems="center" top="100px" color="black" fontSize="3rem">
          Software Developer, Hobbyist, Cyclist, Musicion and the most importantly
          a constant learner.
        </Text>
      </HStack>
    </Stack>
    <Footer />
  </Flex>
);

export default Home;
