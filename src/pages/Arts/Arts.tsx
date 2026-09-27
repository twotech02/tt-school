import React from 'react';
import { Box, Container, Title, Text, Grid } from '@mantine/core';
import PageLayout from '../../layouts/PageLayout';
import IMAGES from '../../assets/images';
import ImageReveal from '../../components/common/ImageReveal';

export const Arts: React.FC = () => {
  return (
    <PageLayout
      title="Creativity has no limits."
      eyebrow="Arts & Culture"
      description="Nurturing the artist, musician, dramatist, and orator within every scholar through world-class performance halls and fine arts studios."
      breadcrumbs={[
        { label: 'Student Life', href: '/student-life' },
        { label: 'Arts & Culture' },
      ]}
      bgImage={IMAGES.auditorium}
      dark
    >
      {/* Concert Hall & Visual Arts Overview */}
      <Box style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Grid gutter={48} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Performing Arts Center
              </Text>
              <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '20px', lineHeight: 1.25 }}>
                Acoustic Grandeur & Staged Drama
              </Title>
              <Text size="md" style={{ color: '#555', lineHeight: 1.7, marginBottom: '20px' }}>
                Our 600-seat auditorium features tunable acoustic dampeners, digital sound mixing consoles, and mechanized lighting trusses, hosting regular symphonic concerts, Shakespearean productions, and student choreography vernissages.
              </Text>
              <Text size="md" style={{ color: '#555', lineHeight: 1.7 }}>
                Visual arts students work with natural north-light studios, ceramics pottery wheels, high-fire kilns, darkroom film processing, and digital Cintiq drawing displays.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <ImageReveal
                src={IMAGES.auditorium}
                alt="Everfield 600-seat acoustic concert hall"
                aspectRatio="16/10"
                style={{ border: '1px solid #ECEAE5' }}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Disciplines Grid */}
      <Box style={{ padding: '100px 0', backgroundColor: '#F7F7F5' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Box style={{ marginBottom: '50px' }}>
            <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Artistic Pathways
            </Text>
            <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F' }}>
              Music, Theatre, Fine Arts & Oratory
            </Title>
          </Box>

          <Grid gutter={24}>
            {[
              { title: 'Symphonic & Chamber Music', desc: 'String ensembles, wind symphony, jazz big band, and solo instrument masterclasses with visiting concert artists.' },
              { title: 'Dramatic Theatre & Acting', desc: 'Classical theatre, contemporary playwrighting, stage combat, lighting design, and full-scale annual musical productions.' },
              { title: 'Visual & Fine Arts', desc: 'Oil painting, classical drawing, ceramic sculpture, printmaking, and pre-university AP/IB portfolio curation.' },
              { title: 'Digital Media & Cinematography', desc: 'Documentary filmmaking, 4K digital editing, sound design, and experimental motion graphics in dedicated media bays.' },
              { title: 'Contemporary & Classical Dance', desc: 'Ballet, contemporary expressive movement, and choreography in sprung-floor mirrored dance studios.' },
              { title: 'Expository Rhetoric & Debate', desc: 'Parliamentary debate, oratorical performance, and inter-school public speaking symposiums.' },
            ].map((art) => (
              <Grid.Col key={art.title} span={{ base: 12, sm: 6, lg: 4 }}>
                <Box style={{ backgroundColor: '#FFFFFF', border: '1px solid #ECEAE5', padding: '36px 28px', height: '100%' }}>
                  <Title order={3} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.25rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '12px' }}>
                    {art.title}
                  </Title>
                  <Text size="sm" style={{ color: '#555', lineHeight: 1.6 }}>
                    {art.desc}
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

export default Arts;
