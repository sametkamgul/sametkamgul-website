import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import constants from "@/app/lib/constants";
import {
  Image,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  useStyleConfig,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import "@/app/styles/css/typewriter.css";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const styles = useStyleConfig("home");
  const textColor = useColorModeValue("softBlack", "white");

  const tagManagerArgs = {
    dataLayer: {
      userId: "001",
      userProject: "project",
      page: "home",
    },
    dataLayerName: "PageDataLayer",
  };

  useEffect(() => {
    TagManager.dataLayer(tagManagerArgs);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <Stack {...styles.main}>
        <Navbar />
        <VStack {...styles.wrapper}>
          <Stack {...styles.subWrapper}>
            <Image
              {...styles.icon}
              sx={{ _hover: { scaleX: -1, transform: "auto" } }}
              src="../../../../assets/samet.jpeg"
              alt="Samet Kamğul"
            />
            <Text {...styles.description} color={textColor}>
              {constants.TEXT.description.prefix}
            </Text>
            <Text {...styles.description} color={textColor}>
              and
            </Text>
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
                typewriter.pauseFor(30).deleteAll().start();
              }}
            />
          </Stack>
          <Text {...styles.subDescription}>
            {constants.TEXT.subDescription}
          </Text>
        </VStack>
        <Footer />
      </Stack>
    </motion.div>
  );
};

export default Home;
