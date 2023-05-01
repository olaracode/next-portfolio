"use client";
import React from "react";
import { Box, Link, Flex, IconButton } from "@chakra-ui/react";
import useScroll from "@/hooks/useScroll";
import { Container, BlurCard } from "../misc";
import { StyledNavbar } from "./Navbar.styles";
import { HamburgerIcon } from "@chakra-ui/icons";
import Links from "../Links";
const variants = {
  slideIn: {
    transform: "translateY(0%)",
    opacity: "1",
    transition: "transform 0.5s ease-in-out",
  },
  slideOut: {
    transform: "translateY(-100%)",
    opacity: "0",
    transition: "transform 0.5s ease-in-out",
  },
};
const Navbar = () => {
  const { scrolled100px, scrollToId } = useScroll();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      {scrolled100px && (
        <StyledNavbar opacity={!scrolled100px ? "0" : "1"}>
          <BlurCard p={4}>
            <Container>
              <Flex alignItems="center" justifyContent="space-between">
                <Link
                  fontSize="22px"
                  onClick={() => scrollToId("top")}
                  alignItems="center"
                >
                  Octavio Lara
                </Link>
                <Box display={{ base: "none", md: "block" }}>
                  <Links variant="nav" />
                </Box>
                <Box display={{ base: "block", md: "none" }}>
                  <IconButton
                    variant="ghost"
                    aria-label="menu"
                    onClick={handleToggle}
                  >
                    <HamburgerIcon />
                  </IconButton>
                </Box>
              </Flex>
            </Container>
          </BlurCard>
          {isOpen && (
            <Box
              position="relative"
              w="100%"
              zIndex="10"
              display={{ base: "block", md: "none" }}
              sx={isOpen ? variants.slideIn : variants.slideOut}
            >
              <Container display="flex" justifyContent="flex-end">
                <BlurCard p={4} border="2px solid">
                  <Links variant="menu" />
                </BlurCard>
              </Container>
              <Box
                height="100vh"
                width="100vh"
                top="0"
                zIndex={"10"}
                position="absolute"
                onClick={() => setIsOpen(false)}
              />
            </Box>
          )}
        </StyledNavbar>
      )}
    </>
  );
};

export default Navbar;
