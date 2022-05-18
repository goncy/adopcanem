import React from "react";
import {Box} from "@chakra-ui/react";

import LayoutHead, {LayoutHeadProps} from "./LayoutHead";

interface LayoutProps {
  /* Optional head props for using in different pages */
  headProps?: LayoutHeadProps;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const {headProps} = props;

  return (
    <Box minHeight="100vh" role="main">
      {/* SEO Head */}
      <LayoutHead {...headProps} />
    </Box>
  );
};

export default Layout;
