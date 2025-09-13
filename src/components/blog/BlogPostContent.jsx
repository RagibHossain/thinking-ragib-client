import React from 'react';
import { Container, Text, Stack } from '@mantine/core';

const BlogPostContent = ({ content }) => {
  // Split content into paragraphs for better formatting
  const paragraphs = content ? content.split('\n\n') : [];

  return (
    <Container size="md" pb="xl">
      <Stack spacing="lg">
        {paragraphs.map((paragraph, index) => (
          <Text
            key={index}
            size="lg"
            style={{
              color: '#343a40',
              lineHeight: 1.7,
              fontSize: '1.125rem',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            {paragraph}
          </Text>
        ))}
      </Stack>
    </Container>
  );
};

export default BlogPostContent;
