import React from "react";
import {Stack, Badge, Text, Image, VStack, Button} from "@chakra-ui/react";

import Carrousel from "../../../components/Carrousel";

const Histories: React.FC = () => {
  return (
    <Stack
      align="center"
      backgroundColor="#E5E5E5"
      direction="column"
      justify={"center"}
      padding={24}
    >
      <Badge
        backgroundColor={"gray.300"}
        colorScheme="gray"
        fontSize="md"
        fontWeight={600}
        textColor="#363636"
      >
        Sumá con tu ayuda
      </Badge>
      <Text fontSize="4xl" fontWeight={800} textColor="#363636">
        Historias de vida
      </Text>
      <Text fontSize="md" maxWidth="640">
        Parte de nuestra campaña de rescate se centra en compartir historias de vida, porque muchas
        veces la mascota no se elige, simplemente se encuentran
      </Text>
      <Carrousel>
        {Array.from({length: 8}).map((_, idx) => {
          return idx % 2 === 0 ? (
            <Image
              key={idx}
              alt="adopted-dog"
              bg={"red.400"}
              borderRadius={"40"}
              src="https://images.unsplash.com/photo-1554830072-52d78d0d4c18?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735"
              width={"18em"}
            />
          ) : (
            <VStack
              key={idx}
              alignItems={"flex-start"}
              bg={"white"}
              borderRadius={"40"}
              p="8"
              width={"18em"}
            >
              <Text fontSize="4xl" fontWeight={800} textColor="#363636">
                @paconcy
              </Text>
              <Text fontSize={"md"}>
                {idx} Parte de nuestra campaña de rescate se centra en compartir historias de vida,
                porque muchas veces la mascota no se elige, simplemente se encuentran
              </Text>
            </VStack>
          );
        })}
      </Carrousel>
      <Stack direction={"row"} paddingTop={70}>
        <Button
          _hover={{bg: "primary.500"}}
          bg={"red.400"}
          color={"white"}
          paddingX="10"
          paddingY="4"
          size="xs"
        >
          ir a mercadopago
        </Button>
      </Stack>
    </Stack>
  );
};

export default Histories;
