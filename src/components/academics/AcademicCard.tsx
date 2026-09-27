import React from 'react';
import { Box, Title, Text, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconArrowUpRight } from '@tabler/icons-react';
import { AcademicStage } from '../../data/academics';
import ImageReveal from '../common/ImageReveal';

interface AcademicCardProps {
  stage: AcademicStage;
}

export const AcademicCard: React.FC<AcademicCardProps> = ({ stage }) => {
  return (
    <Box
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #ECEAE5',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
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
      <ImageReveal
        src={stage.image}
        alt={stage.title}
        aspectRatio="16/10"
        style={{ borderBottom: '1px solid #ECEAE5' }}
      />
      <Box style={{ padding: '28px 24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Text size="xs" style={{ color: '#888888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
            {stage.grades} · {stage.ageRange}
          </Text>

          <Title order={3} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.35rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '12px' }}>
            {stage.title}
          </Title>

          <Text size="sm" style={{ color: '#555555', lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif' }}>
            {stage.summary}
          </Text>
        </div>

        <Group justify="space-between" align="center" style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #ECEAE5' }}>
          <Link
            to={`/academics/${stage.slug}`}
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#1F1F1F',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            <span>Curriculum & Details</span>
            <IconArrowUpRight size={15} />
          </Link>
        </Group>
      </Box>
    </Box>
  );
};

export default AcademicCard;
