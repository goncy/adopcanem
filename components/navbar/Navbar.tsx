import React from "react";
import {Flex, Stack, Text} from "@chakra-ui/react";

import NavbarLink, {NavbarLinkProps} from "./NavbarLink";

const NAVBAR_LINKS: NavbarLinkProps[] = [
  {
    href: "/",
    label: "Encontrá tu mascota",
  },
  {
    href: "/nosotros",
    label: "Sobre nosotros",
  },
  {
    href: "/donacion",
    label: "Hacé tu donación",
  },
  {
    href: "/contacto",
    label: "Contáctanos",
  },
];

const Navbar: React.FC = () => {
  return (
    <Flex alignItems="center" height="90px" justifyContent="space-between" paddingX={12}>
      <Text color="primary.500" fontSize="3xl" fontWeight={900}>
        adopcanem
      </Text>
      <Stack direction="row" fontSize="lg" fontWeight={700} spacing={12}>
        {NAVBAR_LINKS.map((link, index) => {
          return <NavbarLink key={index} href={link.href} label={link.label} />;
        })}
      </Stack>
    </Flex>
  );
};

export default Navbar;
