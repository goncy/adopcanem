import {Stack, Flex, Button, Badge, Text} from "@chakra-ui/react";

export const History: React.FC = () => {
  return (
    <Stack
      align="center"
      backgroundColor="#E5E5E5"
      direction="column"
      justify={"center"}
      paddingX={24}
      paddingY={24}
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
        Nuestra historia
      </Text>
      <Text fontSize="md" maxWidth="640">
        Existen muchas formas de ser parte de este cambio, desde algún lugar podes hacerlo. Los
        aportes económicos nos ayudan a pagar controles, estudios, veterinarios, traslados y comprar
        alimento.
      </Text>
      <Text fontSize="7xl" fontWeight={800} mt="94" textColor="#363636">
        +3500
      </Text>
      <Flex justify="space-between" mt="25" width="full">
        <Text fontSize="sm" fontWeight={800} textColor="#363636">
          Comienza la organización 2017
        </Text>
        <Text fontSize="l" fontWeight={800} textColor="#363636">
          Mascotas rescatadas
        </Text>
        <Text fontSize="s" fontWeight={800} textColor="#363636">
          No más mascotas sin hogar 2022
        </Text>
      </Flex>

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

      <Text fontSize="xs" fontWeight={800} textColor="primary.500">
        Prefiero hacer una transferencia
      </Text>
    </Stack>
  );
};
