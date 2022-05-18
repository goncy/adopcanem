import {Badge, Button, Stack, Text} from "@chakra-ui/react";
import Section from "../../../components/section/Section";

 const Transit: React.FC = () => {
  return (
    <Section
      backgroundColor="gray.200"
      backgroundIsImage
      backgroundImage="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469"
      hasDivider={false}
    >
      <Stack
        alignItems="center"
        backgroundColor="white"
        borderRadius="xl"
        maxWidth={640}
        padding={12}
        spacing={6}
        textAlign="center"
        marginLeft="auto"
      >
        <Badge colorScheme="primary" fontSize="lg" variant="subtle">
          Sumate a cambiar vidas
        </Badge>
        <Text fontSize="6xl" fontWeight={800}>
          Hogar de tránsito
        </Text>
        <Text fontSize="2xl">
          Si no podes adoptar pero tenes la posibilidad para albergar uno de
          nuestros rescatados sumate como{" "}
          <Text as="span" fontWeight={700}>
            hogar de tránsito
          </Text>
        </Text>
        <Button colorScheme="primary" size="lg">
          Completá el formulario
        </Button>
      </Stack>
    </Section>
  );
};
export default Transit;
