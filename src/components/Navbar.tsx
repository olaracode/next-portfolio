"use client";
import React from "react";
import {
  Box,
  Stack,
  Link,
  StackDivider,
  Flex,
  Heading,
} from "@chakra-ui/react";
import useScroll from "@/hooks/useScroll";
import { Container, BlurCard } from "./misc";
const Navbar = () => {
  const { scrolled100px, handleScrollToAboutMe } = useScroll();
  return (
    <Box position="fixed" top="0px" left="0px" w="100%" zIndex={"20"}>
      <BlurCard p={4}>
        <Container>
          <Flex alignItems="center" justifyContent="space-between">
            <Heading fontSize="22px">Octavio Lara</Heading>
            <Stack
              divider={<StackDivider />}
              textAlign={"center"}
              direction={{ base: "column", md: "row" }}
            >
              <Link
                onClick={() => handleScrollToAboutMe("about")}
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
          </Flex>
        </Container>
      </BlurCard>
    </Box>
  );
};

export default Navbar;
