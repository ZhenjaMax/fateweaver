import React from 'react';
import { Box, Typography, Button, Container, Grid, Paper, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MapIcon from '@mui/icons-material/Map';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import { motion } from 'framer-motion';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <Paper
    elevation={0}
    sx={{
      p: 4,
      height: '100%',
      backgroundColor: 'background.paper',
      border: '1px solid',
      borderColor: 'divider',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: (theme) => `0 20px 40px -4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.1)'}`,
        borderColor: 'primary.main',
      },
    }}
  >
    <Box sx={{ color: 'primary.main', mb: 2 }}>{icon}</Box>
    <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
      {title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 16 },
          textAlign: 'center',
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'radial-gradient(circle at 50% 0%, #2e1065 0%, #0f172a 60%)'
              : 'radial-gradient(circle at 50% 0%, #e0e7ff 0%, #f8fafc 60%)',
        }}
      >
        <Container maxWidth="md">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography variant="h2" component="h1" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}>
              Weave Your <Box component="span" sx={{ color: 'primary.main' }}>Destiny</Box>
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px', mx: 'auto', lineHeight: 1.6 }}>
              The ultimate world-building tool for Game Masters and Writers. 
              Organize campaigns, map your worlds, and track timelines in one immersive platform.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/register')}
                sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
              >
                Start Creating Free
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/login')}
                sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
              >
                Log In
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 12 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
             <FeatureCard 
               icon={<AutoStoriesIcon fontSize="large" />} 
               title="Wiki & Lore" 
               description="Create rich Markdown articles for your characters, locations, and items." 
             />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
             <FeatureCard 
               icon={<MapIcon fontSize="large" />} 
               title="Interactive Maps" 
               description="Upload world maps, add pins, and link them directly to your lore articles." 
             />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
             <FeatureCard 
               icon={<AccessTimeIcon fontSize="large" />} 
               title="Dynamic Timelines" 
               description="Track events across eras. Filter history with an interactive time-slider." 
             />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
             <FeatureCard 
               icon={<GroupsIcon fontSize="large" />} 
               title="Relationship Graphs" 
               description="Visualize complex connections between NPCs and factions with node-based graphs." 
             />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
