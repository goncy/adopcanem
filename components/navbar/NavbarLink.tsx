import React from "react";
import Link from "next/link";
import {Text} from "@chakra-ui/react";

export interface NavbarLinkProps {
  /** Href to navigate when interected. Required */
  href: string;
  /** Visual text to display. Required */
  label: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = (props) => {
  const {href, label} = props;

  return (
    <Link href={href}>
      <Text as="span" cursor="pointer" fontWeight={800}>
        {label}
      </Text>
    </Link>
  );
};

export default NavbarLink;
