import React from 'react';
import { Box, Container, Title, Text, Grid, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconArrowUpRight } from '@tabler/icons-react';
import { ACADEMIC_STAGES } from '../../data/academics';
import { INDUSTRY_PARTNERS } from '../../data/activities';
import ImageReveal from '../common/ImageReveal';

export const AcademicJourney: React.FC = () => {
  return (
    <section style={{ padding: '120px 0 100px', backgroundColor: '#FFFFFF' }}>
      <Container size="xl" style={{ maxWidth: '1360px' }}>
        {/* Header from reference image */}
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
            / Academic programs
          </Text>

          <Title
            order={2}
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              lineHeight: 1.18,
              fontWeight: 400,
              color: '#1F1F1F',
              letterSpacing: '-0.025em',
              maxWidth: '820px',
            }}
          >
            Every stage of learning{' '}
            <strong style={{ fontWeight: 600 }}>brings new challenges and opportunities.</strong>
          </Title>
        </Box>

        {/* Academic Stages Rows matching reference image */}
        <Box>
          {ACADEMIC_STAGES.map((stage, idx) => {
            return (
              <Box
                key={stage.id}
                style={{
                  padding: '48px 0',
                  borderTop: '1px solid #ECEAE5',
                  borderBottom: idx === ACADEMIC_STAGES.length - 1 ? '1px solid #ECEAE5' : 'none',
                }}
              >
                <Grid gutter={32} align="center">
                  {/* Left Column: Title & Link */}
                  <Grid.Col span={{ base: 12, md: 3 }}>
                    <Group gap="xs" align="center">
                      {/* Geometric ribbon mark from reference image */}
                      <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
                        <path d="M6 13C6 9.13 9.13 6 13 6H24C27.87 6 31 9.13 31 13C31 16.87 27.87 20 24 20H12" stroke="#1F1F1F" strokeWidth="3.2" strokeLinecap="round" />
                        <path d="M9 20H28C31.87 20 35 23.13 35 27C35 30.87 31.87 34 28 34H13C9.13 34 6 30.87 6 27" stroke="#1F1F1F" strokeWidth="3.2" strokeLinecap="round" />
                      </svg>
                      <Title
                        order={3}
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: '1.4rem',
                          fontWeight: 600,
                          color: '#1F1F1F',
                        }}
                      >
                        {stage.title}
                      </Title>
                    </Group>
                    <Text size="xs" style={{ color: '#888888', marginTop: '6px', fontFamily: 'DM Sans, sans-serif' }}>
                      {stage.grades} · {stage.ageRange}
                    </Text>

                    <Box style={{ marginTop: '16px' }}>
                      <Link
                        to={`/academics/${stage.slug}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          color: '#1F1F1F',
                          fontFamily: 'DM Sans, sans-serif',
                        }}
                      >
                        <span>Explore Curriculum</span>
                        <IconArrowUpRight size={14} />
                      </Link>
                    </Box>
                  </Grid.Col>

                  {/* Middle Column: Summary text */}
                  <Grid.Col span={{ base: 12, md: 4 }}>
                    <Text
                      style={{
                        fontSize: '0.9375rem',
                        lineHeight: 1.6,
                        color: '#666666',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                    >
                      {stage.summary}
                    </Text>
                  </Grid.Col>

                  {/* Right Column: Visual frames (Early Years shows 3 photos as in reference image; others show 1 wide photo) */}
                  <Grid.Col span={{ base: 12, md: 5 }}>
                    {stage.galleryImages && stage.galleryImages.length > 1 ? (
                      <Grid gutter={12}>
                        {stage.galleryImages.slice(0, 3).map((imgUrl, i) => (
                          <Grid.Col key={i} span={4}>
                            <ImageReveal
                              src={imgUrl}
                              alt={`${stage.title} activity ${i + 1}`}
                              aspectRatio="4/3"
                              style={{ border: '1px solid #ECEAE5' }}
                            />
                          </Grid.Col>
                        ))}
                      </Grid>
                    ) : (
                      <ImageReveal
                        src={stage.image}
                        alt={stage.title}
                        aspectRatio="16/9"
                        style={{ border: '1px solid #ECEAE5' }}
                      />
                    )}
                  </Grid.Col>
                </Grid>
              </Box>
            );
          })}
        </Box>

        {/* Building connections beyond the classroom: Partner Logos matching reference image */}
        <Box style={{ marginTop: '90px', paddingTop: '40px', borderTop: '1px solid #ECEAE5' }}>
          <Text
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: '#888888',
              letterSpacing: '0.04em',
              marginBottom: '2rem',
            }}
          >
            / Building connections beyond the classroom
          </Text>

          <Group justify="space-between" align="center" style={{ opacity: 0.7, padding: '16px 0' }} wrap="wrap">
            {INDUSTRY_PARTNERS.map((partner) => (
              <Text
                key={partner.name}
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#444444',
                }}
              >
                {partner.label}
              </Text>
            ))}
          </Group>
        </Box>
      </Container>
    </section>
  );
};

export default AcademicJourney;
