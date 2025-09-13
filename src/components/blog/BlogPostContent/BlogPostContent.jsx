import React from 'react';
import { Container, Text, Stack } from '@mantine/core';
import classes from './BlogPostContent.module.css';

const BlogPostContent = ({ content }) => {
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

export default BlogPostContent;
