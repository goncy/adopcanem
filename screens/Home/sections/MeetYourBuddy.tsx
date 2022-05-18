import React from "react";
import { Grid, GridItem, VStack, Stack, Text, Box, Button, Flex } from "@chakra-ui/react";

import Section from "../../../components/section/Section";
import MeetBuddyCard from "../../../components/cards/MeetBuddyCard";
import { getRandomPetPhoto } from "../../../lib/helperFunctions";

const MeetYourBuddy: React.FC = () => {

  return (
    <Section backgroundColor="white" hasDivider dividerColor="#F8F3E3">
      <Stack spacing={2}>
        <VStack spacing={0} mb={10}>
          <Text fontSize="6xl" fontWeight={700} textAlign="center">
            Conocé a tu próxima
          </Text>
          <Text as="span" fontSize="6xl" fontWeight={800} color="primary.500">
            mascota
          </Text>
        </VStack>
        {/* Grid. TODO: Masonry */}
        <Grid
          gap={4}
          width="100%"
          gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gridTemplateRows="minmax(100px, auto)"
          gridAutoFlow="dense"
        >
          {Array.from({ length: 15 }, (_, index) => (
            <GridItem key={index}>
              <MeetBuddyCard thumbnail={getRandomPetPhoto()} />
            </GridItem>
          ))}
        </Grid>
        {/* Fade */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          height="450px"
          width="100%"
          background=" linear-gradient(0deg, #FAFAFC 59.48%, rgba(250, 250, 252, 0) 101.58%, rgba(250, 250, 252, 0) 203.09%);"
        />
        {/* Bottom button */}
        <Flex justifyContent="center" alignContent="center">
          <Button
            _hover={{ bg: "primary.500" }}
            bg={"red.400"}
            color={"white"}
            paddingX={12}
            size="lg"
          >
            Encontrá tu mascota
          </Button>
        </Flex>
      </Stack>
    </Section>
  );
};
export default MeetYourBuddy;
