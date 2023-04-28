import { chakra } from "@chakra-ui/react";

export const StyledNavbar = chakra("nav", {
  baseStyle: {
    position: "fixed",
    top: "0px",
    left: "0px",
    w: "100%",
    zIndex: "20",
    transition: "opacity 0.3s ease-out",
  },
});
