import {Stack, Text} from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Stack
      alignItems="end"
      direction="row"
      height="350px"
      justifyContent="space-between"
      paddingX={12}
      backgroundColor='primary.400'
      padding='20px 50px'
    >
      <Text fontSize="lg" fontWeight={700} width='200px'>
        adopcanem - 2022
      </Text>
      <Stack direction="column" fontSize="lg" fontWeight={700} spacing={7} textAlign="center" alignSelf='start'>
        <Text>Encontrá tu mascota</Text>
        <Text>Sobre nosotros</Text>
        <Text>Contáctanos</Text>
        <Text>Hacé tu donación</Text>
      </Stack>
      <Stack direction='row' gap='10px' width='200px' justifyContent='end'>
          <Text>IN</Text>
          <Text>F</Text>
          <Text>IG</Text>
      </Stack>
    </Stack>
  );
};

export default Footer;