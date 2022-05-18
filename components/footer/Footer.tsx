import {Stack, Text} from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Stack
      alignItems="end"
      backgroundColor="primary.400"
      direction="row"
      height="350px"
      justifyContent="space-between"
      padding="20px 50px"
      paddingX={12}
    >
      <Text fontSize="lg" fontWeight={700} width="200px">
        adopcanem - 2022
      </Text>
      <Stack
        alignSelf="start"
        direction="column"
        fontSize="lg"
        fontWeight={700}
        spacing={7}
        textAlign="center"
      >
        <Text>Encontrá tu mascota</Text>
        <Text>Sobre nosotros</Text>
        <Text>Contáctanos</Text>
        <Text>Hacé tu donación</Text>
      </Stack>
      <Stack direction="row" gap="10px" justifyContent="end" width="200px">
        <Text>IN</Text>
        <Text>F</Text>
        <Text>IG</Text>
      </Stack>
    </Stack>
  );
};

export default Footer;
