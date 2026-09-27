import React from 'react';
import { Box, Container, Title, Text, Grid, Stack } from '@mantine/core';
import { AcademicStage } from '../../data/academics';
import ImageReveal from '../common/ImageReveal';
import AnimatedButton from '../common/AnimatedButton';

interface LearningStageProps {
  stage: AcademicStage;
}

export const LearningStage: React.FC<LearningStageProps> = ({ stage }) => {
  return (
    <Box style={{ padding: '80px 0 120px' }}>
      <Container size="xl" style={{ maxWidth: '1360px' }}>
        {/* Main Stage Overview */}
        <Grid gap={48} align="center" style={{ marginBottom: '80px' }}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <ImageReveal
              src={stage.image}
              alt={stage.title}
              aspectRatio="16/10"
              style={{ border: '1px solid #ECEAE5' }}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text size="xs" style={{ color: '#888888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              {stage.grades} · {stage.ageRange}
            </Text>

            <Title
              order={2}
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(1.85rem, 3vw, 2.5rem)',
                fontWeight: 600,
                color: '#1F1F1F',
                lineHeight: 1.2,
                marginBottom: '20px',
              }}
            >
              {stage.title}
            </Title>

            <Text size="md" style={{ color: '#555555', lineHeight: 1.7, marginBottom: '28px', fontFamily: 'DM Sans, sans-serif' }}>
              {stage.description}
            </Text>

            {/* Quote block */}
            <Box style={{ borderLeft: '2px solid #1F1F1F', paddingLeft: '20px', margin: '24px 0' }}>
              <Text style={{ fontStyle: 'italic', fontSize: '0.95rem', color: '#333333', lineHeight: 1.55 }}>
                "{stage.quote.text}"
              </Text>
              <Text size="xs" style={{ color: '#777777', marginTop: '6px', fontWeight: 600 }}>
                {stage.quote.author} — {stage.quote.role}
              </Text>
            </Box>

            <AnimatedButton to="/contact?action=visit" variant="solid" arrow="right">
              Book a Tour for {stage.title}
            </AnimatedButton>
          </Grid.Col>
        </Grid>

        {/* Learning Objectives & Key Subjects */}
        <Grid gap={40}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box style={{ backgroundColor: '#F7F7F5', border: '1px solid #ECEAE5', padding: '36px', height: '100%' }}>
              <Title order={3} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.25rem', fontWeight: 600, marginBottom: '20px' }}>
                Core Learning Objectives
              </Title>
              <Stack gap="md">
                {stage.learningObjectives.map((obj, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', fontWeight: 700, color: '#888' }}>
                      0{i + 1}
                    </span>
                    <Text size="sm" style={{ color: '#444', lineHeight: 1.6 }}>
                      {obj}
                    </Text>
                  </div>
                ))}
              </Stack>
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box style={{ backgroundColor: '#FFFFFF', border: '1px solid #ECEAE5', padding: '36px', height: '100%' }}>
              <Title order={3} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.25rem', fontWeight: 600, marginBottom: '20px' }}>
                Curriculum Focus & Subjects
              </Title>
              <Stack gap="sm">
                {stage.keySubjects.map((sub, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '10px', borderBottom: '1px solid #F0EFEA' }}>
                    <span style={{ width: '5px', height: '5px', backgroundColor: '#1F1F1F', borderRadius: '50%' }} />
                    <Text size="sm" style={{ fontWeight: 500, color: '#222' }}>
                      {sub}
                    </Text>
                  </div>
                ))}
              </Stack>

              <Box style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #ECEAE5' }}>
                <Text size="xs" style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, marginBottom: '10px' }}>
                  Division Highlights:
                </Text>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {stage.features.map((feat, i) => (
                    <Text key={i} size="xs" style={{ color: '#666' }}>
                      ✓ {feat}
                    </Text>
                  ))}
                </div>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default LearningStage;
