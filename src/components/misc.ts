import { chakra } from "@chakra-ui/react";

export const Container = chakra("div", {
  baseStyle: {
    w: "full",
    maxWidth: {
      base: "90vw",
      md: "70vw",
      lg: "1200px",
      xl: "1300px",
    },
    mx: "auto",
    px: 6,
  },
});
