import React from 'react';
import { useParams } from 'react-router-dom';
import { MantineProvider, Box, Container, Text, Center } from '@mantine/core';
import { BlogPostHeader, BlogPostContent } from '../components/blog';
import { mockPosts } from '../data/mockPosts';
import { blogContent } from '../data/blogContent';
import { mantineTheme } from '../theme/colors';

const BlogPostPage = () => {
  const { id } = useParams();
  const postId = parseInt(id);
  
  // Find the post by ID
  const post = mockPosts.find(p => p.id === postId);
  const content = blogContent[postId];

  if (!post) {
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
                Blog post not found
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
        <BlogPostHeader
          title={post.title}
          publishDate={post.publishDate}
          readTime={post.readTime}
          tags={post.tags}
          excerpt={post.excerpt}
        />
        
        <BlogPostContent content={content} />
      </Box>
    </MantineProvider>
  );
};

export default BlogPostPage;
