import {Stack, Grid, GridItem, Text} from "@chakra-ui/react";

export const MeetYourBuddy: React.FC = () => {
  return (
    <Stack alignItems="center">
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
  );
};
