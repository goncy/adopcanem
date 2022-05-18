import type {AppProps} from "next/app";

import {ChakraProvider, Container} from "@chakra-ui/react";

import {Fonts, Navbar} from "components";

import theme from "../theme";
import ScrollToTop from "../components/ScrollToTop";

function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Container backgroundColor="white" height="100%" maxWidth="container.xl">
        <Navbar />
        <Component {...pageProps} />
        <ScrollToTop />
      </Container>
    </ChakraProvider>
  );
}

export default App;
