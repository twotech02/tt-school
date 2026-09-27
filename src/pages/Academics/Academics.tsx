import React from 'react';
import { Box, Container, Title, Text, Grid } from '@mantine/core';
import PageLayout from '../../layouts/PageLayout';
import IMAGES from '../../assets/images';
import { ACADEMIC_STAGES } from '../../data/academics';
import AcademicCard from '../../components/academics/AcademicCard';
import CurriculumSection from '../../components/academics/CurriculumSection';
import AnimatedButton from '../../components/common/AnimatedButton';

export const Academics: React.FC = () => {
  return (
    <PageLayout
      title="Intellectual rigor rooted in joyful inquiry."
      eyebrow="Academic Programs"
      description="From early experiential discovery to university-caliber research capstones, our continuum cultivates independent thinkers prepared to lead."
      breadcrumbs={[{ label: 'Academics' }]}
      bgImage={IMAGES.smartClassroom}
      dark
    >
      {/* 4 Academic Stages Grid */}
      <Box style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Box style={{ marginBottom: '60px' }}>
            <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              The Learning Continuum
            </Text>
            <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.5rem', fontWeight: 600, color: '#1F1F1F' }}>
              Four Distinct Stages of Development
            </Title>
          </Box>

          <Grid gutter={32}>
            {ACADEMIC_STAGES.map((stage) => (
              <Grid.Col key={stage.id} span={{ base: 12, md: 6 }}>
                <AcademicCard stage={stage} />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Methodology Pillars */}
      <CurriculumSection />

      {/* University Counseling & Academic Pathways */}
      <Box style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Grid gutter={48} align="center">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Pre-University Advisory
              </Text>
              <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '20px' }}>
                Dedicated College Counseling from Grade 9
              </Title>
              <Text size="md" style={{ color: '#555', lineHeight: 1.7, marginBottom: '16px' }}>
                Our college counselors maintain an intimate 1:25 student ratio, guiding each scholar through standardized testing strategies, portfolio assembly, interview practice, and university selection across North America, the UK, Europe, and Asia-Pacific.
              </Text>
              <Text size="md" style={{ color: '#555', lineHeight: 1.7, marginBottom: '28px' }}>
                100% of our graduating cohorts earn admission to their first- or second-choice universities, accumulating over $3.2M in annual merit scholarships.
              </Text>

              <AnimatedButton to="/contact?action=visit" variant="solid" arrow="right">
                Meet with an Academic Dean
              </AnimatedButton>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <Box style={{ backgroundColor: '#F7F7F5', border: '1px solid #ECEAE5', padding: '36px' }}>
                <Title order={3} style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px' }}>
                  Recent University Matriculations
                </Title>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'University of Cambridge (Computer Science & Engineering)',
                    'University of Oxford (Philosophy, Politics & Economics)',
                    'Stanford University (Artificial Intelligence & Symbolic Systems)',
                    'MIT – Massachusetts Institute of Technology (Mechanical Engineering)',
                    'National University of Singapore (Medicine & Biomedical Sciences)',
                    'Imperial College London (Physics & Mathematics)',
                    'Columbia University (Economics & Sustainable Development)',
                  ].map((u) => (
                    <Text key={u} size="xs" style={{ color: '#444', fontWeight: 500 }}>
                      ✓ {u}
                    </Text>
                  ))}
                </div>
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default Academics;
