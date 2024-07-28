import Router from "next/router";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "../app/styles/theme";
import overrides from "@/app/styles/overrides";
import GlobalStyle from "../app/styles/styles";
import "@/app/styles/css/nprogress.css";
import "@/app/globals.css"
import nProgress from "nprogress";
import "@fontsource/geist-sans";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// disables loading spinner
nProgress.configure({
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

const MyApp = ({ Component, pageProps }) => {
  const tagManagerArgs = {
    gtmId: "GTM-5SS8NNGX",
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  });

  // create new tanstack query client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={extendTheme({ ...theme, ...overrides })}>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
