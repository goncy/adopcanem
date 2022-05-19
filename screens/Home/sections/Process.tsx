import React from "react";
import {
  Text,
  GridItem,
  Stack,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

import ProcessSectionCard from "../../../components/cards/ProcessSectionCard";
import { ProcessCardType } from "../../../types/adopcanem.types";

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
    <Stack backgroundColor="#F8F3E3" py="100px" px={10}>
      <Stack direction="column" spacing={10}>
        {/* Cabecera del bloque */}
        <Stack
          direction={["column", null, null, "row"]}
          display="flex"
          justifyContent={["center", null, null, "space-between"]}
          alignContent={["center", null, null, "space-between"]}
          spacing={10}
          px={[2, 4, 4, 4, 10]}
        >
          <Stack>
            <Box
              bg="#E5E0D2"
              borderRadius="30px"
              w="200px"
              fontSize={22}
              textAlign="center"
              fontWeight="bold"
              p={2}
            >
              El proceso
            </Box>
            <Text
              fontSize={["48px", null, null, "54px"]}
              fontWeight="black"
              pt={6}
            >
              Narices frias y corazones contentos
            </Text>
          </Stack>
          <Stack justifyContent="center" alignItems="center">
            <Text fontSize="22px" fontWeight="bold">
              Al momento de adoptar asumís un acto de responsabilidad y
              compromiso por lo que es importante que estés capacitado para
              hacerlo.
            </Text>
          </Stack>
        </Stack>
        {/* Imagenes */}
        <SimpleGrid
          templateRows="auto"
          // minChildWidth="300px"
          columns={[1,1,2,2,4]}
          gap={[4, null, 4]}
          py={10}
          justifyItems="center"
        >
          {CARDS.map((card, index) => (
            <GridItem>
              <ProcessSectionCard
                title={card.title}
                description={card.description}
                thumbnail={card.thumbnail}
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
