import React from 'react';
import { SimpleGrid, Container, Stack, Text, Center, Loader } from '@mantine/core';
import PostCard from '../PostCard/PostCard';
import classes from './PostGrid.module.css';

const PostGrid = ({ 
  posts = [], 
  loading = false, 
  onPostClick = () => {},
  title = "Latest Posts"
}) => {
  if (loading) {
    return (
      <Container className={classes.container}>
        <Center className={classes.loadingContainer}>
          <Stack className={classes.loadingStack}>
            <Loader className={classes.loader} />
            <Text className={classes.loadingText}>Loading posts...</Text>
          </Stack>
        </Center>
      </Container>
    );
  }

  if (posts.length === 0) {
    return (
      <Container className={classes.container}>
        <Center className={classes.emptyContainer}>
          <Stack className={classes.emptyStack}>
            <Text className={classes.emptyTitle}>
              No posts found
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

        {/* Posts Grid */}
        <SimpleGrid className={classes.grid}>
          {posts.map((post, index) => (
            <PostCard
              key={post.id || index}
              title={post.title}
              excerpt={post.excerpt}
              publishDate={post.publishDate}
              readTime={post.readTime}
              tags={post.tags}
              onClick={() => onPostClick(post)}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default PostGrid;
