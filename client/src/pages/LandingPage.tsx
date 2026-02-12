import React from 'react';
import {
  Box,
  Button,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  ThemeIcon,
  rem,
  Card,
  UnstyledButton,
  Badge,
  Overlay
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { 
    IconWand, 
    IconArrowRight, 
    IconBook, 
    IconMap, 
    IconWorld,
    IconBrandGithub, 
    IconBrandTwitter, 
    IconBrandDiscord 
} from '@tabler/icons-react';
import { motion, type Variants } from 'framer-motion';
import ConstellationBackground from '../components/ConstellationBackground';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.8, 
            ease: "easeOut" 
        } 
    }
  };

  const featureReveal: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
            duration: 0.6, 
            ease: "easeOut" 
        } 
    }
  };

  return (
    <Box style={{ overflowX: 'hidden' }}>
      {/* SECTION 1: HERO */}
      <Box style={{ 
          position: 'relative', 
          height: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          overflow: 'hidden',
          backgroundColor: '#0b0c15' // Fallback
        }}>
        
        <ConstellationBackground />
        
        {/* Vignette & Gradient Overlay */}
        <Overlay 
            gradient="radial-gradient(circle at center, transparent 0%, #0b0c15 120%)" 
            opacity={0.8} 
            zIndex={0} 
            style={{ pointerEvents: 'none' }}
        />

        <Container size="lg" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
          >
            {/* Logo / Badge */}
            <motion.div 
                whileHover={{ scale: 1.05 }} 
                style={{ display: 'inline-block', marginBottom: rem(32) }}
            >
                <ThemeIcon 
                    size={80} 
                    radius={24} 
                    variant="gradient" 
                    gradient={{ from: 'electricBlue.6', to: 'violet.5', deg: 135 }}
                    style={{
                        boxShadow: '0 0 40px rgba(87, 87, 255, 0.4)'
                    }}
                >
                    <IconWand size={40} color="white" />
                </ThemeIcon>
            </motion.div>

            {/* Headline */}
            <Title 
              order={1} 
              style={{ 
                fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', 
                lineHeight: 1.05,
                fontWeight: 900,
                letterSpacing: '-0.03em',
                marginBottom: rem(24),
                color: 'white'
              }}
            >
              Weave Your <br />
              <Text 
                component="span" 
                inherit 
                variant="gradient" 
                gradient={{ from: 'electricBlue.4', to: 'cyan.3', deg: 90 }}
                style={{ position: 'relative', display: 'inline-block' }}
              >
                Destiny
                {/* Decorative underline/glow */}
                <Box style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    right: 0, 
                    height: '30%', 
                    background: 'var(--mantine-color-electricBlue-6)', 
                    filter: 'blur(30px)', 
                    opacity: 0.3, 
                    zIndex: -1 
                }} />
              </Text>
            </Title>
            
            {/* Subheading */}
            <Text 
                size="xl" 
                c="dimmed" 
                mx="auto" 
                mb={60}
                style={{ maxWidth: 680, lineHeight: 1.6, fontSize: '1.25rem', fontWeight: 400 }}
            >
              The definitive platform for Worldbuilders and Game Masters. 
              Visualize complex timelines, create interactive maps, and document your lore in one vibrant, seamless workspace.
            </Text>
            
            {/* CTA Buttons */}
            <Group justify="center" gap="lg">
              <Button 
                size="xl" 
                h={60}
                px={40}
                radius="xl"
                color="electricBlue"
                rightSection={<IconArrowRight size={22} />}
                onClick={() => navigate('/register')}
                className="animate-float" 
                style={{
                  fontSize: '1.2rem',
                  boxShadow: '0 0 40px rgba(87, 87, 255, 0.3)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                Start Creating Free
              </Button>
              <Button 
                size="xl"
                h={60} 
                px={40}
                radius="xl"
                variant="outline" 
                color="gray"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ 
                    fontSize: '1.2rem', 
                    borderWidth: 2,
                    borderColor: 'rgba(255,255,255,0.1)',
                    color: '#e0e0e0',
                    backgroundColor: 'rgba(255,255,255,0.03)'
                }}
              >
                Explore Features
              </Button>
            </Group>
          </motion.div>
        </Container>
        
        {/* Scroll Indicator */}
        <Box style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }}>
             <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                <Text size="sm" c="dimmed" fw={600} tt="uppercase" style={{ letterSpacing: '0.1em' }}>Scroll to Explore</Text>
             </motion.div>
        </Box>
      </Box>

      {/* SECTION 2: FEATURES (ZIGZAG + BLOCKS) */}
      <Box id="features" py={180} style={{ position: 'relative', background: 'linear-gradient(180deg, #0b0c15 0%, #08090f 100%)' }}>
        <Container size="lg">
            
            {/* Feature 1: Wiki/Lore */}
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={80} mb={180} style={{ alignItems: 'center' }}>
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <Badge size="lg" variant="gradient" gradient={{ from: 'electricBlue.9', to: 'electricBlue.6' }} mb="md">LORE KEEPER</Badge>
                    <Title order={2} size={48} mb="md" style={{ letterSpacing: '-0.02em' }}>Deep Lore Wiki</Title>
                    <Text size="xl" c="dimmed" lh={1.7}>
                        Forget scattered notes. Build a structured encyclopedia for your world. Link characters to locations, items to histories, and never lose track of a detail again utilizing our powerful Markdown editor.
                    </Text>
                    <Button variant="subtle" color="electricBlue" size="lg" mt="xl" rightSection={<IconArrowRight size={18} />} pl={0}>
                        See Documentation
                    </Button>
                </motion.div>
                
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={featureReveal}
                    className="glass-panel"
                    style={{ 
                        height: 400, 
                        border: '1px solid rgba(87, 87, 255, 0.1)',
                        overflow: 'hidden',
                        position: 'relative',
                        borderRadius: 24
                    }}
                >
                    {/* Abstract Mockup UI */}
                    <Box p="xl" style={{ height: '100%', background: 'linear-gradient(135deg, rgba(87,87,255,0.05) 0%, rgba(0,0,0,0) 100%)' }}>
                         <Group mb="lg">
                            <ThemeIcon size="lg" radius="md" color="electricBlue" variant="light"><IconBook size={20} /></ThemeIcon>
                            <Box w={100} h={8} bg="rgba(255,255,255,0.1)" style={{ borderRadius: 4 }} />
                         </Group>
                         <Stack gap="sm">
                             <Box w="80%" h={24} bg="rgba(255,255,255,0.15)" style={{ borderRadius: 6 }} />
                             <Box w="100%" h={12} bg="rgba(255,255,255,0.05)" style={{ borderRadius: 4 }} />
                             <Box w="90%" h={12} bg="rgba(255,255,255,0.05)" style={{ borderRadius: 4 }} />
                             <Box w="95%" h={12} bg="rgba(255,255,255,0.05)" style={{ borderRadius: 4 }} />
                         </Stack>
                         <Box mt={40} p="md" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                             <Group>
                                <Box w={32} h={32} bg="electricBlue.9" style={{ borderRadius: '50%' }} />
                                <Box w={120} h={10} bg="rgba(255,255,255,0.1)" style={{ borderRadius: 4 }} />
                             </Group>
                         </Box>
                    </Box>
                </motion.div>
            </SimpleGrid>

            {/* Feature 2: Maps (Reversed) */}
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={80} mb={180} style={{ alignItems: 'center' }}>
                 <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={featureReveal}
                    className="glass-panel"
                    style={{ 
                        height: 400, 
                        order: 1,
                        border: '1px solid rgba(34, 184, 207, 0.1)',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 24
                    }}
                >
                     {/* Abstract Map UI */}
                     <Box style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
                        <IconWorld size={300} stroke={0.5} style={{ position: 'absolute', right: -50, bottom: -50, color: 'var(--mantine-color-cyan-9)' }} />
                     </Box>
                     <Box p="xl" style={{ position: 'relative', height: '100%', background: 'linear-gradient(135deg, rgba(34, 184, 207, 0.05) 0%, rgba(0,0,0,0) 100%)' }}>
                        {/* Pins */}
                        {[1, 2, 3].map((i) => (
                            <motion.div 
                                key={i}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: i * 0.2 }}
                                style={{ 
                                    position: 'absolute', 
                                    top: `${30 + i * 15}%`, 
                                    left: `${20 + i * 20}%` 
                                }}
                            >
                                <ThemeIcon size="md" radius="xl" color="cyan" variant="filled">
                                    <IconMap size={16} />
                                </ThemeIcon>
                            </motion.div>
                        ))}
                     </Box>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    style={{ order: 2 }} // On mobile this might need adjustment, SimpleGrid handles col order, order prop works flex
                >
                    <Badge size="lg" variant="gradient" gradient={{ from: 'cyan.9', to: 'cyan.6' }} mb="md">CARTOGRAPHY</Badge>
                    <Title order={2} size={48} mb="md" style={{ letterSpacing: '-0.02em' }}>Interactive Maps</Title>
                    <Text size="xl" c="dimmed" lh={1.7}>
                        Upload your world maps and breathe life into them. Add pins, regions, and layers. Click a city to instantly pull up its wiki entry. Your geography is no longer just a static image.
                    </Text>
                     <Button variant="subtle" color="cyan" size="lg" mt="xl" rightSection={<IconArrowRight size={18} />} pl={0}>
                        Explore Maps
                    </Button>
                </motion.div>
            </SimpleGrid>

            {/* Feature 3: Timeline */}
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={80} style={{ alignItems: 'center' }}>
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <Badge size="lg" variant="gradient" gradient={{ from: 'violet.9', to: 'violet.6' }} mb="md">CHRONOLOGY</Badge>
                    <Title order={2} size={48} mb="md" style={{ letterSpacing: '-0.02em' }}>Temporal Flows</Title>
                    <Text size="xl" c="dimmed" lh={1.7}>
                        History is messy, but your timeline doesn't have to be. Track eras, wars, and character lifespans. Filter your map to see how borders shifted over centuries.
                    </Text>
                    <Button variant="subtle" color="violet" size="lg" mt="xl" rightSection={<IconArrowRight size={18} />} pl={0}>
                        Track History
                    </Button>
                </motion.div>
                
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={featureReveal}
                    className="glass-panel"
                    style={{ 
                        height: 400, 
                        border: '1px solid rgba(132, 94, 247, 0.1)',
                        overflow: 'hidden',
                        borderRadius: 24
                    }}
                >
                     {/* Abstract Timeline UI */}
                     <Box p="xl" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(132, 94, 247, 0.05) 0%, rgba(0,0,0,0) 100%)' }}>
                        <Stack gap="xl" align="center">
                            {[1, 2, 3].map((i) => (
                                <Group key={i} w="100%" gap="md">
                                    <Text size="sm" c="dimmed" w={50} ta="right">20{20+i}0</Text>
                                    <Box style={{ width: 2, height: 60, background: 'rgba(255,255,255,0.1)' }} />
                                    <Card p="sm" radius="md" flex={1} bg="rgba(255,255,255,0.05)" withBorder style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                                        <Box w="60%" h={8} bg="violet.9" style={{ borderRadius: 4, opacity: 0.5 }} />
                                    </Card>
                                </Group>
                            ))}
                        </Stack>
                     </Box>
                </motion.div>
            </SimpleGrid>
        </Container>
      </Box>

      {/* SECTION 3: FOOTER CTA */}
      <Box py={120} style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: '#0b0c15', position: 'relative' }}>
          <Container size="sm" ta="center" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <Title order={2} size={56} mb="md" fw={900}>Start Your World Today</Title>
                <Text size="xl" c="dimmed" mb={50}>
                    Join thousands of GMs and writers building their dreams in Fateweaver. No credit card required for the starter tier.
                </Text>
                <Group justify="center">
                    <Button 
                        size="xl" 
                        radius="xl" 
                        h={60}
                        color="electricBlue" 
                        onClick={() => navigate('/register')}
                        rightSection={<IconArrowRight />}
                        style={{ boxShadow: '0 10px 30px rgba(87, 87, 255, 0.3)' }}
                    >
                        Get Started
                    </Button>
                     <Button 
                        size="xl" 
                        radius="xl" 
                        h={60}
                        variant="default" 
                        onClick={() => navigate('/login')}
                        style={{ 
                            backgroundColor: 'transparent',
                            borderColor: 'rgba(255,255,255,0.1)',
                            color: '#fff'
                        }}
                    >
                        Sign In
                    </Button>
                </Group>
            </motion.div>
          </Container>
          
          {/* Background decoration */}
          <Box style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              width: '600px', 
              height: '600px', 
              background: 'radial-gradient(circle, rgba(87,87,255,0.1) 0%, transparent 70%)', 
              zIndex: 0,
              pointerEvents: 'none'
          }} />
      </Box>

      {/* FOOTER LINKS */}
      <Box py="xl" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: '#08090f' }}>
        <Container size="lg">
            <Group justify="space-between" align="center">
                <Group gap="xs">
                    <ThemeIcon size="md" radius="sm" variant="gradient" gradient={{ from: 'electricBlue.6', to: 'violet.5' }}>
                         <IconWand size={16} />
                    </ThemeIcon>
                    <Text fw={700} c="dimmed" style={{ letterSpacing: '0.05em' }}>FATEWEAVER</Text>
                </Group>
                
                <Group gap="lg">
                    <UnstyledButton style={{ opacity: 0.7, transition: 'opacity 0.2s' }} onMouseEnter={(e: any) => e.target.style.opacity = 1} onMouseLeave={(e: any) => e.target.style.opacity = 0.7}>
                        <IconBrandTwitter size={20} color="white" />
                    </UnstyledButton>
                    <UnstyledButton style={{ opacity: 0.7, transition: 'opacity 0.2s' }} onMouseEnter={(e: any) => e.target.style.opacity = 1} onMouseLeave={(e: any) => e.target.style.opacity = 0.7}>
                        <IconBrandGithub size={20} color="white" />
                    </UnstyledButton>
                    <UnstyledButton style={{ opacity: 0.7, transition: 'opacity 0.2s' }} onMouseEnter={(e: any) => e.target.style.opacity = 1} onMouseLeave={(e: any) => e.target.style.opacity = 0.7}>
                        <IconBrandDiscord size={20} color="white" />
                    </UnstyledButton>
                </Group>
                
                <Text size="sm" c="dimmed">© {new Date().getFullYear()} Fateweaver. All rights reserved.</Text>
            </Group>
        </Container>
      </Box>

    </Box>
  );
};

export default LandingPage;
