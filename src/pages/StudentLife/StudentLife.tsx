import React from 'react';
import { Box, Container, Title, Text, Grid } from '@mantine/core';
import PageLayout from '../../layouts/PageLayout';
import IMAGES from '../../assets/images';
import ImageReveal from '../../components/common/ImageReveal';
import { CLUBS_DATA } from '../../data/activities';
import AnimatedButton from '../../components/common/AnimatedButton';

export const StudentLife: React.FC = () => {
  return (
    <PageLayout
      title="Belonging, camaraderie & authentic self-expression."
      eyebrow="Student Experience"
      description="An energetic campus ecosystem encompassing 30+ student-led clubs, an ancient House system, outdoor leadership expeditions, and annual arts festivals."
      breadcrumbs={[{ label: 'Student Life' }]}
      bgImage={IMAGES.happyStudents}
      dark
    >
      {/* House System & Community Life */}
      <Box style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Grid gutter={48} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Tradition & Belonging
              </Text>
              <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '20px', lineHeight: 1.25 }}>
                The Four Houses of Everfield
              </Title>
              <Text size="md" style={{ color: '#555', lineHeight: 1.7, marginBottom: '20px' }}>
                Every student and faculty member is inducted into one of our historic Houses: Solaris, Terra, Ventus, and Aqua. The House system fosters cross-grade mentorship, friendly athletic and debate rivalries, and a deep sense of family.
              </Text>
              <Text size="md" style={{ color: '#555', lineHeight: 1.7, marginBottom: '28px' }}>
                Weekly house meetings allow older students to mentor younger peers, organize charity drives, and compete for the prestigious Annual House Cup.
              </Text>

              <AnimatedButton to="/contact?action=visit" variant="solid" arrow="right">
                Experience Student Life on Tour
              </AnimatedButton>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <ImageReveal
                src={IMAGES.happyStudents}
                alt="Everfield students celebrating during House Athletics Day"
                aspectRatio="16/10"
                style={{ border: '1px solid #ECEAE5' }}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Clubs & Co-Curricular Directory */}
      <Box style={{ padding: '100px 0', backgroundColor: '#F7F7F5' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Box style={{ marginBottom: '50px' }}>
            <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Extracurricular Activities
            </Text>
            <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F' }}>
              Over 30 Co-Curricular Guilds & Societies
            </Title>
          </Box>

          <Grid gutter={24}>
            {CLUBS_DATA.map((club) => (
              <Grid.Col key={club.name} span={{ base: 12, sm: 6, lg: 3 }}>
                <Box style={{ backgroundColor: '#FFFFFF', border: '1px solid #ECEAE5', padding: '32px 24px', height: '100%' }}>
                  <Text size="xs" style={{ color: '#888', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    {club.category}
                  </Text>
                  <Title order={4} style={{ fontSize: '1.15rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '8px' }}>
                    {club.name}
                  </Title>
                  <Text size="xs" style={{ color: '#555', lineHeight: 1.6 }}>
                    {club.description}
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

export default StudentLife;
