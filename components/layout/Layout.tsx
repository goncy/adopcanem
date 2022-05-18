import React from "react";
import {Box, Container, Flex, VStack} from "@chakra-ui/react";

import Navbar from "../navbar/Navbar";

import LayoutHead, {LayoutHeadProps} from "./LayoutHead";

interface LayoutProps {
  /* Optional head props for using in different pages */
  headProps?: LayoutHeadProps;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const {headProps, children} = props;

  return (
    <VStack role="main" spacing={0}>
      {/* SEO Head */}
      <LayoutHead {...headProps} />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Flex flexDir="column">{children}</Flex>
    </VStack>
  );
};

export default Layout;
