import React from 'react';
import { Pagination as MantinePagination, Center, Group, Text } from '@mantine/core';

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
    <Center py="xl">
      <Group spacing="xl" align="center">
        <Text size="sm" color="dimmed" style={{ color: '#6c757d' }}>
          Showing {startPost}-{endPost} of {totalPosts} posts
        </Text>
        
        <MantinePagination
          value={currentPage}
          onChange={onPageChange}
          total={totalPages}
          size="md"
          radius="md"
          withEdges
          styles={{
            control: {
              '&[data-active]': {
                backgroundColor: '#2E8A99',
                borderColor: '#2E8A99',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#1F6E8C',
                }
              },
              '&:hover:not([data-active])': {
                backgroundColor: '#f8f9fa',
                borderColor: '#84A7A1',
              }
            }
          }}
        />
      </Group>
    </Center>
  );
};

export default Pagination;
