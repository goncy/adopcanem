import {Grid} from "@chakra-ui/react";
import React, {FC} from "react";

import images from "../../images.json";

import {MeetItem} from "./MeetItem";

interface Props {
  start: number;
  end: number;
  position?: string[] | string;
}

export const MeetColumn: FC<Props> = ({start, end, position}) => {
  return (
    <Grid gap="4" gridTemplateRows="repeat(3,250px)" minW="full" position="relative" top={position}>
      {images.url.slice(start, end).map((url, index) => (
        <MeetItem key={`meet_${index}`} url={url} />
      ))}
    </Grid>
  );
};
