import React from 'react';
import { Box, Container, Title, Text, Grid } from '@mantine/core';
import PageLayout from '../../layouts/PageLayout';
import IMAGES from '../../assets/images';
import ImageReveal from '../../components/common/ImageReveal';
import { ROBOTICS_PILLARS, ROBOTICS_CURRICULUM_STAGES, STUDENT_ROBOTICS_PROJECTS } from '../../data/robotics';
import RoboticsCard from '../../components/innovation/RoboticsCard';
import ProjectCard from '../../components/innovation/ProjectCard';
import AnimatedButton from '../../components/common/AnimatedButton';

export const Robotics: React.FC = () => {
  return (
    <PageLayout
      title="Precision mechanics, embedded AI & competition robotics."
      eyebrow="Robotics & STEM"
      description="A dedicated 4,500 sq ft innovation hangar where students design, machine, program, and pilot competition-grade autonomous machines."
      breadcrumbs={[
        { label: 'Innovation', href: '/innovation' },
        { label: 'Robotics' },
      ]}
      bgImage={IMAGES.roboticsLab}
      dark
    >
      {/* Dark Premium Lab Showcase */}
      <Box style={{ padding: '100px 0', backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Grid gutter={48} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text size="xs" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Hangar Infrastructure
              </Text>
              <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.5rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '20px', lineHeight: 1.2 }}>
                University-Grade Engineering Equipment
              </Title>
              <Text size="md" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: '24px' }}>
                Our robotics hangar houses a 12-meter tournament arena for FIRST Tech Challenge and VEX Robotics, an enclosed precision machining bay with CNC mills and laser cutters, and a 16-station electronics assembly zone equipped with digital oscilloscopes and SMD soldering irons.
              </Text>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                {[
                  '12-Meter regulation competition test track & obstacle course',
                  'Industrial FDM & SLA resin 3D printing farm',
                  'High-speed computer vision processing workstations (NVIDIA RTX)',
                  'Modular pneumatic testing rigs & strain gauge dynamometers',
                ].map((item) => (
                  <Text key={item} size="sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    ✓ {item}
                  </Text>
                ))}
              </div>

              <AnimatedButton to="/contact?action=visit" variant="white" arrow="right">
                Tour the Robotics Hangar
              </AnimatedButton>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <ImageReveal
                src={IMAGES.roboticsLab}
                alt="Everfield students programming autonomous rovers"
                aspectRatio="16/10"
                style={{ border: '1px solid rgba(255, 255, 255, 0.15)' }}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* 4 Pillars: BUILD, CODE, EXPERIMENT, CREATE */}
      <Box style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Box style={{ marginBottom: '60px' }}>
            <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Methodology
            </Text>
            <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F' }}>
              The Four Principles of Engineering
            </Title>
          </Box>

          <Grid gutter={24}>
            {ROBOTICS_PILLARS.map((p) => (
              <Grid.Col key={p.tag} span={{ base: 12, sm: 6, lg: 3 }}>
                <Box style={{ backgroundColor: '#F7F7F5', border: '1px solid #ECEAE5', padding: '36px 24px', height: '100%' }}>
                  <Text style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', color: '#1F1F1F', marginBottom: '16px' }}>
                    {p.tag}
                  </Text>
                  <Title order={3} style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '12px', lineHeight: 1.25 }}>
                    {p.title}
                  </Title>
                  <Text size="sm" style={{ color: '#555', lineHeight: 1.6 }}>
                    {p.description}
                  </Text>
                </Box>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Grade-by-Grade Robotics Progression */}
      <Box style={{ padding: '100px 0', backgroundColor: '#F7F7F5' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Box style={{ marginBottom: '50px' }}>
            <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Grade Progression
            </Text>
            <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F' }}>
              K–12 Robotics & Embedded Systems Curriculum
            </Title>
          </Box>

          <Grid gutter={24}>
            {ROBOTICS_CURRICULUM_STAGES.map((item, idx) => (
              <Grid.Col key={item.stage} span={{ base: 12, sm: 6, lg: 3 }}>
                <RoboticsCard item={item} index={idx} />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Competition Projects */}
      <Box style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Box style={{ marginBottom: '50px' }}>
            <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Competition Accolades
            </Text>
            <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F' }}>
              Championship Autonomous Projects
            </Title>
          </Box>

          <Grid gutter={32}>
            {STUDENT_ROBOTICS_PROJECTS.map((project) => (
              <Grid.Col key={project.id} span={{ base: 12, md: 4 }}>
                <ProjectCard project={project} />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default Robotics;
