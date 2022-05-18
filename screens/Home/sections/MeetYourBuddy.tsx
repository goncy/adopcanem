import React from "react";
import {Stack, Grid, Heading, Box, Button} from "@chakra-ui/react";

import {MeetColumn} from "../../../components/meet/MeetColumn";

const MeetYourBuddy: React.FC = () => {
  return (
    <Stack position="relative" pt="32" px="4" textAlign="center">
      <Heading>
        <Box>Conocé a tu proxima</Box>
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
          <MeetColumn end={3} position={["0", "-100px"]} start={0} />
          <MeetColumn end={6} position={["100px", "0"]} start={3} />
          <MeetColumn end={9} position={["0", "100px"]} start={6} />
          <MeetColumn end={12} position="150px" start={9} />
          <MeetColumn end={15} position={["100px", "0"]} start={12} />
          <MeetColumn end={18} position={["0", "-100px"]} start={15} />
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
