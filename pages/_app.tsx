import type {AppProps} from "next/app";

import {ChakraProvider, Container} from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import theme from "../theme";

function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container backgroundColor="white" height="100%" maxWidth="container.xl">
        <Navbar />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
