import React from 'react';
import { Box, Title, Text, Grid } from '@mantine/core';
import { Facility } from '../../data/facilities';
import ImageReveal from '../common/ImageReveal';

interface FacilityCardProps {
  facility: Facility;
}

export const FacilityCard: React.FC<FacilityCardProps> = ({ facility }) => {
  return (
    <Box
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #ECEAE5',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'border-color 0.25s ease, transform 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#1F1F1F';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#ECEAE5';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div>
        <ImageReveal
          src={facility.image}
          alt={facility.title}
          aspectRatio="16/10"
          style={{ borderBottom: '1px solid #ECEAE5' }}
        />

        <Box style={{ padding: '28px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <Text size="xs" style={{ color: '#888888', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
              {facility.category}
            </Text>
            {facility.location && (
              <Text size="xs" style={{ color: '#999' }}>
                {facility.location}
              </Text>
            )}
          </div>

          <Title order={3} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.25rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '12px' }}>
            {facility.title}
          </Title>

          <Text size="sm" style={{ color: '#555555', lineHeight: 1.6, marginBottom: '20px', fontFamily: 'DM Sans, sans-serif' }}>
            {facility.description}
          </Text>

          <Box style={{ borderTop: '1px solid #ECEAE5', paddingTop: '16px' }}>
            <Text size="xs" style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600, marginBottom: '8px' }}>
              Key Specifications:
            </Text>
            <Grid gutter={8}>
              {facility.features.slice(0, 3).map((f, i) => (
                <Grid.Col key={i} span={12}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#444' }}>
                    <span style={{ width: '4px', height: '4px', backgroundColor: '#1F1F1F', borderRadius: '50%' }} />
                    <span>{f}</span>
                  </div>
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Box>
      </div>

      {facility.capacity && (
        <Box style={{ padding: '10px 24px', borderTop: '1px solid #ECEAE5', backgroundColor: '#FAFAF8' }}>
          <Text size="xs" style={{ color: '#777' }}>
            Capacity: <strong style={{ color: '#1F1F1F' }}>{facility.capacity}</strong>
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default FacilityCard;
