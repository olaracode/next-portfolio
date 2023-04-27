"use client";
import React from "react";
import { Heading, Link, Box, Stack, StackDivider } from "@chakra-ui/react";
import NextLink from "next/link";
import { Container } from "./misc";
const Header = () => {
  return (
    <Box
      zIndex={"12"}
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          position="relative"
          zIndex="12"
          sx={{
            backgroundColor: "rgba(1,1,1,0.2)",
            backdropFilter: "blur(3px)",
          }}
          p={10}
        >
          <Heading fontSize="48px">Octavio Lara</Heading>
          <Heading variant="h2" fontSize="24px">
            Desarrollador web
          </Heading>
          <Stack
            divider={<StackDivider />}
            my={2}
            textAlign={"center"}
            direction={{ base: "column", md: "row" }}
          >
            <Link as={NextLink} href={"#"} fontSize="18px" fontWeight="bold">
              Sobre mí
            </Link>
            <Link fontSize="18px" fontWeight="bold">
              Experiencia
            </Link>
            <Link fontSize="18px" fontWeight="bold">
              Contacto
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
