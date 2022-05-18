import React from "react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

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
  const { title, description, thumbnail, topOffset } = props;
  return (
    <Box
      borderRadius="2xl"
      height="400px"
      width="300px"
      top={topOffset}
      overflow="hidden"
      position="relative"
      backgroundSize="cover"
      backgroundPosition="center center"
      backgroundImage={thumbnail}

    >
      <Flex flexDir="column" width="100%" height="100%" padding={4}>
        <VStack
          alignItems="flex-start"
          marginTop="auto"
          textAlign="left"
          paddingRight={8}
        >
          <Heading as="h2" fontSize="80px" fontWeight={900} color="white">
            {title}
          </Heading>
          <Text fontSize="2xl" fontWeight={800} color="white">
            {description}
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ProcessSectionCard;
