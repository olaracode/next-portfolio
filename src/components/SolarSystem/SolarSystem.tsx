"use client";
import React from "react";
import { Box, Flex, Circle as ChakraCircle } from "@chakra-ui/react";
import Planet, { PlanetT } from "./Planet";
import planets from "@/lib/Planets";

const SolarSystem = () => {
  const [stop, setStop] = React.useState(false);
  const toggleStop = () => setStop(!stop);
  return (
    <Flex
      position="absolute"
      alignItems={"center"}
      justifyContent="center"
      top={0}
      height="100vh"
      width="100%"
      maxW="100%"
      overflowX="hidden"
    >
      <Box position="absolute" zIndex="10">
        <ChakraCircle
          size="100px"
          backgroundImage="url('/assets/imgs/planets/sun.png')"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          onClick={toggleStop}
          sx={{
            cursor: "pointer",
          }}
        />
      </Box>
      {planets.map((planet, index) => (
        <Box position="absolute" key={index}>
          <Planet {...planet} delay={index} stop={stop} />
        </Box>
      ))}
    </Flex>
  );
};

export default SolarSystem;
