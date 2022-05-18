import {Box} from "@chakra-ui/react";
import React from "react";

interface SectionDividerProps {
  /** Color to display in the divider, defaults to white. */
  backgroundColor?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = (props) => {
  const {backgroundColor = "white"} = props;

  return (
    <Box bottom={0} left={0} overflow="hidden" position="absolute">
      <svg
        fill={backgroundColor}
        preserveAspectRatio="none"
        style={{
          position: "relative",
          display: "block",
          height: "200px",
          width: "calc(100% +1.5px)",
          transform: "rotateZ(180deg)",
        }}
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="shape-fill"
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        />
      </svg>
    </Box>
  );
};

export default SectionDivider;
