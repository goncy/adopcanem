import React from "react";
import {Stack, Flex, Spacer, Badge, Text, Grid, GridItem, VStack, HStack} from "@chakra-ui/react";

import Section from "../../../components/section/Section";

const Process: React.FC = () => {
  return (
    <Section backgroundColor="#F8F3E3" hasDivider={false}>
      {/* Main stack */}
      <VStack py={4}>
        {/* Top Stack */}
        <HStack alignItems="center" justifyContent="space-between" spacing={10}>
          {/* Left */}
          <Flex alignItems={"flex-start"} flexDirection="column">
            <Badge
              backgroundColor={"gray.300"}
              colorScheme="gray"
              fontSize="md"
              fontWeight={600}
              mb={4}
              textColor="#363636"
            >
              El proceso
            </Badge>
            <Text fontSize="6xl" fontWeight={900} lineHeight={1} textColor="#363636">
              Narices frias y corazones contentos
            </Text>
          </Flex>

          {/* Right */}
          <Flex>
            <Text fontSize="lg" fontWeight={700}>
              Al momento de adoptar asumís un acto de responsabilidad y compromiso por lo que es
              importante que estés capacitado para hacerlo.
            </Text>
          </Flex>
        </HStack>
      </VStack>
    </Section>
  );
};

export default Process;
