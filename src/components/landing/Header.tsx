"use client";
import { Heading, Link, Box, Stack, StackDivider } from "@chakra-ui/react";
import { Container, BlurCard } from "../misc";
import Links from "../Links";
import useScroll from "@/hooks/useScroll";

const Header = () => {
  const { scrolled100px } = useScroll();

  return (
    <Box
      zIndex={"12"}
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container>
        <BlurCard
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          textAlign="center"
          opacity={scrolled100px ? "0" : "1"}
          transition="opacity 0.3s ease-out"
        >
          <Heading fontSize="48px">Octavio Lara</Heading>
          <Heading variant="h2" fontSize="24px" mb={10}>
            Desarrollador web
          </Heading>
          <Links variant="responsive" />
        </BlurCard>
      </Container>
    </Box>
  );
};

export default Header;
