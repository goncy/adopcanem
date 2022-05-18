import React from "react";
import {Box, VStack} from "@chakra-ui/react";

import SectionDivider from "./SectionDivider";

interface SectionProps {
  children: React.ReactNode;
  /** Wether the background is an image or not. */
  backgroundIsImage?: boolean;
  /** Background image url. */
  backgroundImage?: string;
  /** Background color. */
  backgroundColor?: string;
}

const Section: React.FC<SectionProps> = (props) => {
  const {
    backgroundColor,
    backgroundIsImage = false,
    backgroundImage = "https://www.petassure.com/petassure/file-streams/page/DKhmRtazcw1FPjHr00Myg4caring-for-pets-teaches-children-responsibility.jpg.jpg",
    children,
  } = props;

  return (
    <VStack height="850px" overflow="hidden" position="relative">
      <Box
        backgroundColor={backgroundColor}
        backgroundImage={backgroundIsImage ? `url(${backgroundImage})` : "none"}
        backgroundPosition={"center center"}
        backgroundSize={"cover"}
        height="100%"
        width="full"
      >
        {children}
      </Box>
      <SectionDivider backgroundColor={backgroundColor} />
    </VStack>
  );
};

export default Section;
