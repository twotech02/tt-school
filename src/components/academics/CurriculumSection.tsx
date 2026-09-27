import React from 'react';
import { Box, Container, Title, Text, Grid } from '@mantine/core';
import { ACADEMIC_PILLARS } from '../../data/academics';

export const CurriculumSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#F7F7F5', padding: '100px 0' }}>
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
            / Academic Pedagogy
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
              maxWidth: '750px',
            }}
          >
            A framework built for intellectual mastery.
          </Title>
        </Box>

        <Grid gap={24}>
          {ACADEMIC_PILLARS.map((pillar) => (
            <Grid.Col key={pillar.number} span={{ base: 12, sm: 6, lg: 3 }}>
              <Box
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '36px 28px',
                  border: '1px solid #ECEAE5',
                  height: '100%',
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: '#888888',
                    marginBottom: '16px',
                  }}
                >
                  {pillar.number}
                </Text>
                <Title
                  order={3}
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#1F1F1F',
                    marginBottom: '12px',
                    lineHeight: 1.25,
                  }}
                >
                  {pillar.title}
                </Title>
                <Text size="sm" style={{ color: '#666666', lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif' }}>
                  {pillar.description}
                </Text>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default CurriculumSection;
