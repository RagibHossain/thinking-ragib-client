import React from 'react';
import { Card, Text, Group, Stack } from '@mantine/core';
import { IconClock, IconCalendar } from '@tabler/icons-react';
import { deriveExcerpt, calculateReadTime } from '../../../utils/articleHelpers';
import classes from './ArticleCard.module.css';

const ArticleCard = ({ 
  title, 
  content, 
  published_at, 
  onClick 
}) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const excerpt = deriveExcerpt(content);
  const readTime = calculateReadTime(content);

  return (
    <Card
      className={classes.card}
      onClick={onClick}
    >
      <Stack className={classes.cardContent}>
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
              {formatDate(published_at)}
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

export default ArticleCard;

