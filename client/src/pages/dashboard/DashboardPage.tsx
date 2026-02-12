import React, { useState } from 'react';
import {
  AppShell,
  Text,
  Group,
  TextInput,
  Button,
  Avatar,
  Menu,
  ActionIcon,
  Title,
  Badge,
  Grid,
  Card,
  Image,
  Stack,
  Progress,
  rem,
  Box,
  Tabs,
} from '@mantine/core';
import {
  IconSearch,
  IconPlus,
  IconWorld,
  IconDotsVertical,
  IconClock,
  IconCalendar,
  IconArrowRight,
} from '@tabler/icons-react';

// Dummy data
const WORLDS = [
  {
    id: '1',
    title: 'Aetheria',
    status: 'In Progress',
    lastModified: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: { characters: 42, locations: 15, events: 8 },
    summary: 'A high-fantasy world floating among the clouds, powered by ancient crystals and mythical energy sources.',
    collaborators: ['https://i.pravatar.cc/150?u=1', 'https://i.pravatar.cc/150?u=2'],
  },
  {
    id: '2',
    title: 'Neon Nexus',
    status: 'Completed',
    lastModified: '1 day ago',
    image: 'https://images.unsplash.com/photo-1614850523296-e8c041de4092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: { characters: 128, locations: 54, events: 32 },
    summary: 'A cyberpunk megalopolis where technology and magic blur the lines of reality in a neon-drenched future.',
    collaborators: ['https://i.pravatar.cc/150?u=3'],
  },
  {
    id: '3',
    title: 'Shadow Realm',
    status: 'Archived',
    lastModified: '1 month ago',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: { characters: 12, locations: 4, events: 2 },
    summary: 'A dark, desolate wasteland where shadows come alive and feed on memories of a forgotten past.',
    collaborators: [],
  },
];

const DashboardPage: React.FC = () => {
  const [selectedWorld, setSelectedWorld] = useState(WORLDS[0]);
  const [activeTab, setActiveTab] = useState<string | null>('all');

  return (
    <AppShell
      header={{ height: 70 }}
      aside={{ width: 350, breakpoint: 'md' }}
      padding="md"
      styles={{
        main: {
          backgroundColor: '#050507',
          minHeight: '100vh',
        },
      }}
    >
      {/* Header */}
      <AppShell.Header
        px="xl"
        style={{
          backgroundColor: 'rgba(5, 5, 7, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <Group h="100%" justify="space-between">
          <Group gap="xs">
            <IconWorld size={32} color="#5757FF" stroke={1.5} />
            <Text fw={900} size="xl" style={{ letterSpacing: '1px' }}>
              WORLDBUILDER
            </Text>
          </Group>

          <Group gap="xl">
            <TextInput
              placeholder="Search worlds..."
              leftSection={<IconSearch size={16} />}
              styles={{
                input: {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  width: rem(350),
                  transition: 'border-color 0.2s ease',
                  '&:focus': {
                    borderColor: '#5757FF',
                  }
                },
              }}
              visibleFrom="sm"
            />
            <Button
              leftSection={<IconPlus size={18} />}
              color="electricBlue"
              variant="filled"
            >
              New Project
            </Button>
            <Menu shadow="md" width={200} position="bottom-end">
              <Menu.Target>
                <Avatar
                  src="https://i.pravatar.cc/150?u=me"
                  radius="xl"
                  style={{ cursor: 'pointer', border: '2px solid #5757FF' }}
                />
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item>Settings</Menu.Item>
                <Menu.Item>Messages</Menu.Item>
                <Menu.Divider />
                <Menu.Item color="red">Logout</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>

      {/* Main Content */}
      <AppShell.Main>
        <Stack gap="xl" p="md">
          <Group justify="space-between">
            <Title order={1} fw={900} size={rem(36)}>
              My Worlds
            </Title>
            <Tabs value={activeTab} onChange={setActiveTab} variant="pills" color="electricBlue">
              <Tabs.List>
                <Tabs.Tab value="all">All Projects</Tabs.Tab>
                <Tabs.Tab value="recent">Recent</Tabs.Tab>
                <Tabs.Tab value="shared">Shared</Tabs.Tab>
              </Tabs.List>
            </Tabs>
          </Group>

          <Grid gutter="xl">
            {WORLDS.map((world) => (
              <Grid.Col span={{ base: 12, sm: 6, xl: 4 }} key={world.id}>
                <Card
                  padding="xl"
                  onClick={() => setSelectedWorld(world)}
                  style={{
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: selectedWorld?.id === world.id ? 'translateY(-8px)' : 'none',
                    borderColor: selectedWorld?.id === world.id ? '#5757FF' : 'rgba(255, 255, 255, 0.05)',
                    backgroundColor: selectedWorld?.id === world.id ? 'rgba(87, 87, 255, 0.05)' : 'rgba(30, 30, 40, 0.4)',
                    boxShadow: selectedWorld?.id === world.id ? '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(87, 87, 255, 0.1)' : '0 10px 20px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <Card.Section pos="relative">
                    <Image
                      src={world.image}
                      height={200}
                      alt={world.title}
                      fallbackSrc="https://placehold.co/600x400?text=No+Image"
                    />
                    <Box
                      pos="absolute"
                      top={12}
                      right={12}
                    >
                      <Badge 
                        variant="filled" 
                        color={world.status === 'Completed' ? 'green' : world.status === 'Archived' ? 'gray' : 'electricBlue'}
                        size="sm"
                        styles={{ root: { backdropFilter: 'blur(4px)', backgroundColor: 'rgba(0,0,0,0.4)' } }}
                      >
                        {world.status}
                      </Badge>
                    </Box>
                  </Card.Section>

                  <Stack mt="md" gap="xs">
                    <Group justify="space-between" align="flex-start">
                      <Text fw={800} size="lg">
                        {world.title}
                      </Text>
                      <ActionIcon variant="subtle" color="gray">
                        <IconDotsVertical size={18} />
                      </ActionIcon>
                    </Group>
                    <Text size="sm" c="dimmed" lineClamp={2} style={{ height: rem(40) }}>
                      {world.summary}
                    </Text>
                    
                    <Group mt="lg" justify="space-between">
                      <Group gap="xs">
                        <IconClock size={14} color="var(--mantine-color-electricBlue-6)" />
                        <Text size="xs" c="dimmed">
                          {world.lastModified}
                        </Text>
                      </Group>
                      <Avatar.Group spacing="sm">
                        {world.collaborators.map((c, i) => (
                          <Avatar key={i} src={c} size="xs" radius="xl" />
                        ))}
                        {world.collaborators.length === 0 && (
                           <Avatar size="xs" radius="xl" />
                        )}
                      </Avatar.Group>
                    </Group>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </AppShell.Main>

      {/* Aside - Inspector Sidebar */}
      <AppShell.Aside
        p="xl"
        style={{
          backgroundColor: 'rgba(10, 10, 14, 0.6)',
          backdropFilter: 'blur(20px)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
          zIndex: 100,
        }}
      >
        {selectedWorld ? (
          <Stack h="100%" justify="space-between">
            <Stack gap="xl">
              <Stack gap="xs">
                <Text size="xs" fw={700} c="electricBlue" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>
                  Project Inspector
                </Text>
                <Title order={2} fw={900} size={rem(28)}>
                  {selectedWorld.title}
                </Title>
                <Group gap="xs">
                    <Badge variant="dot" color="electricBlue">{selectedWorld.status}</Badge>
                    <Text size="xs" c="dimmed">•</Text>
                    <Text size="xs" c="dimmed">ID: {selectedWorld.id.padStart(4, '0')}</Text>
                </Group>
              </Stack>

              <Stack gap="sm">
                <Text size="sm" fw={700} c="dimmed" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Summary</Text>
                <Text size="sm" style={{ lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
                  {selectedWorld.summary}
                </Text>
              </Stack>

              <Stack gap="sm">
                <Text size="sm" fw={700} c="dimmed" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Statistics</Text>
                <Stack gap="md">
                  <Box>
                    <Group justify="space-between" mb={6}>
                      <Text size="xs" fw={500}>Characters</Text>
                      <Text size="xs" fw={700} c="electricBlue">{selectedWorld.stats.characters}</Text>
                    </Group>
                    <Progress value={70} color="electricBlue" size="xs" radius="xl" />
                  </Box>
                  <Box>
                    <Group justify="space-between" mb={6}>
                      <Text size="xs" fw={500}>Locations</Text>
                      <Text size="xs" fw={700} c="cyan">{selectedWorld.stats.locations}</Text>
                    </Group>
                    <Progress value={45} color="cyan" size="xs" radius="xl" />
                  </Box>
                  <Box>
                    <Group justify="space-between" mb={6}>
                      <Text size="xs" fw={500}>Timeline Events</Text>
                      <Text size="xs" fw={700} c="grape">{selectedWorld.stats.events}</Text>
                    </Group>
                    <Progress value={30} color="grape" size="xs" radius="xl" />
                  </Box>
                </Stack>
              </Stack>

              <Stack gap="sm">
                <Text size="sm" fw={700} c="dimmed" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Collaborators</Text>
                <Group gap="sm">
                  {selectedWorld.collaborators.length > 0 ? (
                    selectedWorld.collaborators.map((c, i) => (
                      <Avatar key={i} src={c} radius="xl" size="md" style={{ border: '2px solid rgba(255,255,255,0.1)' }} />
                    ))
                  ) : (
                    <Text size="xs" c="dimmed">Private project</Text>
                  )}
                  <ActionIcon radius="xl" variant="light" color="electricBlue" size="md">
                    <IconPlus size={18} />
                  </ActionIcon>
                </Group>
              </Stack>

              <Stack gap="xs">
                <Group gap="xs">
                  <IconCalendar size={14} color="gray" />
                  <Text size="xs" c="dimmed">Created on Jan 12, 2026</Text>
                </Group>
                <Group gap="xs">
                  <IconClock size={14} color="gray" />
                  <Text size="xs" c="dimmed">Last edited {selectedWorld.lastModified}</Text>
                </Group>
              </Stack>
            </Stack>

            <Button
              size="lg"
              fullWidth
              rightSection={<IconArrowRight size={20} />}
              color="electricBlue"
              h={54}
              style={{
                boxShadow: '0 10px 20px rgba(87, 87, 255, 0.2)',
                fontSize: rem(16),
              }}
            >
              Enter Workspace
            </Button>
          </Stack>
        ) : (
          <Stack align="center" justify="center" h="100%" gap="md">
            <IconWorld size={64} color="rgba(255, 255, 255, 0.05)" />
            <Text c="dimmed" size="sm">Select a world to view its details and enter the workspace.</Text>
          </Stack>
        )}
      </AppShell.Aside>
    </AppShell>
  );
};

export default DashboardPage;
