import React from 'react';
import { Box, Container, Title, Text, Grid } from '@mantine/core';
import PageLayout from '../../layouts/PageLayout';
import IMAGES from '../../assets/images';
import ImageReveal from '../../components/common/ImageReveal';
import StatCard from '../../components/common/StatCard';
import AnimatedButton from '../../components/common/AnimatedButton';

export const About: React.FC = () => {
  return (
    <PageLayout
      title="A legacy of forward-looking education."
      eyebrow="About Everfield"
      description="Founded on the conviction that education should cultivate courageous minds, empathetic leaders, and lifelong discoverers equipped to shape a rapidly evolving world."
      breadcrumbs={[{ label: 'About' }]}
      bgImage={IMAGES.campusArchitecture}
      dark
    >
      {/* School Story & Founding Vision */}
      <Box style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Grid gutter={48} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Our Heritage
              </Text>
              <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(1.85rem, 3vw, 2.5rem)', fontWeight: 600, color: '#1F1F1F', marginBottom: '20px', lineHeight: 1.2 }}>
                Educating the whole person since 2001.
              </Title>
              <Text size="md" style={{ color: '#555555', lineHeight: 1.7, marginBottom: '20px', fontFamily: 'DM Sans, sans-serif' }}>
                Everfield International School was established with a singular architectural and pedagogical vision: to break down the walls of traditional rigid schooling and build an open, inquiry-rich sanctuary where academic rigor coexists with unbridled creativity.
              </Text>
              <Text size="md" style={{ color: '#555555', lineHeight: 1.7, marginBottom: '28px', fontFamily: 'DM Sans, sans-serif' }}>
                Over the past quarter century, we have expanded from an initial cohort of 120 students to an internationally celebrated K–12 learning community representing over 45 countries, consistently sending scholars to Oxford, Cambridge, MIT, Stanford, NUS, and Tokyo University.
              </Text>

              <AnimatedButton to="/admissions" variant="solid" arrow="right">
                Explore Enrollment Pathways
              </AnimatedButton>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <ImageReveal
                src={IMAGES.campusOverview}
                alt="Everfield campus architectural heritage"
                aspectRatio="16/10"
                style={{ border: '1px solid #ECEAE5' }}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Vision & Mission */}
      <Box style={{ padding: '100px 0', backgroundColor: '#F7F7F5' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Grid gutter={32}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box style={{ backgroundColor: '#FFFFFF', border: '1px solid #ECEAE5', padding: '48px 40px', height: '100%' }}>
                <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Our Vision
                </Text>
                <Title order={3} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.6rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '16px' }}>
                  Empowering architects of a just and sustainable future.
                </Title>
                <Text size="sm" style={{ color: '#555', lineHeight: 1.7, fontFamily: 'DM Sans, sans-serif' }}>
                  To be an internationally recognized vanguard of K–12 education where intellectual curiosity, technological fluency, and humanitarian commitment unite to cultivate leaders who solve our planet's most intricate challenges.
                </Text>
              </Box>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box style={{ backgroundColor: '#FFFFFF', border: '1px solid #ECEAE5', padding: '48px 40px', height: '100%' }}>
                <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Our Mission
                </Text>
                <Title order={3} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.6rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '16px' }}>
                  Learn. Explore. Create. Lead.
                </Title>
                <Text size="sm" style={{ color: '#555', lineHeight: 1.7, fontFamily: 'DM Sans, sans-serif' }}>
                  We nurture each learner's distinct talents within a safe, culturally diverse, and technologically immersive school environment, inspiring critical inquiry, emotional balance, and purposeful contribution to the global common good.
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Core Values */}
      <Box style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Box style={{ marginBottom: '50px' }}>
            <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Guiding Principles
            </Text>
            <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F' }}>
              Our Core Values
            </Title>
          </Box>

          <Grid gutter={24}>
            {[
              { num: '01', title: 'Intellectual Integrity', desc: 'Seeking truth through empirical rigor, open-minded inquiry, and the courage to question dogmas.' },
              { num: '02', title: 'Empathy & Inclusivity', desc: 'Honoring diverse cultural traditions, listening deeply, and treating every human being with dignity.' },
              { num: '03', title: 'Innovative Audacity', desc: 'Daring to experiment, viewing failure as critical feedback, and engineering inventive solutions.' },
              { num: '04', title: 'Ecological Stewardship', desc: 'Active responsibility for our shared natural biosphere through sustainable daily campus action.' },
            ].map((v) => (
              <Grid.Col key={v.num} span={{ base: 12, sm: 6, lg: 3 }}>
                <Box style={{ border: '1px solid #ECEAE5', padding: '32px 24px', height: '100%', backgroundColor: '#F7F7F5' }}>
                  <Text style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#888', marginBottom: '12px' }}>
                    {v.num}
                  </Text>
                  <Title order={4} style={{ fontSize: '1.15rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '8px' }}>
                    {v.title}
                  </Title>
                  <Text size="xs" style={{ color: '#555', lineHeight: 1.6 }}>
                    {v.desc}
                  </Text>
                </Box>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* School Timeline */}
      <Box style={{ padding: '100px 0', backgroundColor: '#F7F7F5' }}>
        <Container size="xl" style={{ maxWidth: '1000px' }}>
          <Box style={{ marginBottom: '60px', textAlign: 'center' }}>
            <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Milestones
            </Text>
            <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F' }}>
              Twenty-Five Years of Progress
            </Title>
          </Box>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { year: '2001', title: 'Everfield Academy Founded', desc: 'Inaugural campus opened with 120 elementary students focused on progressive bilingual education.' },
              { year: '2008', title: 'IB World School Accreditation', desc: 'Authorized for International Baccalaureate Diploma Programme with 100% first-cohort graduation.' },
              { year: '2015', title: 'Opening of the STEM & Robotics Hangar', desc: 'Inauguration of the 4,500 sq ft innovation wing and partnership with regional tech incubators.' },
              { year: '2021', title: 'Bioclimatic Campus Expansion', desc: 'Completion of the award-winning architectural campus pavilion, sports arena, and concert hall.' },
              { year: '2026', title: 'Quarter-Century Silver Jubilee', desc: 'Recognized among the top 10 future-ready international schools worldwide.' },
            ].map((t) => (
              <Box key={t.year} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', paddingBottom: '24px', borderBottom: '1px solid #ECEAE5' }}>
                <Text style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#1F1F1F', minWidth: '80px' }}>
                  {t.year}
                </Text>
                <div>
                  <Title order={4} style={{ fontSize: '1.15rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '4px' }}>
                    {t.title}
                  </Title>
                  <Text size="sm" style={{ color: '#555' }}>
                    {t.desc}
                  </Text>
                </div>
              </Box>
            ))}
          </div>
        </Container>
      </Box>

      {/* Configurable Achievements */}
      <Box style={{ padding: '80px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #ECEAE5' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Grid gutter={0}>
            <Grid.Col span={{ base: 6, sm: 3 }}>
              <StatCard number="95%+" label="Academic Honors" description="Graduates scoring in the top 10th percentile globally" borderRight />
            </Grid.Col>
            <Grid.Col span={{ base: 6, sm: 3 }}>
              <StatCard number="50+" label="Annual Competitions" description="Robotics, MUN, athletics, debate & Olympiad medals" borderRight />
            </Grid.Col>
            <Grid.Col span={{ base: 6, sm: 3 }}>
              <StatCard number="30+" label="Clubs & Ensembles" description="Faculty mentored student-directed societies" borderRight />
            </Grid.Col>
            <Grid.Col span={{ base: 6, sm: 3 }}>
              <StatCard number="100+" label="Student Inventions" description="Patents, prototypes, and community social projects" />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default About;
