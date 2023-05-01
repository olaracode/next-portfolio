"use client";
import {
  Heading,
  Text,
  Box,
  Stack,
  StackDivider,
  Button,
} from "@chakra-ui/react";
import { Container, BlurCard } from "../misc";
import Links from "../Links";
import useScroll from "@/hooks/useScroll";
import useLang from "@/language/useLang";

const animation = {
  "@keyframes text": {
    "0%": {
      textShadow:
        "0 0 20px rgba(24, 15, 53, 0.5), 0 0 30px rgba(141, 66, 150, 0.5)",
    },
    "50%": {
      textShadow:
        "0 0 20px rgba(141, 66, 150, 0.6), 0 0 30px rgba(11, 14, 77, 0.6)",
    },
    "100%": {
      textShadow:
        "0 0 20px rgba(11, 14, 77, 0.6), 0 0 30px rgba(141, 66, 150, 0.5)",
    },
  },
};

const LangButton = ({
  lang,
  current,
  value,
  click,
}: {
  lang: string;
  current: string;
  value: string;
  click: (language: string) => void;
}) => {
  return (
    <Button
      variant="ghost"
      onClick={() => click(value)}
      border="0px"
      sx={
        current == value
          ? {
              border: "1px solid",
            }
          : {}
      }
    >
      <Text>{lang}</Text>
    </Button>
  );
};

const Header = () => {
  const { scrolled100px } = useScroll();
  const { content, handleChangeLanguage, currentLanguage } = useLang();
  return (
    <Box
      zIndex={"30"}
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
            {content.title}
          </Heading>
          <Stack divider={<StackDivider />} direction="row" mt={3} mb={10}>
            <LangButton
              lang={"Eng"}
              current={currentLanguage}
              click={handleChangeLanguage}
              value="eng"
            />
            <LangButton
              lang={"Esp"}
              current={currentLanguage}
              click={handleChangeLanguage}
              value="esp"
            />
          </Stack>
          <Links variant="responsive" />
        </BlurCard>
      </Container>
    </Box>
  );
};

export default Header;
