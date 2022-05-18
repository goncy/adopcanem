import {Flex, Button, Text, Stack} from "@chakra-ui/react";

interface Props {}

export const Hero: React.FC<Props> = () => {
  return (
    <Flex
      backgroundImage={
        "url(https://www.petassure.com/petassure/file-streams/page/DKhmRtazcw1FPjHr00Myg4caring-for-pets-teaches-children-responsibility.jpg.jpg)"
      }
      backgroundPosition={"center center"}
      backgroundSize={"cover"}
      w={"full"}
    >
      <Stack
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        paddingY={200}
        px={{base: 4, md: 8}}
        w={"full"}
      >
        <Stack align={"flex-start"} marginLeft={157} maxWidth={489} spacing={6}>
          <Text color={"white"} fontSize={{base: "xl", md: "l"}} fontWeight={700} lineHeight={1}>
            Adoptá tu mascota
          </Text>
          <Text
            color={"white"}
            fontSize={{base: "5xl", md: "6xl"}}
            fontWeight={900}
            lineHeight={1.1}
          >
            Una mano por cuatro patas
          </Text>
          <Text
            color={"white"}
            fontSize={{base: "2xl", md: "3xl"}}
            fontWeight={700}
            lineHeight={1.1}
          >
            Buscamos combatir el abandono y maltrato animal desde el respeto y el amor por los
            animales.
          </Text>
        </Stack>

        <Stack direction={"row"} paddingLeft={157} paddingTop={70}>
          <Button _hover={{bg: "primary.500"}} bg={"red.400"} color={"white"} size="lg">
            Encontrá tu mascota
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};
