import {Stack, Flex, Spacer, Badge, Text, Grid, GridItem} from "@chakra-ui/react";

import {Wave} from "components/waves/Wave";

export const Process: React.FC = () => {
  return (
    <Stack direction="column" spacing={0}>
      <Wave waveColor="#F8F3E3" />
      <Stack
        alignItems="flex-start"
        backgroundColor="primary.400"
        paddingX={24}
        paddingY={24}
        position="relative"
      >
        <Badge
          backgroundColor={"gray.300"}
          colorScheme="gray"
          fontSize="md"
          fontWeight={600}
          textColor="#363636"
        >
          El proceso
        </Badge>
        <Stack>
          <Flex>
            <Text fontSize="3xl" fontWeight={800} textColor="#363636">
              Narices frias y corazones contentos
            </Text>
            <Spacer />
            <Text fontSize="md">
              Al momento de adoptar asumís un acto de responsabilidad y compromiso por lo que es
              importante que estés capacitado para hacerlo.
            </Text>
          </Flex>
        </Stack>
        <Grid gap={4} templateColumns="repeat(4, 1fr)" width="100%">
          <GridItem bg="tomato" h="380px" marginBottom={12} rounded="lg" />
          <GridItem bg="tomato" h="380px" marginTop={12} rounded="lg" />
          <GridItem bg="tomato" h="380px" marginBottom={12} rounded="lg" />
          <GridItem bg="tomato" h="380px" marginTop={12} rounded="lg" />
        </Grid>
      </Stack>
    </Stack>
  );
};
