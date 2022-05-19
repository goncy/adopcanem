import React from "react";
import {Flex, Badge, Text, Grid, GridItem, VStack, HStack} from "@chakra-ui/react";

import Section from "../../../components/section/Section";
import ProcessSectionCard from "../../../components/cards/ProcessSectionCard";
import { ProcessCardType } from "../../../types/adopcanem.types";

const CARDS: ProcessCardType[] = [
  {
    title: 1,
    description: "Encontrá a tu mascota",
    thumbnail:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074",
  },
  {
    title: 2,
    description: "Completá el formulario",
    thumbnail: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880",
  },
  {
    title: 3,
    description: "Conocé a tu mascota",
    thumbnail: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685",
  },
  {
    title: 4,
    description: "Dale todo tu amor",
    thumbnail: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935"
  }
];

const Process: React.FC = () => {

  const generateTopOffset = (index: number): string => {
    let offset = '0px';
    if (index % 2 === 0) {
      offset = '-30px';
    } else {
      offset = '30px';
    }
    return offset;
  }

  return (
    <Section backgroundColor="#F8F3E3" hasDivider={false}>
      {/* Main stack */}
      <VStack py={4} spacing={20}>
        {/* Top Stack */}
        <HStack alignItems="center" justifyContent="space-between" spacing={10}>
          {/* Left */}
          <Flex alignItems={"flex-start"} flexDirection="column">
            <Badge

              backgroundColor={"gray.300"}
              colorScheme="gray"
              fontSize="md"
              fontWeight={700}
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
          <Flex flex="1 auto" marginLeft="auto">
            <Text fontSize="lg" fontWeight={700}>
              Al momento de adoptar asumís un acto de responsabilidad y compromiso por lo que es
              importante que estés capacitado para hacerlo.
            </Text>
          </Flex>
        </HStack>
        {/* Process Timeline */}
        <Grid gap={4} templateColumns='repeat(4, 1fr)'>
          {CARDS.map((card, index) => (
            <GridItem key={index}>
              <ProcessSectionCard title={card.title} description={card.description} thumbnail={card.thumbnail} topOffset={generateTopOffset(index)}/>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Section>
  );
};

export default Process;
