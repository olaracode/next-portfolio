"use client";
import React from "react";
import { Stack, StackDivider, Link, StackDirection } from "@chakra-ui/react";
import useScroll from "@/hooks/useScroll";
import useLang from "@/language/useLang";
type variantsT = "responsive" | "nav" | "menu";
const variants: { [key in variantsT]: StackDirection } = {
  responsive: { base: "column", md: "row" },
  nav: "row",
  menu: "column",
};

export type LinksVariantT = keyof typeof variants;

const Links = ({ variant }: { variant: LinksVariantT }) => {
  const { content } = useLang();
  const { scrollToId } = useScroll();
  return (
    <Stack
      divider={<StackDivider />}
      textAlign={"center"}
      direction={variants[variant]}
    >
      {content.links.map((link, index) => (
        <Link
          key={`link-${link}-${index}`}
          onClick={() => scrollToId(link.href)}
          fontSize="18px"
          fontWeight="bold"
        >
          {link.content}
        </Link>
      ))}
    </Stack>
  );
};

export default Links;
