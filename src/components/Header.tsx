"use client";
import { Heading, Link, Box, Stack, StackDivider } from "@chakra-ui/react";
import { Container, BlurCard } from "./misc";
import useScroll from "@/hooks/useScroll";

const Header = () => {
  const { scrolled100px, handleScrollToAboutMe } = useScroll();

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
          <Heading variant="h2" fontSize="24px">
            Desarrollador web
          </Heading>
          <Stack
            divider={<StackDivider />}
            my={2}
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
        </BlurCard>
      </Container>
    </Box>
  );
};

export default Header;
