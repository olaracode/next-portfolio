"use client";
import { Button, Box, Image } from "@chakra-ui/react";
import { Container } from "./misc";
import useScroll from "@/hooks/useScroll";
const variants = {
  slideIn: {
    transform: "translateY(0%)",
    opacity: "1",
    transition: "transform 0.5s ease-in-out",
  },
  slideOut: {
    transform: "translateY(100%)",
    opacity: "0",
    transition: "transform 0.5s ease-in-out",
  },
};
const GoTop = () => {
  const { scrolled100px, scrollToId } = useScroll();
  return (
    <Box
      position="fixed"
      bottom="5"
      right="5"
      zIndex="20"
      sx={scrolled100px ? variants.slideIn : variants.slideOut}
    >
      <Container>
        <Button gap={1} alignItems="center" onClick={() => scrollToId("top")}>
          Inicio
          <Image
            src="/assets/imgs/planets/earth.png"
            alt="inicio"
            height="20px"
          />
        </Button>
      </Container>
    </Box>
  );
};

export default GoTop;
