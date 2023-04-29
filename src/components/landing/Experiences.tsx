"use client";
import { SimpleGrid, GridItem, Heading, Divider } from "@chakra-ui/react";
import { Container, Article, BlurCard } from "../misc";
import TechStack from "../TechStack";
import { experiences } from "@/lib/experiences";

const animation = {
  "@keyframes glow": {
    "0%": {
      boxShadow:
        "0 0 40px rgba(24, 15, 53, 0.5), 0 0 100px rgba(141, 66, 150, 0.5)",
    },
    "50%": {
      boxShadow:
        "0 0 40px rgba(141, 66, 150, 0.6), 0 0 100px rgba(11, 14, 77, 0.6)",
    },
    "100%": {
      boxShadow:
        "0 0 40px rgba(11, 14, 77, 0.6), 0 0 100px rgba(141, 66, 150, 0.5)",
    },
  },
};
const Experiences = () => {
  return (
    <>
      <Container mt={40} mb={10}>
        <Heading id="experiences">Experiencia</Heading>
        <SimpleGrid columns={{ base: 1, lg: 2, "2xl": 3 }} spacing={5}>
          {experiences.map((experience, index) => (
            <GridItem
              key={`experience-${experience.title}-${index}`}
              height="100%"
            >
              <BlurCard
                height="100%"
                border="2px solid"
                sx={{
                  ...animation,
                  _hover: {
                    animation: "glow 5s ease-in-out infinite alternate",
                  },
                }}
              >
                <Article
                  sx={{
                    h3: {
                      fontSize: "20px",
                      fontWeight: "bold",
                    },
                    span: {
                      fontSize: "14px",
                      fontWeight: "black",
                    },
                  }}
                >
                  <h3>{experience.title}</h3>
                  <i>@{experience.company}</i>

                  <p>{experience.description}</p>
                  <span>
                    Del {experience.startDate}{" "}
                    {experience.endDate && <>a {experience.endDate}</>}
                  </span>
                </Article>
                <Divider my={2} />
                <TechStack stack={experience.tags} />
              </BlurCard>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Experiences;
