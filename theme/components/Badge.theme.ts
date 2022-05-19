import {BadgeProps, ComponentStyleConfig} from "@chakra-ui/react";

const BadgeTheme: ComponentStyleConfig = {
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
};

export default BadgeTheme;
