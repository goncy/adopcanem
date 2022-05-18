import {Box} from "@chakra-ui/react";
import React, {FC} from "react";

interface Props {
  waveColor: string;
  [css: string]: any;
}

export const Wave: FC<Props> = ({waveColor, ...css}) => {
  return (
    <Box as="svg" {...css} viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,128L80,160C160,192,320,256,480,250.7C640,245,800,171,960,133.3C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        fill={waveColor}
        fillOpacity="1"
      />
    </Box>
  );
};
