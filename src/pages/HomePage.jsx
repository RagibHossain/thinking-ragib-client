import React, { useState, useEffect } from 'react';
import { MantineProvider, Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { ArticleGrid, Pagination } from '../components/blog';
import { mockArticles } from '../data/mockArticles';
import { mantineTheme } from '../theme/colors';

const HomePage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const articlesPerPage = 9;
    const totalPages = Math.ceil(mockArticles.length / articlesPerPage);

    useEffect(() => {
        // Simulate loading
        setLoading(true);
        setTimeout(() => {
            const startIndex = (currentPage - 1) * articlesPerPage;
            const endIndex = startIndex + articlesPerPage;
            setArticles(mockArticles.slice(startIndex, endIndex));
            setLoading(false);
        }, 500);
    }, [currentPage]);

    const navigate = useNavigate();

    const handleArticleClick = (article) => {
        navigate(`/articles/${article.slug}`);
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
                <ArticleGrid
                    articles={articles}
                    loading={loading}
                    onArticleClick={handleArticleClick}
                    title="Thinking Ragib"
                />
                
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    totalArticles={mockArticles.length}
                    articlesPerPage={articlesPerPage}
                />
            </Box>
        </MantineProvider>
    );
};

export default HomePage;