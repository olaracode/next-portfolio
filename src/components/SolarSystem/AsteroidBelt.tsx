"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { BlurCard } from "../misc";

let animation = {
  "@keyframes move": {
    "0%": {
      transform: "translateX(0vw)",
    },
    "100%": {
      transform: "translateX(100vw)",
    },
  },
};
const AsteroidBelt = () => {
  return (
    <Box
      height={"30vh"}
      width={"100%"}
      position="absolute"
      my={10}
      overflowX={"hidden"}
    >
      <BlurCard
        width="fit-content"
        p={2}
        borderRadius="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflowX={"hidden"}
        sx={{ ...animation, animation: "move 20s linear infinite" }}
      >
        <Box
          overflowX={"hidden"}
          bgImage="/assets/imgs/satelite.png"
          bgSize="cover"
          height="30px"
          width="30px"
        />
      </BlurCard>
    </Box>
  );
};

export default AsteroidBelt;
