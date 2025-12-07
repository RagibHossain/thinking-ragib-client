import React from 'react';
import { MantineProvider, Box, Container, Stack, Text } from '@mantine/core';
import { mantineTheme } from '../theme/colors';
import classes from './AboutPage.module.css';
import profileImage from '../assets/Ragib_1MB.jpg';

const AboutPage = () => {
    return (
        <MantineProvider theme={mantineTheme}>
            <Box className={classes.container}>
                <Container size="md">
                    <Stack className={classes.content}>
                        {/* Image Section */}
                        <div className={classes.imageSection}>
                            <img
                                src={profileImage}
                                alt="Ragib Ibne Hossain"
                                className={classes.profileImage}
                            />
                        </div>

                        {/* Text Section */}
                        <Stack className={classes.textSection}>
                            <Text className={classes.title}>
                                About Me
                            </Text>
                            
                            <Text className={classes.paragraph}>
                                Hello! My name is Ragib Ibne Hossain, and I am passionate about building
                                innovative and impactful software solutions. With a strong background in
                                web development, I enjoy creating user-friendly and efficient applications.
                            </Text>
                            
                            <Text className={classes.paragraph}>
                                In my free time, I love exploring new technologies, reading books, and
                                sharing knowledge with others. I believe in continuous learning and
                                strive to improve myself every day.
                            </Text>
                            
                            <Text className={classes.paragraph}>
                                Feel free to connect with me to discuss ideas, collaborate on projects,
                                or just have a friendly chat!
                            </Text>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </MantineProvider>
    );
};

export default AboutPage;