import React from 'react';
import { Box, Container, Title, Text, Grid, Group } from '@mantine/core';
import IMAGES from '../../assets/images';
import ImageReveal from '../common/ImageReveal';
import AnimatedButton from '../common/AnimatedButton';

export const CampusSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#F7F7F5', padding: '100px 0 120px' }}>
      <Container size="xl" style={{ maxWidth: '1360px' }}>
        {/* Editorial Section Header */}
        <Box style={{ marginBottom: '50px' }}>
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
            / Our campus
          </Text>

          <Group justify="space-between" align="flex-end" wrap="wrap">
            <Title
              order={2}
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
                lineHeight: 1.15,
                fontWeight: 500,
                color: '#1F1F1F',
                letterSpacing: '-0.025em',
                maxWidth: '680px',
              }}
            >
              A campus designed for curiosity.
            </Title>
            <AnimatedButton to="/facilities" variant="outline" arrow="upRight">
              View All 14 Facilities
            </AnimatedButton>
          </Group>
        </Box>

        {/* Large Architectural Photography Panorama from reference image */}
        <Box style={{ position: 'relative', marginBottom: '40px' }}>
          <ImageReveal
            src={IMAGES.campusArchitecture}
            alt="Everfield modern campus architectural complex"
            aspectRatio="21/9"
            style={{
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.07)',
              border: '1px solid #ECEAE5',
            }}
          />
        </Box>

        {/* Facilities Grid with clean editorial layout */}
        <Grid gutter={24}>
          {[
            { title: 'Smart Classrooms', desc: 'Interactive 86-inch 4K multi-touch walls & flexible ergonomic seating.' },
            { title: 'Advanced Science Labs', desc: 'University-grade chemistry, biology, and physics research benches.' },
            { title: 'Robotics & STEM Lab', desc: 'VEX and FIRST competition arena with CNC mills and 3D printing.' },
            { title: 'Olympic Sports Pavilion', desc: 'FIBA sprung wood indoor arena, 25m heated pool & athletics track.' },
            { title: 'Discovery Library', desc: 'Over 45,000 volumes, private acoustic pods & global digital journals.' },
            { title: 'Performing Arts Hall', desc: '600-seat acoustic concert auditorium with mechanized stage lighting.' },
          ].map((item, index) => (
            <Grid.Col key={item.title} span={{ base: 12, sm: 6, md: 4 }}>
              <Box
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '28px 24px',
                  border: '1px solid #ECEAE5',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.25s ease, transform 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1F1F1F';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#ECEAE5';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#888888',
                    marginBottom: '12px',
                  }}
                >
                  0{index + 1}
                </Text>
                <Box>
                  <Title
                    order={4}
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      marginBottom: '8px',
                      color: '#1F1F1F',
                    }}
                  >
                    {item.title}
                  </Title>
                  <Text size="sm" style={{ color: '#666666', lineHeight: 1.55, fontFamily: 'DM Sans, sans-serif' }}>
                    {item.desc}
                  </Text>
                </Box>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default CampusSection;
