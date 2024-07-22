import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import constants from "@/app/lib/constants";
import { Image, Stack, Text, VStack, useStyleConfig } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import "@/app/styles/css/typewriter.css";

const Home = () => {
  const styles = useStyleConfig("home");

  return (
    <Stack {...styles.main}>
      <Navbar />
      <VStack {...styles.wrapper}>
        <Stack {...styles.subWrapper}>
          <Image
            {...styles.icon}
            src="../../../../assets/samet.jpeg"
            alt="Samet Kamğul"
          />
          <Text {...styles.description}>
            {constants.TEXT.description.prefix}
          </Text>
          <Text {...styles.description}>and</Text>
          <Typewriter
            options={{
              strings: constants.TEXT.description.words,
              autoStart: true,
              loop: true,
              deleteSpeed: 20,
              delay: 30,
              wrapperClassName: "typewriter-wrapper",
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(30)
                .deleteAll()
                .start();
            }}
          />
        </Stack>
        <Text {...styles.subDescription}>{constants.TEXT.subDescription}</Text>
      </VStack>
      <Footer />
    </Stack>
  );
};

export default Home;
