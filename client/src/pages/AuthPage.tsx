import React, { useState } from 'react';
import {
  Anchor,
  Box,
  Button,
  Container,
  Divider,
  Paper,
  PasswordInput,
  Stack,
  Tabs,
  Text,
  TextInput,
  Title,
  useComputedColorScheme,
} from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface AuthPageProps {
  initialMode?: 'login' | 'register';
}

const AuthPage: React.FC<AuthPageProps> = ({ initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const colorScheme = useComputedColorScheme('dark');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = { email, password };
    console.log('Values:', values);
    alert(JSON.stringify(values, null, 2));
    navigate('/dashboard');
  };

  const panelBackground = colorScheme === 'dark' ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255, 255, 255, 0.9)';

  return (
    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <Container size={420}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <Paper radius="lg" withBorder p="xl" style={{ backdropFilter: 'blur(10px)', backgroundColor: panelBackground }}>
            <Stack gap={4} align="center">
              <Title order={2} fw={700}>
                FateWeaver
              </Title>
              <Text size="sm" c="dimmed">
                {mode === 'login' ? 'Welcome back, Traveler' : 'Begin your journey'}
              </Text>
            </Stack>

            <Tabs value={mode} onChange={(value) => value && setMode(value as 'login' | 'register')} mt="lg">
              <Tabs.List grow>
                <Tabs.Tab value="login">Login</Tabs.Tab>
                <Tabs.Tab value="register">Register</Tabs.Tab>
              </Tabs.List>
            </Tabs>

            <Box component="form" onSubmit={handleSubmit}>
              <Stack mt="md" gap="md">
                <TextInput
                  label="Email Address"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.currentTarget.value)}
                  required
                />
                <PasswordInput
                  label="Password"
                  value={password}
                  onChange={(event) => setPassword(event.currentTarget.value)}
                  required
                />
                <Button type="submit" size="md">
                  {mode === 'login' ? 'Sign In' : 'Sign Up'}
                </Button>

                <Divider label="or" labelPosition="center" />

                <Button
                  variant="outline"
                  leftSection={<IconBrandGoogle size={18} />}
                  onClick={() => alert('Google Auth to be implemented')}
                >
                  Continue with Google
                </Button>

                <Anchor component="button" type="button" size="sm" c="dimmed">
                  Forgot password?
                </Anchor>
              </Stack>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AuthPage;
