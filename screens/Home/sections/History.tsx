import React from "react";
import {Stack, Flex, Button, Badge, Text, VStack, Box, HStack} from "@chakra-ui/react";
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
          <Text fontSize="lg" maxWidth="750" fontWeight={600}>
            Existen muchas formas de ser parte de este cambio, desde algún lugar
            podes hacerlo. Los aportes económicos nos ayudan a pagar controles,
            estudios, veterinarios, traslados y comprar alimento.
          </Text>
        </VStack>

        {/* Timeline */}
        <VStack spacing={2}>
          <Text fontSize="7xl" fontWeight={800} textColor="#363636">
            +3500
          </Text>
          <Flex justify="space-between" alignItems="flex-start" width="full">
            <Text
              fontSize="md"
              fontWeight={800}
              textColor="#363636"
              textAlign="center"
            >
              Comienza la organización <br />
              2017
            </Text>
            <Text fontSize="xl" fontWeight={800} textColor="#363636">
              Mascotas rescatadas
            </Text>
            <Text
              fontSize="md"
              fontWeight={800}
              textColor="#363636"
              textAlign="center"
            >
              No más mascotas sin hogar <br />
              2022
            </Text>
          </Flex>
          <Box
            width="1000px"
            height="88px"
            backgroundColor="rgba(253, 177, 69, 0.4)"
            borderRadius="xl"
            padding="15px"
          >
            <HStack
              spacing={0}
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Box
                width="500px"
                height="60px"
                backgroundColor="white"
                borderLeftRadius="xl"
              />
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

        <Stack direction={"row"} paddingTop={70}>
          <Button
            _hover={{ bg: "primary.500" }}
            bg={"red.400"}
            color={"white"}
            paddingX={12}
            size="lg"
          >
            Ir a mercadopago
          </Button>
        </Stack>

        <Text fontSize="xs" fontWeight={800} textColor="primary.500">
          Prefiero hacer una transferencia
        </Text>
      </VStack>
    </Section>
  );
};

export default History;
