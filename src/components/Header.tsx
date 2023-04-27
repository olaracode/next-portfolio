"use client";
import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";
const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      mt="20vh"
    >
      <Heading fontSize="48px">Octavio Lara</Heading>
      <Heading variant="h2" fontSize="24px">
        Desarrollador web
      </Heading>
    </Box>
  );
};

export default Header;
