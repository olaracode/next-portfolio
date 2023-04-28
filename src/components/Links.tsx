import React from "react";
import { Stack, StackDivider, Link } from "@chakra-ui/react";
import useScroll from "@/hooks/useScroll";

const variants = {
  responsive: { base: "column", md: "row" },
  nav: "row",
  menu: "column",
};

export type LinksVariantT = keyof typeof variants;

const Links = ({ variant }: { variant: LinksVariantT }) => {
  const { scrollToId } = useScroll();
  return (
    <Stack divider={<StackDivider />} textAlign={"center"} direction={"column"}>
      <Link
        onClick={() => scrollToId("about")}
        fontSize="18px"
        fontWeight="bold"
      >
        Sobre mí
      </Link>
      <Link fontSize="18px" fontWeight="bold">
        Experiencia
      </Link>
      <Link fontSize="18px" fontWeight="bold">
        Contacto
      </Link>
    </Stack>
  );
};

export default Links;
