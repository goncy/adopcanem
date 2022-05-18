import {GridItem} from "@chakra-ui/react";
import Image from "next/image";
import React, {FC} from "react";

interface Props {
  url: string;
}

export const MeetItem: FC<Props> = ({url}) => {
  return (
    <GridItem
      bgColor="blue.200"
      borderRadius="2xl"
      minW="full"
      overflow="hidden"
      position="relative"
    >
      <Image alt="foto de perro" layout="fill" objectFit="cover" src={url} />
    </GridItem>
  );
};
