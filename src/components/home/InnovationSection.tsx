import React from 'react';
import { Box, Container, Title, Text, Grid } from '@mantine/core';
import { STUDENT_ROBOTICS_PROJECTS } from '../../data/robotics';
import ImageReveal from '../common/ImageReveal';
import AnimatedButton from '../common/AnimatedButton';

export const InnovationSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '120px 0' }}>
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
            / Science & Innovation
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
            Curiosity becomes discovery.
          </Title>

          <Text
            style={{
              marginTop: '1.25rem',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              color: '#555555',
              maxWidth: '680px',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            From solar telemetry to autonomous marine sampling, Everfield students conduct peer-reviewed scientific investigations and engineer real hardware addressing community and global challenges.
          </Text>
        </Box>

        {/* 3 Featured Student Innovation Projects */}
        <Grid gutter={32}>
          {STUDENT_ROBOTICS_PROJECTS.map((project) => (
            <Grid.Col key={project.id} span={{ base: 12, md: 4 }}>
              <Box
                style={{
                  backgroundColor: '#F7F7F5',
                  border: '1px solid #ECEAE5',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'border-color 0.25s ease, transform 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1F1F1F';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#ECEAE5';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <ImageReveal
                  src={project.image}
                  alt={project.title}
                  aspectRatio="16/10"
                  style={{ borderBottom: '1px solid #ECEAE5' }}
                />

                <Box style={{ padding: '28px 24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#777777', marginBottom: '10px' }}>
                      <span style={{ fontWeight: 600, color: '#1F1F1F' }}>{project.category}</span>
                      <span>·</span>
                      <span>{project.gradeLevel}</span>
                    </div>

                    <Title
                      order={3}
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        lineHeight: 1.25,
                        color: '#1F1F1F',
                        marginBottom: '12px',
                      }}
                    >
                      {project.title}
                    </Title>

                    <Text size="sm" style={{ color: '#555555', lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif' }}>
                      {project.description}
                    </Text>
                  </div>

                  {project.award && (
                    <Box style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #ECEAE5' }}>
                      <Text size="xs" style={{ color: '#2C6237', fontWeight: 600, fontFamily: 'DM Sans, sans-serif' }}>
                        ★ {project.award}
                      </Text>
                    </Box>
                  )}
                </Box>
              </Box>
            </Grid.Col>
          ))}
        </Grid>

        <Box style={{ textAlign: 'center', marginTop: '50px' }}>
          <AnimatedButton to="/innovation" variant="outline" arrow="right">
            Explore All Student Research & Inventions
          </AnimatedButton>
        </Box>
      </Container>
    </section>
  );
};

export default InnovationSection;
