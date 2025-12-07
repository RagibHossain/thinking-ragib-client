import React from 'react';
import { Container, Title, Text, Group, Stack, ActionIcon } from '@mantine/core';
import { IconCalendar, IconClock, IconArrowLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { deriveExcerpt, calculateReadTime } from '../../../utils/articleHelpers';
import classes from './ArticleHeader.module.css';

const ArticleHeader = ({ 
  title, 
  content,
  published_at
}) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const excerpt = deriveExcerpt(content, 200);
  const readTime = calculateReadTime(content);

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

        {/* Divider */}
        <div className={classes.divider} />
      </Stack>
    </Container>
  );
};

export default ArticleHeader;

