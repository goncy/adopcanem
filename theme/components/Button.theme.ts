import {ComponentStyleConfig} from "@chakra-ui/react";

const ButtonTheme: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "lg",
    fontWeight: 600,
  },
  variants: {
    solid: {
      bg: "primary.500",
      color: "white",
      _hover: {
        bg: "primary.600",
      },
    },
  },
};

export default ButtonTheme;
