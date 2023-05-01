"use client";
import React from "react";
import Article from "../Article";
import TechStack from "../TechStack";
import useLang from "@/language/useLang";
import { stack } from "@/lib/About";
const About = () => {
  const { content } = useLang();
  return (
    <Article
      content={content.about}
      Stack={<TechStack title="Stack" stack={stack} />}
    />
  );
};

export default About;
