import React from 'react';
import { Box, Title, Text, Grid } from '@mantine/core';
import { ADMISSION_STEPS } from '../../data/admissions';

export const AdmissionSteps: React.FC = () => {
  return (
    <Box style={{ padding: '60px 0' }}>
      <Box style={{ marginBottom: '40px' }}>
        <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
          Five-Step Enrollment
        </Text>
        <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2rem', fontWeight: 600, color: '#1F1F1F' }}>
          Transparent, Family-Centered Admissions
        </Title>
      </Box>

      <Grid gutter={24}>
        {ADMISSION_STEPS.map((s) => (
          <Grid.Col key={s.step} span={{ base: 12, sm: 6, md: 4, lg: 2.4 }}>
            <Box
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #ECEAE5',
                padding: '28px 20px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <Text style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#1F1F1F', marginBottom: '12px' }}>
                  {s.step}
                </Text>
                <Title order={4} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.05rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '8px' }}>
                  {s.title}
                </Title>
                <Text size="xs" style={{ color: '#666', lineHeight: 1.55 }}>
                  {s.description}
                </Text>
              </div>

              <Box style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid #ECEAE5' }}>
                <Text size="xs" style={{ color: '#888', fontStyle: 'italic' }}>
                  {s.timeline}
                </Text>
              </Box>
            </Box>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default AdmissionSteps;
