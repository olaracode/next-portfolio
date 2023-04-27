"use client";
import React from "react";
import { Circle as ChakraCircle, Box } from "@chakra-ui/react";

const rotation = (duration = 60) => {
  return {
    animation: `spin ${duration}s linear infinite`,
    "@keyframes spin": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },
  };
};

const Satelite = ({ duration, stop }: { duration: number; stop?: boolean }) => {
  return (
    <Box
      border="1px solid"
      position="absolute"
      top="-20px"
      width="40px"
      height="40px"
      borderRadius="50px"
      sx={rotation(duration)}
    >
      <ChakraCircle size="5px" position="relative" top="6px" bg="brand.white" />
    </Box>
  );
};

export type PlanetT = {
  size?: string;
  planetSize?: string;
  satelite?: boolean;
  duration?: number;
  planetColor?: string;
  delay?: number;
  stop?: boolean;
  saturn?: boolean;
};
const Circle = ({
  size = "300px",
  planetSize = "20px",
  satelite = false,
  duration = 60,
  planetColor = "brand.white",
  delay = 0,
  stop = false,
  saturn = true,
}: PlanetT) => {
  const position = parseInt(planetSize.replace("px", "")) / 2;
  return (
    <Box
      height={size}
      width={size}
      border="1px solid"
      color="brand.white"
      borderRadius="50%"
      display="flex"
      justifyContent="center"
      sx={stop ? {} : { ...rotation(duration), animationDelay: `${delay}s` }}
    >
      <ChakraCircle
        size={planetSize}
        backgroundImage={`url(${planetColor})`}
        backgroundSize="fit"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        position="relative"
        top={`-${position}px`}
      />

      {!stop && satelite && <Satelite duration={duration} stop={stop} />}
    </Box>
  );
};

export default Circle;
