import React, { useState } from 'react';
import { MantineProvider, Box, Container, Stack, Text, TextInput, PasswordInput, Button, Alert } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { mantineTheme } from '../theme/colors';
import { useAuth } from '../context/AuthContext';
import classes from './LoginPage.module.css';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        // Clear error for this field when user starts typing
        if (errors[field]) {
            setErrors({ ...errors, [field]: '' });
        }
        if (submitError) {
            setSubmitError('');
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError('');
        
        if (!validateForm()) {
            return;
        }

        setLoading(true);
        
        try {
            const result = await login(formData.email, formData.password);
            
            if (result.success) {
                navigate('/');
            } else {
                setSubmitError(result.error || 'Invalid email or password');
            }
        } catch {
            setSubmitError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <MantineProvider theme={mantineTheme}>
            <Box className={classes.container}>
                <Container size="sm">
                    <Stack className={classes.content}>
                        <Text className={classes.title}>
                            Login
                        </Text>
                        
                        <form onSubmit={handleSubmit} className={classes.form}>
                            {submitError && (
                                <Alert color="red" mb="md">
                                    {submitError}
                                </Alert>
                            )}
                            
                            <Stack gap="md">
                                <TextInput
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    error={errors.email}
                                    required
                                    className={classes.input}
                                />
                                
                                <PasswordInput
                                    label="Password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={(e) => handleChange('password', e.target.value)}
                                    error={errors.password}
                                    required
                                    className={classes.input}
                                />
                                
                                <Button
                                    type="submit"
                                    loading={loading}
                                    className={classes.button}
                                    fullWidth
                                >
                                    Login
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Container>
            </Box>
        </MantineProvider>
    );
};

export default LoginPage;

