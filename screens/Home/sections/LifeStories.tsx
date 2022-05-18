import React from "react";
import {Stack, Button, Badge, Text, Image, Flex} from "@chakra-ui/react";
// @ts-ignore
import Carousel from "react-grid-carousel";

export const LifeStories: React.FC = () => {
  //replace with real images and text
  const sliderImages = [
    {
      image: "https://pbs.twimg.com/media/Eiv7uRsXcAEtAB7?format=jpg&name=4096x4096",
    },
    {
      title: "@paconcy",
      text: "Parte de nuestra campaña de rescate se centra en compartir historias de vida, porque muchas veces la mascota no se elige, simplemente se encuentran",
    },
    {
      image: "https://i.ibb.co/4MVnyW2/girl-hugs.png",
    },
    {
      image: "https://pbs.twimg.com/media/Eiv7uRsXcAEtAB7?format=jpg&name=4096x4096",
    },
    {
      title: "@paconcy2",
      text: "Parte de nuestra campaña de rescate se centra en compartir historias de vida, porque muchas veces la mascota no se elige, simplemente se encuentran",
    },
    {
      image: "https://i.ibb.co/4MVnyW2/girl-hugs.png",
    },
    {
      image: "https://pbs.twimg.com/media/Eiv7uRsXcAEtAB7?format=jpg&name=4096x4096",
    },
    {
      title: "@paconcy3",
      text: "Parte de nuestra campaña de rescate se centra en compartir historias de vida, porque muchas veces la mascota no se elige, simplemente se encuentran",
    },
    {
      image: "https://i.ibb.co/4MVnyW2/girl-hugs.png",
    },
  ];

  return (
    <Stack align="center" direction="column" justify={"center"} paddingX={24} paddingY={24}>
      <Badge
        backgroundColor={"gray.300"}
        colorScheme="gray"
        fontSize="md"
        fontWeight={600}
        textColor="black"
      >
        Sumá con tu ayuda
      </Badge>
      <Text fontSize="4xl" fontWeight={800} textColor="black">
        Historias de vida
      </Text>
      <Text fontSize="md" maxWidth="640" textAlign="center">
        Parte de nuestra campaña de rescate se centra en compartir historias de vida, porque muchas
        veces la mascota no se elige, simplemente se encuentran
      </Text>

      <Stack maxWidth="100%" paddingTop={50}>
        <Carousel loop cols={3} gap={50} rows={1}>
          {sliderImages.map((slide, idx) => {
            return (
              <Carousel.Item key={idx} width={50}>
                {slide.image ? (
                  <Image alt="Perro" borderRadius={25} height="auto" src={slide.image} width="" />
                ) : (
                  <Flex alignItems="center" height="100%">
                    <Stack direction="column">
                      <Text fontSize="4xl" fontWeight={800} marginBottom={5} textColor="black">
                        {slide.title}
                      </Text>
                      <Text fontSize="md">{slide.text}</Text>
                    </Stack>
                  </Flex>
                )}
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Stack>

      <Stack direction="row" paddingTop={50}>
        <Button
          _hover={{bg: "primary.500"}}
          bg={"primary.500"}
          color={"white"}
          paddingX="10"
          paddingY="4"
          size="xs"
          onClick={() => window.open("https://instagram.com/adopcanem", "_blank")}
        >
          Seguinos en Instagram
        </Button>
      </Stack>
    </Stack>
  );
};

export default LifeStories;
