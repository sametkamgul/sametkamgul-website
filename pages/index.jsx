import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import constants from "@/app/lib/constants";
import { Image, Stack, Text, VStack, useStyleConfig } from "@chakra-ui/react";

const Home = () => {
  const styles = useStyleConfig("home");

  return (
    <Stack {...styles.main}>
      <Navbar />
      <VStack {...styles.wrapper}>
        <Stack {...styles.subWrapper}>
          <Image
            {...styles.image}
            src="../../../../assets/samet.jpeg"
            alt="Samet Kamğul"
          />
          <Text {...styles.description}>
            {constants.TEXT.description}
          </Text>
        </Stack>
        <Text {...styles.subDescription}>
          {constants.TEXT.subDescription}
        </Text>
      </VStack>
      <Footer />
    </Stack>
  );
};

export default Home;
