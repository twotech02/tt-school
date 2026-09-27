import React from 'react';
import { Box, Container, Title, Text, Grid, Stack } from '@mantine/core';
import { IconDeviceLaptop, IconCpu, IconBulb, IconUsers } from '@tabler/icons-react';
import IMAGES from '../../assets/images';
import ImageReveal from '../common/ImageReveal';
import AnimatedButton from '../common/AnimatedButton';

export const SmartClassroomSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#F7F7F5', padding: '120px 0' }}>
      <Container size="xl" style={{ maxWidth: '1360px' }}>
        <Box style={{ marginBottom: '60px' }}>
          <Text
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: '#777777',
              letterSpacing: '0.04em',
              marginBottom: '1rem',
            }}
          >
            / Technology in Education
          </Text>

          <Title
            order={2}
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
              lineHeight: 1.15,
              fontWeight: 500,
              color: '#1F1F1F',
              letterSpacing: '-0.025em',
              maxWidth: '780px',
            }}
          >
            Learning beyond the classroom.
          </Title>

          <Text
            style={{
              marginTop: '1.25rem',
              fontSize: '1.0625rem',
              lineHeight: 1.6,
              color: '#555555',
              maxWidth: '680px',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            Smart classrooms at Everfield transform passive instruction into dynamic, collaborative discovery with synchronized 4K displays, personalized AI diagnostic learning, and immersive virtual environments.
          </Text>
        </Box>

        <Grid gutter={40} align="center">
          {/* Left Column: Smart Classroom Photography with floating badge */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Box style={{ position: 'relative' }}>
              <ImageReveal
                src={IMAGES.smartClassroom}
                alt="Everfield modern smart classroom environment"
                aspectRatio="16/10"
                style={{
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #ECEAE5',
                }}
              />
            </Box>
          </Grid.Col>

          {/* Right Column: 4 Clean Technology Highlights */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="xl">
              {[
                {
                  icon: <IconDeviceLaptop size={22} color="#1F1F1F" />,
                  title: 'Interactive 4K Display Arrays',
                  description: 'Dual 86-inch touch surfaces allow wireless student screen sharing and simultaneous collaborative brainstorming.',
                },
                {
                  icon: <IconCpu size={22} color="#1F1F1F" />,
                  title: 'AI-Assisted Diagnostic Learning',
                  description: 'Adaptive algorithms diagnose individual conceptual knowledge gaps and recommend tailored extension challenges.',
                },
                {
                  icon: <IconBulb size={22} color="#1F1F1F" />,
                  title: 'Virtual Laboratories & Spatial 3D',
                  description: 'Students conduct molecular chemistry experiments and explore historical civilizations in stereoscopic 3D.',
                },
                {
                  icon: <IconUsers size={22} color="#1F1F1F" />,
                  title: 'Ergonomic Agility & Biophilic Design',
                  description: 'Modular sit-to-stand workstations, dynamic daylight-mimicking circadian lighting, and clean air filtration.',
                },
              ].map((feat, index) => (
                <Box
                  key={feat.title}
                  style={{
                    paddingBottom: '20px',
                    borderBottom: index < 3 ? '1px solid #ECEAE5' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <Box
                      style={{
                        padding: '10px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #ECEAE5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {feat.icon}
                    </Box>
                    <Box>
                      <Title
                        order={4}
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: '1.05rem',
                          fontWeight: 600,
                          color: '#1F1F1F',
                          marginBottom: '6px',
                        }}
                      >
                        {feat.title}
                      </Title>
                      <Text size="sm" style={{ color: '#666666', lineHeight: 1.55, fontFamily: 'DM Sans, sans-serif' }}>
                        {feat.description}
                      </Text>
                    </Box>
                  </div>
                </Box>
              ))}

              <Box style={{ paddingTop: '8px' }}>
                <AnimatedButton to="/innovation" variant="solid" arrow="right">
                  Explore Learning Technologies
                </AnimatedButton>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default SmartClassroomSection;
