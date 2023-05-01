"use client";
import React from "react";
import { Heading, Divider, Link } from "@chakra-ui/react";
import { Container, BlurCard, Article } from "../misc";
import NextLink from "next/link";
import useLang from "@/language/useLang";
const contacts = [
  {
    title: "Email",
    content: "octavioasapchi@gmail.com",
  },
  {
    title: "LinkedIn",
    content: "Octavio Lara",
    url: "www.linkedin.com/in/octavio-lara-",
  },
  {
    title: "Github",
    content: "olaracode",
    url: "https://github.com/olaracode",
  },
];

const animation = {
  "@keyframes glow": {
    "0%": {
      boxShadow:
        "0 0 20px rgba(24, 15, 53, 0.5), 0 0 30px rgba(141, 66, 150, 0.5)",
    },
    "50%": {
      boxShadow:
        "0 0 20px rgba(141, 66, 150, 0.6), 0 0 30px rgba(11, 14, 77, 0.6)",
    },
    "100%": {
      boxShadow:
        "0 0 20px rgba(11, 14, 77, 0.6), 0 0 30px rgba(141, 66, 150, 0.5)",
    },
  },
};
const Contact = () => {
  const { content } = useLang();
  return (
    <Container position="relative" mb={10} id="contact">
      <Heading>{content.sections?.contact}</Heading>
      <BlurCard
        sx={{
          ...animation,
          animation: "glow 5s ease-in-out infinite alternate",
        }}
      >
        <Article>
          {contacts.map((contact, index) => (
            <div key={`contact-${contact.title}-${index}`}>
              <h2>{contact.title}</h2>
              {contact.url ? (
                <Link as={NextLink} href={contact.url} target="_blank">
                  {contact.content}
                </Link>
              ) : (
                <p>{contact.content}</p>
              )}
              <Divider mb={5} />
            </div>
          ))}
        </Article>
      </BlurCard>
    </Container>
  );
};

export default Contact;
