import Link from "next/link";
import React from "react";
import {Text} from "@chakra-ui/react";

interface FooterLinkProps {
  /** Href to navigate when interected. Required */
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = (props) => {
  const {href, children} = props;

  return (
    <Link href={href}>
      <Text as="span" cursor="pointer" fontWeight={700}>
        {children}
      </Text>
    </Link>
  );
};

export default FooterLink;
