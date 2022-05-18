import React from "react";
import {Stack, Grid, GridItem, Text, Heading, Box, Button} from "@chakra-ui/react";
import Image from "next/image";

import images from "../../../images.json";

const MeetYourBuddy: React.FC = () => {
  return (
    <Stack position="relative" pt="32" px="4" textAlign="center">
      <Heading>
        <Box>Conoce a tu proxima</Box>
        <Box color="primary.500">mascota</Box>
      </Heading>
      <Box position="relative" top="-32">
        <Grid
          gap="4"
          gridTemplateColumns={["repeat(3,1fr)", "repeat(6,1fr)"]}
          maxH={["500px", "inherit"]}
          overflowY={["hidden"]}
          pt="32"
        >
          <Grid
            gap="4"
            gridTemplateRows="repeat(3,250px)"
            minW="full"
            position="relative"
            top={["0", "-100px"]}
          >
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[0]} />
            </GridItem>
            <GridItem bgColor="purple.200" borderRadius="2xl" overflow="hidden" position="relative">
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[1]} />
            </GridItem>
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[2]} />
            </GridItem>
          </Grid>

          <Grid gap="4" gridTemplateRows="repeat(3,250px)" position="relative" top={["100px", "0"]}>
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[3]} />
            </GridItem>
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[4]} />
            </GridItem>
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[5]} />
            </GridItem>
          </Grid>

          <Grid gap="4" gridTemplateRows="repeat(3,250px)" position="relative" top={["0", "100px"]}>
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[6]} />
            </GridItem>
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[6]} />
            </GridItem>
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[7]} />
            </GridItem>
          </Grid>

          <Grid gap="4" gridTemplateRows="repeat(3,250px)" position="relative" top="150px">
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[8]} />
            </GridItem>
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[9]} />
            </GridItem>
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[10]} />
            </GridItem>
          </Grid>

          <Grid gap="4" gridTemplateRows="repeat(3,250px)">
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[11]} />
            </GridItem>
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[12]} />
            </GridItem>
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[13]} />
            </GridItem>
          </Grid>

          <Grid gap="4" gridTemplateRows="repeat(3,250px)" position="relative" top="-100px">
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[14]} />
            </GridItem>
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[15]} />
            </GridItem>
            <GridItem
              bgColor="blue.200"
              borderRadius="2xl"
              minW="full"
              overflow="hidden"
              position="relative"
            >
              <Image alt="foto de perro" layout="fill" objectFit="cover" src={images.url[16]} />
            </GridItem>
          </Grid>
        </Grid>
        <Stack align="center" bgColor="white">
          <Box
            boxShadow={[
              "0px 0px 50px 60px  rgba(255,255,255,1)",
              "0px -30px 100px 130px  rgba(255,255,255,1)",
            ]}
            h="0px"
            mb="4"
            position="relative"
            w="full"
          />
          <Button
            _hover={{
              bg: "primary.500",
            }}
            bg="primary.500"
            borderRadius="sm"
            color="white"
            m="0"
            position="relative"
          >
            Encontrá tu mascota
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default MeetYourBuddy;
