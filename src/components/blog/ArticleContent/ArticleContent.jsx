import React from 'react';
import { Container, Text, Stack } from '@mantine/core';
import classes from './ArticleContent.module.css';

const ArticleContent = ({ content }) => {
  // Split content into paragraphs for better formatting
  const paragraphs = content ? content.split('\n\n') : [];

  return (
    <Container className={classes.container}>
      <Stack className={classes.contentStack}>
        {paragraphs.map((paragraph, index) => (
          <Text
            key={index}
            className={classes.paragraph}
          >
            {paragraph}
          </Text>
        ))}
      </Stack>
    </Container>
  );
};

export default ArticleContent;

