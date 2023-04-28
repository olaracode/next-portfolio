"use client";
import { Container, BlurCard, Article as ArticleWraper } from "./misc";
import ReactMarkdown from "react-markdown";

const Article = ({ content }: { content: string }) => {
  return (
    <>
      <Container mb={10} id={"about"}>
        <BlurCard border="4px solid" color="brand.white">
          <ArticleWraper>
            <ReactMarkdown>{content}</ReactMarkdown>
          </ArticleWraper>
        </BlurCard>
      </Container>
    </>
  );
};

export default Article;
