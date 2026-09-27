import React from 'react';
import { Box, Title, Text, Grid } from '@mantine/core';
import { InnovationArea } from '../../data/innovation';
import ImageReveal from '../common/ImageReveal';

interface InnovationCardProps {
  area: InnovationArea;
}

export const InnovationCard: React.FC<InnovationCardProps> = ({ area }) => {
  return (
    <Box
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #ECEAE5',
        marginBottom: '40px',
        overflow: 'hidden',
      }}
    >
      <Grid gutter={0} align="center">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <ImageReveal
            src={area.image}
            alt={area.title}
            aspectRatio="16/10"
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Box style={{ padding: '40px 36px' }}>
            <Text size="xs" style={{ color: '#888888', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '8px' }}>
              {area.subtitle}
            </Text>

            <Title order={3} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.5rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '16px' }}>
              {area.title}
            </Title>

            <Text size="sm" style={{ color: '#555555', lineHeight: 1.65, marginBottom: '24px', fontFamily: 'DM Sans, sans-serif' }}>
              {area.description}
            </Text>

            {/* Technologies */}
            <Box style={{ marginBottom: '24px' }}>
              <Text size="xs" style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600, marginBottom: '8px' }}>
                Toolchains & Platforms:
              </Text>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {area.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'DM Sans, sans-serif',
                      padding: '4px 10px',
                      backgroundColor: '#F7F7F5',
                      border: '1px solid #ECEAE5',
                      color: '#333333',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Box>

            {/* Metrics */}
            <div style={{ display: 'flex', gap: '32px', borderTop: '1px solid #ECEAE5', paddingTop: '16px' }}>
              {area.metrics.map((m) => (
                <div key={m.label}>
                  <Text style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: '#1F1F1F' }}>
                    {m.value}
                  </Text>
                  <Text size="xs" style={{ color: '#777777' }}>
                    {m.label}
                  </Text>
                </div>
              ))}
            </div>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default InnovationCard;
