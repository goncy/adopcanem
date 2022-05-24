import React from "react";
import {Box} from "@chakra-ui/react";

interface FooterDividerProps {}

const FooterDivider: React.FC<FooterDividerProps> = (props) => {
  const {} = props;

  return (
    <svg
      fill="#F8F3E3"
      preserveAspectRatio="none"
      style={{
        display: "block",
        height: "100px",
        position: "relative",
        width: "100%",
      }}
      viewBox="0 0 1512 520"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 90.4716C585.649 -30.973 916.74 -29.3387 1512 90.4716V520H0V90.4716Z"
        fill="#F8F3E3"
      />
    </svg>
  );
};

export default FooterDivider;
