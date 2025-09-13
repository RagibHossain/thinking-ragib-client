import React, { useState, useEffect } from 'react';
import { MantineProvider, Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { PostGrid, Pagination } from '../components/blog';
import { mockPosts } from '../data/mockPosts';
import { mantineTheme } from '../theme/colors';

const HomePage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const postsPerPage = 9;
    const totalPages = Math.ceil(mockPosts.length / postsPerPage);

    useEffect(() => {
        // Simulate loading
        setLoading(true);
        setTimeout(() => {
            const startIndex = (currentPage - 1) * postsPerPage;
            const endIndex = startIndex + postsPerPage;
            setPosts(mockPosts.slice(startIndex, endIndex));
            setLoading(false);
        }, 500);
    }, [currentPage]);

    const navigate = useNavigate();

    const handlePostClick = (post) => {
        navigate(`/blog/${post.id}`);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <MantineProvider theme={mantineTheme}>
            <Box
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#ffffff',
                    paddingTop: '2rem',
                    paddingBottom: '2rem'
                }}
            >
                <PostGrid
                    posts={posts}
                    loading={loading}
                    onPostClick={handlePostClick}
                    title="Thinking Ragib"
                />
                
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    totalPosts={mockPosts.length}
                    postsPerPage={postsPerPage}
                />
            </Box>
        </MantineProvider>
    );
};

export default HomePage;