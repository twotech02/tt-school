import React from 'react';
import { Box, Container, Title, Text, Grid, Group } from '@mantine/core';
import { ROBOTICS_PILLARS } from '../../data/robotics';
import AnimatedButton from '../common/AnimatedButton';
import IMAGES from '../../assets/images';
import ImageReveal from '../common/ImageReveal';

export const RoboticsSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#1F1F1F', color: '#FFFFFF', padding: '120px 0' }}>
      <Container size="xl" style={{ maxWidth: '1360px' }}>
        {/* Header with Dark Mode Styling */}
        <Box style={{ marginBottom: '60px' }}>
          <Text
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.65)',
              letterSpacing: '0.04em',
              marginBottom: '1rem',
            }}
          >
            / Robotics & STEM
          </Text>

          <Group justify="space-between" align="flex-end" wrap="wrap">
            <Title
              order={2}
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)',
                lineHeight: 1.15,
                fontWeight: 500,
                color: '#FFFFFF',
                letterSpacing: '-0.025em',
                maxWidth: '720px',
              }}
            >
              Building tomorrow's innovators.
            </Title>
            <AnimatedButton to="/robotics" variant="white" arrow="right">
              Explore Robotics & STEM
            </AnimatedButton>
          </Group>

          <Text
            style={{
              marginTop: '1.25rem',
              fontSize: '1.05rem',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.75)',
              maxWidth: '680px',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            In our 4,500 sq ft Maker Hangar, students develop authentic engineering capability—from circuit board design and autonomous C++ logic to FIRST Tech Challenge robotics championships.
          </Text>
        </Box>

        {/* Hero Robotics Visual Banner */}
        <Box style={{ marginBottom: '50px' }}>
          <ImageReveal
            src={IMAGES.roboticsLab}
            alt="Everfield students working in the Robotics and STEM Innovation Lab"
            aspectRatio="21/9"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          />
        </Box>

        {/* 4 Feature Cards: BUILD, CODE, EXPERIMENT, CREATE */}
        <Grid gutter={24}>
          {ROBOTICS_PILLARS.map((pillar) => (
            <Grid.Col key={pillar.tag} span={{ base: 12, sm: 6, md: 3 }}>
              <Box
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '32px 24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'background-color 0.25s ease, border-color 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div>
                  <Text
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      color: 'rgba(255, 255, 255, 0.85)',
                      marginBottom: '16px',
                    }}
                  >
                    {pillar.tag}
                  </Text>

                  <Title
                    order={3}
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      lineHeight: 1.25,
                      marginBottom: '12px',
                    }}
                  >
                    {pillar.title}
                  </Title>

                  <Text
                    size="sm"
                    style={{
                      color: 'rgba(255, 255, 255, 0.65)',
                      lineHeight: 1.6,
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    {pillar.description}
                  </Text>
                </div>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default RoboticsSection;
