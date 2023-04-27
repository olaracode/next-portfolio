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

export const BlurCard = chakra("div", {
  baseStyle: {
    position: "relative",
    zIndex: "12",
    backgroundColor: "rgba(1,1,1,0.2)",
    backdropFilter: "blur(3px)",
    p: 10,
  },
});
