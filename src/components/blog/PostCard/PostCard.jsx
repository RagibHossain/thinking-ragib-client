import React from 'react';
import { Card, Text, Group, Badge, Stack } from '@mantine/core';
import { IconClock, IconCalendar } from '@tabler/icons-react';
import classes from './PostCard.module.css';

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
      className={classes.card}
      onClick={onClick}
    >
      <Stack className={classes.cardContent}>
        {/* Tags */}
        {tags.length > 0 && (
          <Group className={classes.tagsGroup}>
            {tags.slice(0, 2).map((tag, index) => (
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
        <Text className={classes.title}>
          {title}
        </Text>

        {/* Excerpt */}
        <Text className={classes.excerpt}>
          {excerpt}
        </Text>

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
      </Stack>
    </Card>
  );
};

export default PostCard;
