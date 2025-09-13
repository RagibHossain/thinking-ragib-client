import React from 'react';
import { Pagination as MantinePagination, Center, Group, Text } from '@mantine/core';
import classes from './Pagination.module.css';

const Pagination = ({ 
  currentPage = 1, 
  totalPages = 1, 
  onPageChange = () => {},
  totalPosts = 0,
  postsPerPage = 9
}) => {
  if (totalPages <= 1) return null;

  const startPost = (currentPage - 1) * postsPerPage + 1;
  const endPost = Math.min(currentPage * postsPerPage, totalPosts);

  return (
    <Center className={classes.center}>
      <Group className={classes.group}>
        <Text className={classes.infoText}>
          Showing {startPost}-{endPost} of {totalPosts} posts
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
