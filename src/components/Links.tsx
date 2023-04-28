import React from "react";
import { Stack, StackDivider, Link, StackDirection } from "@chakra-ui/react";
import useScroll from "@/hooks/useScroll";

type variantsT = "responsive" | "nav" | "menu";
const variants: { [key in variantsT]: StackDirection } = {
  responsive: { base: "column", md: "row" },
  nav: "row",
  menu: "column",
};

export type LinksVariantT = keyof typeof variants;

const Links = ({ variant }: { variant: LinksVariantT }) => {
  const { scrollToId } = useScroll();
  return (
    <Stack
      divider={<StackDivider />}
      textAlign={"center"}
      direction={variants[variant]}
    >
      <Link
        onClick={() => scrollToId("about")}
        fontSize="18px"
        fontWeight="bold"
      >
        Sobre mí
      </Link>
      <Link
        fontSize="18px"
        fontWeight="bold"
        onClick={() => scrollToId("experiences")}
      >
        Experiencia
      </Link>
      <Link fontSize="18px" fontWeight="bold">
        Contacto
      </Link>
    </Stack>
  );
};

export default Links;
