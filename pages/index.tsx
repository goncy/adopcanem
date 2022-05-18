import type {NextPage} from "next";

import {Stack} from "@chakra-ui/react";

import Hero from "../screens/Home/sections/Hero";
import MeetYourBuddy from "../screens/Home/sections/MeetYourBuddy";
import Process from "../screens/Home/sections/Process";
import Transit from "../screens/Home/sections/Transit";
import History from "../screens/Home/sections/History";
import Layout from "../components/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout
      headProps={{
        title: "Home | Adopcanem",
        description:
          "Adopcanem es una plataforma de adopción que te permite encontrar a tu nuevo compañero de vida.",
        url: "https://adopcanem.com",
      }}
    >
      <Stack>
        <Hero />
        <MeetYourBuddy />
        <Process />
        <Transit />
        <History />
      </Stack>
    </Layout>
  );
};

export default Home;
