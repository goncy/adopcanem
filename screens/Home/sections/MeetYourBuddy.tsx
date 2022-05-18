import React from "react";
import {Grid, GridItem, Stack, Text} from "@chakra-ui/react";

import Section from "../../../components/section/Section";

const MeetYourBuddy: React.FC = () => {
  return (
    <Section backgroundColor="white" backgroundIsImage={false} dividerColor="#F8F3E3">
      <Stack spacing={2}>
        <Text fontSize="5xl" fontWeight={700} textAlign="center">
          Conocé a tu próxima{" "}
          <Text as="span" color="primary.500">
            mascota
          </Text>
        </Text>
        <Grid gap={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))" width="100%">
          {Array.from({length: 18}, (_, index) => (
            <GridItem key={index} bg="grey" h="10rem">
              Image
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </Section>
  );
};

export default MeetYourBuddy;
