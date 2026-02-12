import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Text, Center, Loader, Stack } from '@mantine/core';

const AuthCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      // Store token in localStorage
      localStorage.setItem('token', token);
      
      // Navigate to dashboard or home
      navigate('/dashboard'); 
    } else {
        // If no token, redirect to login
        navigate('/login');
    }
  }, [searchParams, navigate]);

  return (
    <Center style={{ height: '100vh' }}>
      <Stack align="center">
        <Loader size="xl" />
        <Text>Authenticating...</Text>
      </Stack>
    </Center>
  );
};

export default AuthCallback;
