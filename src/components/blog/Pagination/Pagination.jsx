import React from 'react';
import { Pagination as MantinePagination, Center, Group, Text } from '@mantine/core';
import classes from './Pagination.module.css';

const Pagination = ({ 
  currentPage = 1, 
  totalPages = 1, 
  onPageChange = () => {},
  totalPosts = 0,
  postsPerPage = 9,
  totalArticles = 0,
  articlesPerPage = 9
}) => {
  if (totalPages <= 1) return null;

  // Support both old (posts) and new (articles) prop names for backward compatibility
  const total = totalArticles || totalPosts;
  const perPage = articlesPerPage || postsPerPage;

  const startArticle = (currentPage - 1) * perPage + 1;
  const endArticle = Math.min(currentPage * perPage, total);

  return (
    <Center className={classes.center}>
      <Group className={classes.group}>
        <Text className={classes.infoText}>
          Showing {startArticle}-{endArticle} of {total} articles
        </Text>
        
        <MantinePagination
          value={currentPage}
          onChange={onPageChange}
          total={totalPages}
          withEdges
          className={classes.pagination}
        />
      </Group>
    </Center>
  );
};

export default Pagination;
