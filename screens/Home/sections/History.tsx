import React from "react";
import {Button, Badge, Text, VStack, Box, HStack, Grid, GridItem} from "@chakra-ui/react";
import Link from "next/link";

import Section from "../../../components/section/Section";

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
          <Text maxWidth="750">
            Existen muchas formas de ser parte de este cambio, desde algún lugar podes hacerlo. Los
            aportes económicos nos ayudan a pagar controles, estudios, veterinarios, traslados y
            comprar alimento.
          </Text>
        </VStack>

        {/* Timeline */}
        <Grid gap={2} templateColumns={"repeat(3, 1fr)"} width="full">
          <GridItem>
            <VStack h={"full"} justify={"center"}>
              <Text
                fontSize={{base: "sm", sm: "md"}}
                fontWeight={800}
                textAlign="center"
                textColor="#363636"
                width={"full"}
              >
                Comienza la organización <br />
                2017
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <Text
              fontSize={{base: "xl", sm: "3xl", md: "7xl"}}
              fontWeight={800}
              lineHeight={"normal"}
              position={"relative"}
              textAlign={"center"}
              textColor="#363636"
            >
              +3500
            </Text>
            <Text
              fontSize={{base: "md", sm: "lg", md: "xl"}}
              fontWeight={800}
              textAlign={"center"}
              textColor="#363636"
            >
              Mascotas <br />
              rescatadas
            </Text>
          </GridItem>
          <GridItem>
            <VStack h={"full"} justify={"center"}>
              <Text
                fontSize={{base: "sm", sm: "md"}}
                fontWeight={800}
                textAlign="center"
                textColor="#363636"
              >
                No más mascotas sin hogar
                <br />
                2022
              </Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={3}>
            <VStack>
              <Box
                backgroundColor="rgba(253, 177, 69, 0.4)"
                borderRadius="xl"
                height="88px"
                minWidth={""}
                padding="15px"
                width="80%"
              >
                <HStack alignItems="flex-start" justifyContent="flex-start" spacing={0}>
                  <Box backgroundColor="white" borderLeftRadius="xl" height="60px" width="50%" />
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
          </GridItem>
        </Grid>

        {/* Bottom */}
        <VStack paddingTop={50} spacing={6} width="full">
          <Button paddingX={12} size="lg">
            Ir a mercadopago
          </Button>
          <Link href="/">
            <Text cursor="pointer" fontSize="sm" fontWeight={800} textColor="primary.500">
              Prefiero hacer una transferencia
            </Text>
          </Link>
        </VStack>
      </VStack>
    </Section>
  );
};

export default History;
