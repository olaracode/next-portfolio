"use client";
import { Wrap, Text, Box } from "@chakra-ui/react";
const TechStack = ({ title, stack }: { title?: string; stack: string[] }) => {
  return (
    <Box>
      {title && (
        <Text fontSize="2xl" fontWeight={"bold"}>
          {title}
        </Text>
      )}
      <Wrap>
        {stack.map((item, index) => (
          <Text key={`tech-${item}-${index}`} textDecor={"underline"}>
            {item}
          </Text>
        ))}
      </Wrap>
    </Box>
  );
};

export default TechStack;
