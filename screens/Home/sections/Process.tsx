import React from "react";
import {Text, GridItem, Stack, Box, SimpleGrid} from "@chakra-ui/react";

import ProcessSectionCard from "../../../components/cards/ProcessSectionCard";
import {ProcessCardType} from "../../../types/adopcanem.types";

const CARDS: ProcessCardType[] = [
  {
    title: 1,
    description: "Encontrá a tu mascota",
    thumbnail:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074",
  },
  {
    title: 2,
    description: "Completá el formulario",
    thumbnail:
      "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880",
  },
  {
    title: 3,
    description: "Conocé a tu mascota",
    thumbnail:
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685",
  },
  {
    title: 4,
    description: "Dale todo tu amor",
    thumbnail:
      "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935",
  },
];

const Process: React.FC = () => {
  const generateTopOffset = (index: number): string => {
    let offset = "0px";

    if (index % 2 === 0) {
      offset = "-30px";
    } else {
      offset = "30px";
    }

    return offset;
  };

  return (
    <Stack backgroundColor="#F8F3E3" px={10} py="100px">
      <Stack direction="column" spacing={10}>
        {/* Cabecera del bloque */}
        <Stack
          alignContent={["center", null, null, "space-between"]}
          direction={["column", null, null, "row"]}
          display="flex"
          justifyContent={["center", null, null, "space-between"]}
          px={[2, 4, 4, 4, 10]}
          spacing={10}
        >
          <Stack>
            <Box
              bg="#E5E0D2"
              borderRadius="30px"
              fontSize={22}
              fontWeight="bold"
              p={2}
              textAlign="center"
              w="200px"
            >
              El proceso
            </Box>
            <Text fontSize={["48px", null, null, "54px"]} fontWeight="black" pt={6}>
              Narices frias y corazones contentos
            </Text>
          </Stack>
          <Stack alignItems="center" justifyContent="center">
            <Text fontSize="22px" fontWeight="bold">
              Al momento de adoptar asumís un acto de responsabilidad y compromiso por lo que es
              importante que estés capacitado para hacerlo.
            </Text>
          </Stack>
        </Stack>
        {/* Imagenes */}
        <SimpleGrid
          columns={[1, 1, 2, 2, 4]}
          // minChildWidth="300px"
          gap={[4, null, 4]}
          justifyItems="center"
          py={10}
          templateRows="auto"
        >
          {CARDS.map((card, index) => (
            <GridItem key={index}>
              <ProcessSectionCard
                description={card.description}
                thumbnail={card.thumbnail}
                title={card.title}
                topOffset={generateTopOffset(index)}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default Process;
