"use client";
import { Container, BlurCard, Article as ArticleWraper } from "./misc";
import ReactMarkdown from "react-markdown";

const Article = ({
  content,
  Stack,
}: {
  content: string;
  Stack?: React.ReactNode;
}) => {
  return (
    <>
      <Container mb={10} id={"about"}>
        <BlurCard border="4px solid" color="brand.white">
          <ArticleWraper>
            <ReactMarkdown>{content}</ReactMarkdown>
          </ArticleWraper>
          {Stack && Stack}
        </BlurCard>
      </Container>
    </>
  );
};

export default Article;
