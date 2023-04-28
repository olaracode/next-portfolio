import { chakra } from "@chakra-ui/react";

export const Container = chakra("div", {
  baseStyle: {
    w: "full",
    maxWidth: {
      base: "90vw",
      sm: "80vw",
      md: "70vw",
      lg: "70vw",
      xl: "60vw",
    },
    mx: "auto",
  },
});

export const BlurCard = chakra("div", {
  baseStyle: {
    position: "relative",
    zIndex: "12",
    backgroundColor: "rgba(1,1,1,0.2)",
    backdropFilter: "blur(6px)",
    borderRadius: "8px",
    p: 10,
  },
});

export const Article = chakra("article", {
  baseStyle: {
    p: {
      fontWeight: "medium",
      my: 3,
    },
    h1: {
      my: 1,
      fontSize: "24px",
      fontWeight: "bold",
    },
    h2: {
      my: 1,
      fontSize: "20px",
      fontWeight: "bold",
    },
    ul: {
      my: 2,
      listStyle: "none",
      pl: 0,
    },
    li: {
      my: 1,
    },
    h3: {
      my: 1,
      fontSize: "16px",
      fontWeight: "bold",
    },
  },
});

export const BlackHole = chakra("div", {
  baseStyle: {
    width: "200px",
    height: "200px",
    background: "black",
    borderRadius: "50%",
    boxShadow: "inset 0 0 100px white",
  },
});
