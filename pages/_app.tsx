import type {AppProps} from "next/app";

import {ChakraProvider, Container} from "@chakra-ui/react";

import Navbar from "../components/navbar/Navbar";
import theme from "../theme";

function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
