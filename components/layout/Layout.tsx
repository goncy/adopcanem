import React from "react";
import {Flex, VStack} from "@chakra-ui/react";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ScrollTopButton from "../ScrollTopButton";

import LayoutHead, {LayoutHeadProps} from "./LayoutHead";

interface LayoutProps {
  /* Optional head props for using in different pages */
  headProps?: LayoutHeadProps;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const {headProps, children} = props;

  return (
    <>
      <VStack role="main" spacing={0}>
        {/* SEO Head */}
        <LayoutHead {...headProps} />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <Flex flexDir="column" width="full">
          {children}
          {/* Footer */}
          <Footer />
        </Flex>

        <ScrollTopButton limit={400} />
      </VStack>
    </>
  );
};

export default Layout;
