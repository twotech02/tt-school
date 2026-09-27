import React from 'react';
import { Box, Container, Title, Text, Grid } from '@mantine/core';
import PageLayout from '../../layouts/PageLayout';
import IMAGES from '../../assets/images';
import ImageReveal from '../../components/common/ImageReveal';
import { SPORTS_PROGRAMS, SPORTS_PHILOSOPHY, WELLBEING_PILLARS } from '../../data/sports';

export const Sports: React.FC = () => {
  return (
    <PageLayout
      title="Athletic excellence & lifelong wellness habits."
      eyebrow="Athletics & Physical Education"
      description="Developing cardiovascular stamina, tactical game sense, sportsmanship, and mental resilience across 14 competitive and lifestyle sports."
      breadcrumbs={[
        { label: 'Student Life', href: '/student-life' },
        { label: 'Athletics' },
      ]}
      bgImage={IMAGES.sportsComplex}
      dark
    >
      {/* Philosophy & Olympic Arena */}
      <Box style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Grid gutter={48} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Athletic Philosophy
              </Text>
              <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '20px', lineHeight: 1.25 }}>
                {SPORTS_PHILOSOPHY.tagline}
              </Title>
              <Text size="md" style={{ color: '#555', lineHeight: 1.7, marginBottom: '20px' }}>
                {SPORTS_PHILOSOPHY.description}
              </Text>
              <Text size="md" style={{ color: '#555', lineHeight: 1.7 }}>
                Under the guidance of Olympic and national coaches, Everfield teams compete in the Southeast Asia Independent Schools Athletic Conference (SEASAC), regularly securing championship banners in basketball, football, and swimming.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <ImageReveal
                src={IMAGES.sportsComplex}
                alt="Everfield modern sports pavilion"
                aspectRatio="16/10"
                style={{ border: '1px solid #ECEAE5' }}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Competitive Sports Grid */}
      <Box style={{ padding: '100px 0', backgroundColor: '#F7F7F5' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Box style={{ marginBottom: '50px' }}>
            <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Varsity & Academy Programs
            </Text>
            <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F' }}>
              Athletic Disciplines
            </Title>
          </Box>

          <Grid gutter={24}>
            {SPORTS_PROGRAMS.map((sport) => (
              <Grid.Col key={sport.id} span={{ base: 12, sm: 6, lg: 4 }}>
                <Box style={{ backgroundColor: '#FFFFFF', border: '1px solid #ECEAE5', padding: '32px 24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <Text size="xs" style={{ color: '#888', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                      {sport.category}
                    </Text>
                    <Title order={3} style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '10px' }}>
                      {sport.name}
                    </Title>
                    <Text size="sm" style={{ color: '#555', lineHeight: 1.6, marginBottom: '16px' }}>
                      {sport.description}
                    </Text>
                  </div>

                  <Box style={{ borderTop: '1px solid #ECEAE5', paddingTop: '16px' }}>
                    <Text size="xs" style={{ color: '#777', marginBottom: '4px' }}>
                      <strong>Age Divisions:</strong> {sport.levels}
                    </Text>
                    <Text size="xs" style={{ color: '#777', marginBottom: '6px' }}>
                      <strong>Facility:</strong> {sport.facilities}
                    </Text>
                    <Text size="xs" style={{ color: '#2C6237', fontWeight: 600 }}>
                      ★ {sport.achievements}
                    </Text>
                  </Box>
                </Box>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Holistic Wellness Integration */}
      <Box style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Box style={{ marginBottom: '50px' }}>
            <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Mind & Body
            </Text>
            <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F' }}>
              Integrated Student Wellbeing
            </Title>
          </Box>

          <Grid gutter={24}>
            {WELLBEING_PILLARS.map((w, idx) => (
              <Grid.Col key={w.title} span={{ base: 12, sm: 6, lg: 3 }}>
                <Box style={{ backgroundColor: '#F7F7F5', border: '1px solid #ECEAE5', padding: '32px 24px', height: '100%' }}>
                  <Text style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#888', marginBottom: '12px' }}>
                    0{idx + 1}
                  </Text>
                  <Title order={4} style={{ fontSize: '1.15rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '8px' }}>
                    {w.title}
                  </Title>
                  <Text size="xs" style={{ color: '#555', lineHeight: 1.6 }}>
                    {w.description}
                  </Text>
                </Box>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default Sports;
