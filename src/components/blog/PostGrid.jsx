import React from 'react';
import { SimpleGrid, Container, Stack, Text, Center, Loader } from '@mantine/core';
import PostCard from './PostCard';

const PostGrid = ({ 
  posts = [], 
  loading = false, 
  onPostClick = () => {},
  title = "Latest Posts"
}) => {
  if (loading) {
    return (
      <Container size="xl" py="xl">
        <Center style={{ minHeight: '200px' }}>
          <Stack align="center" spacing="md">
            <Loader size="lg" color="#2E8A99" />
            <Text color="dimmed">Loading posts...</Text>
          </Stack>
        </Center>
      </Container>
    );
  }

  if (posts.length === 0) {
    return (
      <Container size="xl" py="xl">
        <Center style={{ minHeight: '200px' }}>
          <Stack align="center" spacing="md">
            <Text size="xl" color="dimmed" style={{ color: '#6c757d' }}>
              No posts found
            </Text>
            <Text size="md" color="dimmed" style={{ color: '#adb5bd' }}>
              Check back later for new content
            </Text>
          </Stack>
        </Center>
      </Container>
    );
  }

  return (
    <Container size="xl" py="xl">
      <Stack spacing="xl">
        {/* Header */}
        <Stack spacing="xs" align="center">
          <Text
            size="3rem"
            weight={700}
            style={{
              color: '#0E2954',
              textAlign: 'center',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            {title}
          </Text>
          <Text
            size="lg"
            color="dimmed"
            style={{
              color: '#6c757d',
              textAlign: 'center',
              maxWidth: '600px'
            }}
          >
            Thoughts, ideas, and insights on technology, design, and life
          </Text>
        </Stack>

        {/* Posts Grid */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing="xl"
          verticalSpacing="xl"
          style={{ marginTop: '2rem' }}
        >
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
