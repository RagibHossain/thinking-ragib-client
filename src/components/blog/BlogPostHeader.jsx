import React from 'react';
import { Container, Title, Text, Group, Badge, Stack, ActionIcon } from '@mantine/core';
import { IconCalendar, IconClock, IconArrowLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const BlogPostHeader = ({ 
  title, 
  publishDate, 
  readTime, 
  tags = [],
  excerpt 
}) => {
  const navigate = useNavigate();

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Container size="md" py="xl">
      <Stack spacing="xl">
        {/* Back Button */}
        <ActionIcon
          variant="subtle"
          size="lg"
          onClick={() => navigate('/')}
          style={{
            alignSelf: 'flex-start',
            color: '#2E8A99'
          }}
        >
          <IconArrowLeft size={20} />
        </ActionIcon>

        {/* Tags */}
        {tags.length > 0 && (
          <Group spacing="xs">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="light"
                size="md"
                style={{
                  backgroundColor: '#f8f9fa',
                  color: '#0E2954',
                  border: '1px solid #e9ecef'
                }}
              >
                {tag}
              </Badge>
            ))}
          </Group>
        )}

        {/* Title */}
        <Title
          order={1}
          style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#0E2954',
            lineHeight: 1.2,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '-0.02em'
          }}
        >
          {title}
        </Title>

        {/* Excerpt */}
        {excerpt && (
          <Text
            size="xl"
            style={{
              color: '#6c757d',
              lineHeight: 1.6,
              fontSize: '1.25rem',
              maxWidth: '800px'
            }}
          >
            {excerpt}
          </Text>
        )}

        {/* Meta information */}
        <Group spacing="xl">
          <Group spacing="xs">
            <IconCalendar size={18} color="#2E8A99" />
            <Text size="md" style={{ color: '#6c757d' }}>
              {formatDate(publishDate)}
            </Text>
          </Group>
          
          <Group spacing="xs">
            <IconClock size={18} color="#2E8A99" />
            <Text size="md" style={{ color: '#6c757d' }}>
              {readTime} min read
            </Text>
          </Group>
        </Group>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            backgroundColor: '#e9ecef',
            margin: '2rem 0'
          }}
        />
      </Stack>
    </Container>
  );
};

export default BlogPostHeader;
