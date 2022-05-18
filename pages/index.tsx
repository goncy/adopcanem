import type {NextPage} from "next";

import {Stack} from "@chakra-ui/react";

import {Hero, History, MeetYourBuddy, Process, Transit} from "screens/Home/sections";

const Home: NextPage = () => {
  return (
    <Stack>
      <Hero />
      <MeetYourBuddy />
      <Process />
      <Transit />
      <History />
    </Stack>
  );
};

export default Home;
