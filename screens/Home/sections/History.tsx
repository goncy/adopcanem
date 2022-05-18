import React from "react";
import {Flex, Button, Badge, Text, VStack, Box, HStack} from "@chakra-ui/react";
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
      </VStack>
    </Section>
  );
};

export default History;
