import React from "react";
import {Stack, Badge, Text, Image, Flex, VStack, Button, Link} from "@chakra-ui/react";
// @ts-ignore
import Carousel from "react-grid-carousel";
import {FaInstagram} from "react-icons/fa";

import Section from "components/section/Section";

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
    <Section backgroundColor="#E5E5E5" hasDivider={false}>
      {/* Main stack */}
      <VStack py={4} spacing={4} width="full">
        <Badge colorScheme="gray" fontSize="lg" fontWeight={600} textColor="black">
          Sumá con tu ayuda
        </Badge>
        <Text fontSize="5xl" fontWeight={800} textAlign="center" textColor="black">
          Historias de vida
        </Text>
        <Text maxWidth="640" textAlign="center">
          Parte de nuestra campaña de rescate se centra en compartir historias de vida, porque
          muchas veces la mascota no se elige, simplemente se encuentran
        </Text>

        <Stack
          paddingTop={{base: 10, md: 50}}
          width={{
            base: "full",
            md: "container.md",
            lg: "container.lg",
            xl: "container.xl",
          }}
        >
          <Carousel loop cols={3} gap={50} rows={1}>
            {sliderImages.map((slide, idx) => {
              return (
                <Carousel.Item key={idx} width={40}>
                  {slide.image ? (
                    <Image
                      alt="Slide Photo"
                      borderRadius={25}
                      height="auto"
                      src={slide.image}
                      width="full"
                    />
                  ) : (
                    <Flex
                      alignItems="center"
                      backgroundColor="white"
                      borderRadius={25}
                      height="100%"
                      p={8}
                    >
                      <Stack direction="column">
                        <Text
                          fontSize="4xl"
                          fontWeight={800}
                          marginBottom={2}
                          textAlign="center"
                          textColor="black"
                        >
                          {slide.title}
                        </Text>
                        <Text>{slide.text}</Text>
                      </Stack>
                    </Flex>
                  )}
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Stack>

        <Stack direction="row" paddingTop={{base: 10, md: 50}}>
          <Link
            isExternal
            _hover={{textDecoration: "none"}}
            href="https://www.instagram.com/adopcanem/"
            rel="noreferrer"
          >
            <Button gap={3} size="lg">
              <FaInstagram size={20} />
              Seguinos en Instagram
            </Button>
          </Link>
        </Stack>
      </VStack>
    </Section>
  );
};

export default LifeStories;
