import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider resetCSS theme={extendTheme({ ...theme, ...overrides })}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
