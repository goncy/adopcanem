import React from "react";
import {Badge, Button, Stack, Text} from "@chakra-ui/react";

const TransitSection: React.FC = () => {
  return (
    <Stack alignItems="flex-end" backgroundColor="gray.200" paddingX={24} paddingY={24}>
      <Stack
        alignItems="center"
        backgroundColor="white"
        borderRadius="xl"
        maxWidth={640}
        padding={12}
        spacing={6}
        textAlign="center"
      >
        <Badge colorScheme="primary" fontSize="lg" variant="subtle">
          Sumate a cambiar vidas
        </Badge>
        <Text fontSize="6xl" fontWeight={800}>
          Hogar de tránsito
        </Text>
        <Text fontSize="2xl">
          Si no podes adoptar pero tenes la posibilidad para albergar uno de nuestros rescatados
          sumate como{" "}
          <Text as="span" fontWeight={700}>
            hogar de tránsito
          </Text>
        </Text>
        <Button colorScheme="primary" size="lg">
          Completá el formulario
        </Button>
      </Stack>
    </Stack>
  );
};

export default TransitSection;
