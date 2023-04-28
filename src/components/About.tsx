"use client";
import React from "react";
import { Container, BlurCard, Article } from "./misc";
import BlackHole from "./SolarSystem/BlackHole";
import ReactMarkdown from "react-markdown";
import { about } from "@/lib/About";
const About = () => {
  return (
    <>
      <Container mb={10} id={"about"}>
        <BlurCard border="4px solid" color="brand.white">
          <Article>
            <ReactMarkdown>{about}</ReactMarkdown>
          </Article>
        </BlurCard>
      </Container>
    </>
  );
};

export default About;
