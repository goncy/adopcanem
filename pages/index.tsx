import type {NextPage} from "next";

import {Stack} from "@chakra-ui/react";

import {Hero, History, MeetYourBuddy, Process, Transit, Footer} from "screens/Home/sections";

const Home: NextPage = () => {
  return (
    <Stack>
      <Hero />
      <MeetYourBuddy />
      <Process />
      <Transit />
      <History />
      <Footer />
    </Stack>
  );
};

export default Home;
