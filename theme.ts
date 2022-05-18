import {BadgeProps, extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        minHeight: "100vh",
        backgroundColor: "gray.100",
        color: "black",
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
    Badge: {
      variants: {
        subtle: (props: BadgeProps) => {
          return {
            textTransform: "initial",
            backgroundColor: `${props.colorScheme}.100`,
            borderRadius: 9999,
            paddingX: 6,
            paddingY: 1,
            color: `${props.colorScheme}.500`,
          };
        },
      },
    },
  },
});
