import React from 'react';
import { Box, Container, Title, Text, Grid, Group } from '@mantine/core';
import IMAGES from '../../assets/images';
import ImageReveal from '../common/ImageReveal';
import AnimatedButton from '../common/AnimatedButton';
import { SPORTS_PROGRAMS, WELLBEING_PILLARS } from '../../data/sports';

export const SportsSection: React.FC = () => {
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
            / Athletics & Wellbeing
          </Text>

          <Group justify="space-between" align="flex-end" wrap="wrap">
            <Title
              order={2}
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)',
                lineHeight: 1.15,
                fontWeight: 500,
                color: '#1F1F1F',
                letterSpacing: '-0.025em',
                maxWidth: '680px',
              }}
            >
              Strong minds. Healthy bodies.
            </Title>
            <AnimatedButton to="/sports" variant="solid" arrow="right">
              Explore Athletic Programs
            </AnimatedButton>
          </Group>
        </Box>

        {/* Large Architectural Sports Pavilion Photography */}
        <Box style={{ marginBottom: '50px' }}>
          <ImageReveal
            src={IMAGES.sportsComplex}
            alt="Everfield Olympic indoor sports arena"
            aspectRatio="21/9"
            style={{ border: '1px solid #ECEAE5' }}
          />
        </Box>

        <Grid gutter={40}>
          {/* Sports Programs Column */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Title
              order={3}
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '1.4rem',
                fontWeight: 600,
                marginBottom: '24px',
                color: '#1F1F1F',
              }}
            >
              Competitive & Recreational Disciplines
            </Title>
            <Grid gutter={16}>
              {SPORTS_PROGRAMS.slice(0, 4).map((sport) => (
                <Grid.Col key={sport.id} span={{ base: 12, sm: 6 }}>
                  <Box
                    style={{
                      backgroundColor: '#FFFFFF',
                      padding: '24px',
                      border: '1px solid #ECEAE5',
                      height: '100%',
                    }}
                  >
                    <Text size="xs" style={{ color: '#888888', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {sport.category}
                    </Text>
                    <Title order={4} style={{ fontSize: '1.05rem', fontWeight: 600, margin: '8px 0 6px' }}>
                      {sport.name}
                    </Title>
                    <Text size="xs" style={{ color: '#555555', lineHeight: 1.5, fontFamily: 'DM Sans, sans-serif' }}>
                      {sport.description}
                    </Text>
                  </Box>
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>

          {/* Holistic Student Wellbeing Column */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Box style={{ backgroundColor: '#ECEAE5', padding: '36px 30px', height: '100%' }}>
              <Text size="xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Pastoral Care
              </Text>
              <Title
                order={3}
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  marginBottom: '16px',
                  color: '#1F1F1F',
                }}
              >
                Comprehensive Student Wellbeing
              </Title>
              <Text size="sm" style={{ color: '#555555', lineHeight: 1.6, marginBottom: '24px' }}>
                We foster psychological resilience, mindful self-regulation, and healthy peer empathy. Certified counselors and house advisors support every student throughout their development.
              </Text>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {WELLBEING_PILLARS.map((p) => (
                  <Box key={p.title} style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '12px' }}>
                    <Text size="sm" style={{ fontWeight: 600, color: '#1F1F1F' }}>
                      {p.title}
                    </Text>
                    <Text size="xs" style={{ color: '#666666', marginTop: '2px' }}>
                      {p.description}
                    </Text>
                  </Box>
                ))}
              </div>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default SportsSection;
