import {Stack, Text} from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      height="90px"
      justifyContent="space-between"
      paddingX={12}
    >
      <Text color="primary.500" fontSize="3xl" fontWeight={900}>
        adopcanem
      </Text>
      <Stack direction="row" fontSize="lg" fontWeight={700} spacing={12}>
        <Text>Encontrá tu mascota</Text>
        <Text>Sobre nosotros</Text>
        <Text>Hacé tu donación</Text>
        <Text>Contáctanos</Text>
      </Stack>
    </Stack>
  );
};

export default Navbar;
