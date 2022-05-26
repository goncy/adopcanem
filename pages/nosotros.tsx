import type {NextPage} from "next";

import {Heading, ListItem, Text, UnorderedList, VStack} from "@chakra-ui/react";

import Layout from "../components/layout/Layout";

const Conctacto: NextPage = () => {
  return (
    <Layout
      headProps={{
        title: "Home | Adopcanem",
        description:
          "Adopcanem es una plataforma de adopción que te permite encontrar a tu nuevo compañero de vida.",
        url: "https://adopcanem.com",
      }}
    >
      <VStack alignSelf="center" maxW="container.lg" mb={10} mt={20} spacing={10}>
        <Heading color="primary.300">NUESTRA MISIÓN </Heading>
        <Text>
          ADOPCANEM es una organización sin fines de lucro liderada por un grupo de jóvenes que
          buscan combatir el abandono y maltrato animal que se vive en nuestro país con la ayuda de
          distintas personas que desean involucrarse en esta lucha y comparten el respeto y amor por
          los animales (Quilmes/ Buenos Aires/ Argentina){" "}
        </Text>
        <Text fontSize="xl">NUESTROS OBJETIVOS </Text>
        <UnorderedList spacing={3}>
          <ListItem>Luchar contra el abandono, el maltrato y el sufrimiento animal</ListItem>
          <ListItem>Informar a la población sobre la tenencia responsable de mascotas</ListItem>
          <ListItem>
            Fomentar la esterilización tanto en hembras como machos y la importancia de la
            vacunacion en tiempo y forma
          </ListItem>
          <ListItem>
            Asistir a animales en situación de riesgo, recuperarlos y entregarlos en adopción a
            dueños responsables.
          </ListItem>
          <ListItem>Asesorar legalmente a los ciudadanos en casos de maltrato animal.</ListItem>
        </UnorderedList>
      </VStack>
    </Layout>
  );
};

export default Conctacto;
