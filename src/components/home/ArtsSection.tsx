import React from 'react';
import { Box, Container, Title, Text, Grid, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconArrowUpRight } from '@tabler/icons-react';
import { MEANINGFUL_LESSONS } from '../../data/activities';
import ImageReveal from '../common/ImageReveal';

export const ArtsSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '120px 0' }}>
      <Container size="xl" style={{ maxWidth: '1360px' }}>
        {/* Section Header exactly matching reference image */}
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
            / Meaningful lessons
          </Text>

          <Group justify="space-between" align="flex-end" wrap="wrap">
            <Box style={{ maxWidth: '640px' }}>
              <Title
                order={2}
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
                  lineHeight: 1.15,
                  fontWeight: 500,
                  color: '#1F1F1F',
                  letterSpacing: '-0.025em',
                  marginBottom: '12px',
                }}
              >
                Meaningful lessons
              </Title>
              <Text
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#666666',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                Through clubs, activities, and community experiences, students discover new passions, build friendships, and create memories that last.
              </Text>
            </Box>

            <Link
              to="/arts"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#1F1F1F',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              <span>Explore Creative Arts & Music</span>
              <IconArrowUpRight size={16} />
            </Link>
          </Group>
        </Box>

        {/* 4 Tall Photographic Cards with ↗ arrows matching reference image */}
        <Grid gutter={24}>
          {MEANINGFUL_LESSONS.map((lesson) => (
            <Grid.Col key={lesson.id} span={{ base: 12, sm: 6, lg: 3 }}>
              <Link to={lesson.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <Box
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #ECEAE5',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
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
                  <Box style={{ position: 'relative', height: '360px', overflow: 'hidden' }}>
                    <ImageReveal
                      src={lesson.image}
                      alt={lesson.title}
                      height="100%"
                      zoomOnHover
                    />
                  </Box>

                  <Box style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyItems: 'space-between', borderTop: '1px solid #ECEAE5' }}>
                    <Box style={{ flex: 1 }}>
                      <Text
                        size="xs"
                        style={{
                          color: '#888888',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          fontWeight: 500,
                          marginBottom: '4px',
                        }}
                      >
                        {lesson.category}
                      </Text>
                      <Title
                        order={4}
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: '1.05rem',
                          fontWeight: 600,
                          color: '#1F1F1F',
                        }}
                      >
                        {lesson.title}
                      </Title>
                    </Box>

                    <Box
                      style={{
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        backgroundColor: '#F7F7F5',
                        color: '#1F1F1F',
                        flexShrink: 0,
                      }}
                    >
                      <IconArrowUpRight size={16} stroke={1.5} />
                    </Box>
                  </Box>
                </Box>
              </Link>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default ArtsSection;
