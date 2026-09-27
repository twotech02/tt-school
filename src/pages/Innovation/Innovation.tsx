import React from 'react';
import { Box, Container, Title, Text, Grid } from '@mantine/core';
import PageLayout from '../../layouts/PageLayout';
import IMAGES from '../../assets/images';
import { INNOVATION_AREAS, SMART_CLASSROOM_FEATURES } from '../../data/innovation';
import InnovationCard from '../../components/innovation/InnovationCard';
import ProjectCard from '../../components/innovation/ProjectCard';
import { STUDENT_ROBOTICS_PROJECTS } from '../../data/robotics';
import AnimatedButton from '../../components/common/AnimatedButton';

export const Innovation: React.FC = () => {
  return (
    <PageLayout
      title="Engineering solutions for tomorrow's frontier."
      eyebrow="Innovation & Technology"
      description="Where artificial intelligence, rapid digital prototyping, and environmental computing intersect to empower authentic student-led discoveries."
      breadcrumbs={[{ label: 'Innovation' }]}
      bgImage={IMAGES.roboticsLab}
      dark
    >
      {/* 3 Core Innovation Domains */}
      <Box style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Box style={{ marginBottom: '60px' }}>
            <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Focus Areas
            </Text>
            <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.5rem', fontWeight: 600, color: '#1F1F1F' }}>
              Core Technological Pillars
            </Title>
          </Box>

          <div>
            {INNOVATION_AREAS.map((area) => (
              <InnovationCard key={area.id} area={area} />
            ))}
          </div>
        </Container>
      </Box>

      {/* Smart Classrooms Feature Grid */}
      <Box style={{ padding: '100px 0', backgroundColor: '#F7F7F5' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Box style={{ marginBottom: '50px' }}>
            <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Digital Infrastructure
            </Text>
            <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F' }}>
              Smart Classroom Architecture
            </Title>
          </Box>

          <Grid gutter={24}>
            {SMART_CLASSROOM_FEATURES.map((feat, idx) => (
              <Grid.Col key={feat.title} span={{ base: 12, sm: 6, lg: 3 }}>
                <Box style={{ backgroundColor: '#FFFFFF', padding: '32px 24px', border: '1px solid #ECEAE5', height: '100%' }}>
                  <Text style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#888', marginBottom: '12px' }}>
                    0{idx + 1}
                  </Text>
                  <Title order={4} style={{ fontSize: '1.15rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '10px' }}>
                    {feat.title}
                  </Title>
                  <Text size="sm" style={{ color: '#666', lineHeight: 1.6 }}>
                    {feat.description}
                  </Text>
                </Box>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Student Capstone Projects Showcase */}
      <Box style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Box style={{ marginBottom: '50px' }}>
            <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Student Research
            </Text>
            <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F' }}>
              Featured Inventions & Competitions
            </Title>
          </Box>

          <Grid gutter={32}>
            {STUDENT_ROBOTICS_PROJECTS.map((project) => (
              <Grid.Col key={project.id} span={{ base: 12, md: 4 }}>
                <ProjectCard project={project} />
              </Grid.Col>
            ))}
          </Grid>

          <Box style={{ marginTop: '50px', textAlign: 'center' }}>
            <AnimatedButton to="/robotics" variant="solid" arrow="right">
              View Robotics & Autonomous Systems Curriculum
            </AnimatedButton>
          </Box>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default Innovation;
