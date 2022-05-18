import {Global} from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: "Raleway";
        src: url("/fonts/raleway-subset.woff2") format("woff2");
        font-display: "optional";
        font-weight: 100 900;
      }
      `}
  />
);
