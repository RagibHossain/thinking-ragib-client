import React from 'react';
import { useParams } from 'react-router-dom';
import { MantineProvider, Box, Container, Text, Center } from '@mantine/core';
import { ArticleHeader, ArticleContent } from '../components/blog';
import { mockArticles } from '../data/mockArticles';
import { mantineTheme } from '../theme/colors';

const ArticlePage = () => {
  const { slug } = useParams();
  
  // Find the article by slug
  const article = mockArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <MantineProvider theme={mantineTheme}>
        <Box
          style={{
            minHeight: '100vh',
            backgroundColor: '#ffffff',
            paddingTop: '2rem'
          }}
        >
          <Container size="md">
            <Center style={{ minHeight: '400px' }}>
              <Text size="xl" color="dimmed" style={{ color: '#6c757d' }}>
                Article not found
              </Text>
            </Center>
          </Container>
        </Box>
      </MantineProvider>
    );
  }

  return (
    <MantineProvider theme={mantineTheme}>
      <Box
        style={{
          minHeight: '100vh',
          backgroundColor: '#ffffff'
        }}
      >
        <ArticleHeader
          title={article.title}
          content={article.content}
          published_at={article.published_at}
        />
        
        <ArticleContent content={article.content} />
      </Box>
    </MantineProvider>
  );
};

export default ArticlePage;

