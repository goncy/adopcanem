import React from "react";
import {
  Stack,
  Flex,
  Button,
  Badge,
  Text,
  VStack,
  Box,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Link from "next/link";

import Section from "../../../components/section/Section";
import MeetBuddyCard from "../../../components/cards/MeetBuddyCard";
import {getRandomPetPhoto} from "../../../lib/helperFunctions";

const History: React.FC = () => {
  return (
    <Section backgroundColor="#E5E5E5" hasDivider={false}>
      {/* Main stack */}
      <VStack py={4} spacing={10} width="full">
        {/* Top */}
        <VStack spacing={2} textAlign="center" width="full">
          <Badge
            backgroundColor={"gray.300"}
            colorScheme="gray"
            fontSize="md"
            fontWeight={800}
            textColor="#363636"
          >
            Sumá con tu ayuda
          </Badge>
          <Text fontSize="5xl" fontWeight={900} textColor="#363636">
            Nuestra historia
          </Text>
          <Text fontSize="lg" fontWeight={600} maxWidth="750">
            Existen muchas formas de ser parte de este cambio, desde algún lugar podes hacerlo. Los
            aportes económicos nos ayudan a pagar controles, estudios, veterinarios, traslados y
            comprar alimento.
          </Text>
        </VStack>

        {/* Timeline */}
        <VStack spacing={2} width="full">
          <Text fontSize="7xl" fontWeight={800} textColor="#363636">
            +3500
          </Text>
          <Flex alignItems="flex-start" justify="space-between" width="full">
            <Text fontSize="md" fontWeight={800} textAlign="center" textColor="#363636">
              Comienza la organización <br />
              2017
            </Text>
            <Text fontSize="xl" fontWeight={800} textColor="#363636">
              Mascotas rescatadas
            </Text>
            <Text fontSize="md" fontWeight={800} textAlign="center" textColor="#363636">
              No más mascotas sin hogar <br />
              2022
            </Text>
          </Flex>
          <Box
            backgroundColor="rgba(253, 177, 69, 0.4)"
            borderRadius="xl"
            height="88px"
            padding="15px"
            width="1000px"
          >
            <HStack alignItems="flex-start" justifyContent="flex-start" spacing={0}>
              <Box backgroundColor="white" borderLeftRadius="xl" height="60px" width="500px" />
              <Box
                _before={{
                  content: "''",
                  display: "block",
                  position: "relative",
                  width: "8px",
                  left: "-5px",
                  height: "60px",
                  background: "primary.500",
                }}
              />
            </HStack>
          </Box>
        </VStack>

        {/* Bottom */}
        <VStack paddingTop={50} spacing={6} width="full">
          <Button
            _hover={{bg: "primary.500"}}
            bg={"red.400"}
            color={"white"}
            paddingX={12}
            size="lg"
          >
            Ir a mercadopago
          </Button>
          <Link href="/">
            <Text cursor="pointer" fontSize="sm" fontWeight={800} textColor="primary.500">
              Prefiero hacer una transferencia
            </Text>
          </Link>
        </VStack>

        {/* Familia Grid */}
        <HStack alignItems="center" justifyContent="center" width="full">
          {/* Left Grid */}
          <Grid
            gap={4}
            gridAutoFlow="dense"
            gridTemplateColumns="repeat(2, 1fr)"
            gridTemplateRows="minmax(100px, auto)"
          >
            {Array.from({length: 4}, (_, index) => (
              <GridItem key={index}>
                <MeetBuddyCard thumbnail={getRandomPetPhoto()} />
              </GridItem>
            ))}
          </Grid>
          {/* Center */}
          <Box
            backgroundImage={
              "https://images.unsplash.com/photo-1587463272361-565200f82b33?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
            }
            backgroundPosition="center center"
            backgroundSize="cover"
            borderRadius="2xl"
            height="500px"
            overflow="hidden"
            position="relative"
            width="400px"
          >
            <Flex flexDir="column" height="100%" padding={4} width="100%">
              <VStack alignItems="flex-start" marginTop="auto">
                <Text as="h2" color="white" fontSize="50px" fontWeight={900} textAlign="center">
                  Abraza la familia
                </Text>
              </VStack>
            </Flex>
          </Box>
          {/* Right Grid */}
          <Grid
            gap={4}
            gridAutoFlow="dense"
            gridTemplateColumns="repeat(2, 1fr)"
            gridTemplateRows="minmax(100px, auto)"
          >
            {Array.from({length: 4}, (_, index) => (
              <GridItem key={index}>
                <MeetBuddyCard thumbnail={getRandomPetPhoto()} />
              </GridItem>
            ))}
          </Grid>
        </HStack>
      </VStack>
    </Section>
  );
};

export default History;
