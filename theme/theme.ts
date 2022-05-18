import {extendTheme, theme} from "@chakra-ui/react";

import BadgeTheme from "./components/Badge.theme";
import ButtonTheme from "./components/Button.theme";

export default extendTheme({
  styles: {
    global: {
      body: {
        minHeight: "100vh",
        backgroundColor: "gray.100",
        color: "black",
        margin: 0,
      },
    },
  },
  fonts: {
    body: "Raleway, sans-serif",
  },
  colors: {
    primary: {
      ...theme.colors.red,
      100: "#fef0f0",
      400: "#F8F3E3",
      500: "#EE6464",
    },
    black: "#363663",
  },
  components: {
    Button: ButtonTheme,
    Badge: BadgeTheme,
  },
});
