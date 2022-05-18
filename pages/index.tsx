import type {NextPage} from "next";

import {Flex} from "@chakra-ui/react";

import FamilySection from "screens/Home/sections/Family";
import LifeStories from "screens/Home/sections/LifeStories";

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
      <Flex flexDir="column" width="100%">
        <Hero />
        <MeetYourBuddy />
        <Process />
        <Transit />
        <History />
        <FamilySection />
        <LifeStories />
      </Flex>
    </Layout>
  );
};

export default Home;
