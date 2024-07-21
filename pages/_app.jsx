import Router from "next/router";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "../app/styles/theme";
import overrides from "@/app/styles/overrides";
import GlobalStyle from "../app/styles/styles";
import "@/app/styles/css/nprogress.css";
import nProgress from "nprogress";
import '@fontsource/geist-sans'

// disables loading spinner
nProgress.configure({
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider resetCSS theme={extendTheme({ ...theme, ...overrides })}>
    <GlobalStyle>
      <Component {...pageProps} />
    </GlobalStyle>
  </ChakraProvider>
);

export default MyApp;
