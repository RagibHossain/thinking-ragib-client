import React from 'react';
import { Card, Text, Group, Badge, Stack, Box } from '@mantine/core';
import { IconClock, IconCalendar } from '@tabler/icons-react';

const PostCard = ({ 
  title, 
  excerpt, 
  publishDate, 
  readTime, 
  tags = [],
  onClick 
}) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card
      shadow="sm"
      padding="xl"
      radius="md"
      withBorder
      style={{ 
        cursor: 'pointer',
        height: '100%',
        transition: 'all 0.2s ease',
        borderColor: '#e9ecef'
      }}
      onClick={onClick}
      sx={{
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 25px rgba(14, 41, 84, 0.1)',
          borderColor: '#2E8A99'
        }
      }}
    >
      <Stack spacing="md" style={{ height: '100%' }}>
        {/* Tags */}
        {tags.length > 0 && (
          <Group spacing="xs">
            {tags.slice(0, 2).map((tag, index) => (
              <Badge
                key={index}
                variant="light"
                size="sm"
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
        <Text
          size="xl"
          weight={600}
          style={{
            color: '#0E2954',
            lineHeight: 1.3,
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          {title}
        </Text>

        {/* Excerpt */}
        <Text
          size="md"
          color="dimmed"
          style={{
            lineHeight: 1.6,
            flex: 1,
            color: '#495057'
          }}
        >
          {excerpt}
        </Text>

        {/* Meta information */}
        <Group spacing="xl" style={{ marginTop: 'auto' }}>
          <Group spacing="xs">
            <IconCalendar size={16} color="#2E8A99" />
            <Text size="sm" color="dimmed" style={{ color: '#6c757d' }}>
              {formatDate(publishDate)}
            </Text>
          </Group>
          
          <Group spacing="xs">
            <IconClock size={16} color="#2E8A99" />
            <Text size="sm" color="dimmed" style={{ color: '#6c757d' }}>
              {readTime} min read
            </Text>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
};

export default PostCard;
