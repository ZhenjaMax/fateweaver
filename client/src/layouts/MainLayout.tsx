import React from 'react';
import {
  ActionIcon,
  AppShell,
  Button,
  Container,
  Group,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { IconBook, IconMoon, IconSun } from '@tabler/icons-react';
import { Outlet, useNavigate } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const { toggleColorScheme } = useMantineColorScheme();
  const colorScheme = useComputedColorScheme('dark');

  const borderColor = colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3];
  const headerBackground = colorScheme === 'dark' ? theme.colors.dark[7] : theme.white;
  const footerBackground = colorScheme === 'dark' ? theme.colors.dark[7] : theme.white;

  return (
    <AppShell header={{ height: 72 }} footer={{ height: 64 }} padding={0}>
      <AppShell.Header style={{ backgroundColor: headerBackground, borderBottom: `1px solid ${borderColor}` }}>
        <Container size="xl" style={{ height: '100%' }}>
          <Group h="100%" justify="space-between">
            <Group gap="xs" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              <IconBook size={22} color={theme.colors.indigo[4]} />
              <Text fw={700} style={{ letterSpacing: '0.3rem' }}>
                FATEWEAVER
              </Text>
            </Group>
            <Group gap="sm">
              <Button variant="outline" onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button onClick={() => navigate('/register')}>Get Started</Button>
              <ActionIcon variant="subtle" onClick={() => toggleColorScheme()} aria-label="Toggle color scheme">
                {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
              </ActionIcon>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main style={{ minHeight: 'calc(100vh - 136px)' }}>
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer style={{ backgroundColor: footerBackground, borderTop: `1px solid ${borderColor}` }}>
        <Container size="xl" style={{ height: '100%' }}>
          <Group h="100%" justify="center">
            <Text size="sm" c="dimmed">
              Copyright © FateWeaver {new Date().getFullYear()}.
            </Text>
          </Group>
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
};

export default MainLayout;
