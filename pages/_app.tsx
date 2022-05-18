import type {AppProps} from "next/app";

import {ChakraProvider, Container} from "@chakra-ui/react";

import {Fonts, Navbar} from "components";

import theme from "../theme";

function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Container backgroundColor="white" height="100%" maxWidth="container.xl" px="0">
        <Navbar />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
