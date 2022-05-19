import React from "react";
import {Box, Flex, Heading, Text, VStack, useBreakpointValue} from "@chakra-ui/react";

interface ProcessSectionCardProps {
  /** Number of the card, title. */
  title: number;
  /** Description of the card. */
  description: string;
  /** Thumbnail */
  thumbnail: string;
  /** Top offset of the card */
  topOffset: string;
}

const ProcessSectionCard: React.FC<ProcessSectionCardProps> = (props) => {
  const {title, description, thumbnail, topOffset} = props;
  const variant = useBreakpointValue({md: "0", lg: topOffset});

  return (
    <Box
      _hover={{
        transform: "scale(1.05)",
      }}
      backgroundImage={thumbnail}
      backgroundPosition="center center"
      backgroundSize="cover"
      borderRadius="2xl"
      boxShadow="2xl"
      height="400px"
      overflow="hidden"
      position="relative"
      top={variant}
      transition="transform 0.2s ease-in-out"
      width="300px"
    >
      <Flex flexDir="column" height="100%" padding={4} width="100%">
        <VStack alignItems="flex-start" marginTop="auto" paddingRight={8} textAlign="left">
          <Heading as="h2" color="white" fontSize="80px" fontWeight={900}>
            {title}
          </Heading>
          <Text color="white" fontSize="2xl" fontWeight={800}>
            {description}
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ProcessSectionCard;
