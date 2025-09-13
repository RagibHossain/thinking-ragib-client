import React from 'react';
import { Container, Title, Text, Group, Badge, Stack, ActionIcon } from '@mantine/core';
import { IconCalendar, IconClock, IconArrowLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import classes from './BlogPostHeader.module.css';

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
    <Container className={classes.container}>
      <Stack className={classes.contentStack}>
        {/* Back Button */}
        <ActionIcon
          onClick={() => navigate('/')}
          className={classes.backButton}
        >
          <IconArrowLeft className={classes.backIcon} />
        </ActionIcon>

        {/* Tags */}
        {tags.length > 0 && (
          <Group className={classes.tagsGroup}>
            {tags.map((tag, index) => (
              <Badge
                key={index}
                className={classes.tag}
              >
                {tag}
              </Badge>
            ))}
          </Group>
        )}

        {/* Title */}
        <Title className={classes.title}>
          {title}
        </Title>

        {/* Excerpt */}
        {excerpt && (
          <Text className={classes.excerpt}>
            {excerpt}
          </Text>
        )}

        {/* Meta information */}
        <Group className={classes.metaContainer}>
          <Group className={classes.metaGroup}>
            <IconCalendar className={classes.metaIcon} />
            <Text className={classes.metaText}>
              {formatDate(publishDate)}
            </Text>
          </Group>
          
          <Group className={classes.metaGroup}>
            <IconClock className={classes.metaIcon} />
            <Text className={classes.metaText}>
              {readTime} min read
            </Text>
          </Group>
        </Group>

        {/* Divider */}
        <div className={classes.divider} />
      </Stack>
    </Container>
  );
};

export default BlogPostHeader;
