import React from 'react';
import {
  Box,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useComputedColorScheme,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconBook, IconClock, IconMap, IconUsers } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <Card className="feature-card" withBorder radius="lg" padding="xl">
    <ThemeIcon variant="light" size={46} radius="md">
      {icon}
    </ThemeIcon>
    <Stack mt="md" gap={6}>
      <Text fw={700} size="lg">
        {title}
      </Text>
      <Text c="dimmed">{description}</Text>
    </Stack>
  </Card>
);

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const colorScheme = useComputedColorScheme('dark');

  const heroBackground =
    colorScheme === 'dark'
      ? 'radial-gradient(circle at 50% 0%, #312e81 0%, #0f172a 60%)'
      : 'radial-gradient(circle at 50% 0%, #e0e7ff 0%, #f8fafc 60%)';

  return (
    <Box>
      <Box style={{ padding: '6rem 0', textAlign: 'center', background: heroBackground }}>
        <Container size="md">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Title order={1} fw={800} style={{ fontSize: 'clamp(2.4rem, 6vw, 3.8rem)' }}>
              Weave Your{' '}
              <Text component="span" inherit c="indigo.4">
                Destiny
              </Text>
            </Title>
            <Text size="lg" c="dimmed" mt="md" style={{ maxWidth: 800, margin: '0 auto', lineHeight: 1.6 }}>
              The ultimate world-building tool for Game Masters and Writers. Organize campaigns, map your worlds, and
              track timelines in one immersive platform.
            </Text>
            <Group justify="center" mt="xl" gap="md">
              <Button size="lg" onClick={() => navigate('/register')}>
                Start Creating Free
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/login')}>
                Log In
              </Button>
            </Group>
          </motion.div>
        </Container>
      </Box>

      <Container size="lg" style={{ padding: '4rem 0' }}>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          <FeatureCard
            icon={<IconBook size={28} />}
            title="Wiki & Lore"
            description="Create rich Markdown articles for your characters, locations, and items."
          />
          <FeatureCard
            icon={<IconMap size={28} />}
            title="Interactive Maps"
            description="Upload world maps, add pins, and link them directly to your lore articles."
          />
          <FeatureCard
            icon={<IconClock size={28} />}
            title="Dynamic Timelines"
            description="Track events across eras. Filter history with an interactive time-slider."
          />
          <FeatureCard
            icon={<IconUsers size={28} />}
            title="Relationship Graphs"
            description="Visualize complex connections between NPCs and factions with node-based graphs."
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default LandingPage;
