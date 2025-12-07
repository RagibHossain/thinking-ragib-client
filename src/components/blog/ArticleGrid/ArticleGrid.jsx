import React from 'react';
import { SimpleGrid, Container, Stack, Text, Center, Loader } from '@mantine/core';
import ArticleCard from '../ArticleCard/ArticleCard';
import classes from './ArticleGrid.module.css';

const ArticleGrid = ({ 
  articles = [], 
  loading = false, 
  onArticleClick = () => {},
  title = "Latest Articles"
}) => {
  if (loading) {
    return (
      <Container className={classes.container}>
        <Center className={classes.loadingContainer}>
          <Stack className={classes.loadingStack}>
            <Loader className={classes.loader} />
            <Text className={classes.loadingText}>Loading articles...</Text>
          </Stack>
        </Center>
      </Container>
    );
  }

  if (articles.length === 0) {
    return (
      <Container className={classes.container}>
        <Center className={classes.emptyContainer}>
          <Stack className={classes.emptyStack}>
            <Text className={classes.emptyTitle}>
              No articles found
            </Text>
            <Text className={classes.emptySubtitle}>
              Check back later for new content
            </Text>
          </Stack>
        </Center>
      </Container>
    );
  }

  return (
    <Container className={classes.container}>
      <Stack className={classes.contentStack}>
        {/* Header */}
        <Stack className={classes.headerStack}>
          <Text className={classes.title}>
            {title}
          </Text>
          <Text className={classes.subtitle}>
            Thoughts, ideas, and insights on technology, design, and life
          </Text>
        </Stack>

        {/* Articles Grid */}
        <SimpleGrid className={classes.grid} cols={3}>
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id || index}
              title={article.title}
              content={article.content}
              published_at={article.published_at}
              onClick={() => onArticleClick(article)}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default ArticleGrid;

