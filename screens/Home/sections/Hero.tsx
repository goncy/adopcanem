import React from "react";
import {Button, Text, Stack, Box} from "@chakra-ui/react";

import Section from "../../../components/section/Section";

interface Props {}

const HeroSection: React.FC<Props> = () => {
  return (
    <Section backgroundIsImage backgroundColor="white" dividerColor="white">
      <Stack align={"flex-start"} marginLeft={[10, 20, 30, 40]} maxWidth={489} spacing={2}>
        <Text
          color={"white"}
          fontSize={{base: "xl", md: "lg"}}
          fontWeight={700}
          lineHeight={1}
          textShadow={"0px 0px 5px rgba(0, 0, 0, 0.5)"}
        >
          Adoptá tu mascota
        </Text>
        <Stack direction={"row"} left="-20px" position="relative" spacing={2}>
          <Box
            _before={{
              content: "''",
              display: "block",
              width: "10px",
              height: "full",
              background: "primary.500",
            }}
          />
          <Text
            color={"white"}
            fontSize={{base: "5xl", md: "6xl"}}
            fontWeight={900}
            lineHeight={1.1}
            textShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}
          >
            Una mano por cuatro patas
          </Text>
        </Stack>
        <Text
          color={"white"}
          fontSize={{base: "lg", md: "xl"}}
          fontWeight={600}
          lineHeight={1.5}
          textShadow={"0px 0px 5px rgba(0, 0, 0, 0.5)"}
        >
          Buscamos combatir el abandono y maltrato animal desde el respeto y el amor por los
          animales.
        </Text>
      </Stack>

      <Stack direction={"row"} paddingLeft={157} paddingTop={50}>
        <Button _hover={{bg: "primary.500"}} bg={"red.400"} color={"white"} paddingX={12} size="lg">
          Encontrá tu mascota
        </Button>
      </Stack>
    </Section>
  );
};

export default HeroSection;
