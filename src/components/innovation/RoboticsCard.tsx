import React from 'react';
import { Box, Title, Text, Stack } from '@mantine/core';

interface RoboticsCurriculumItem {
  stage: string;
  title: string;
  tools: string[];
  focus: string;
}

interface RoboticsCardProps {
  item: RoboticsCurriculumItem;
  index: number;
}

export const RoboticsCard: React.FC<RoboticsCardProps> = ({ item, index }) => {
  return (
    <Box
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #ECEAE5',
        padding: '32px 28px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#1F1F1F')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#ECEAE5')}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <Text size="xs" style={{ color: '#888888', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {item.stage}
          </Text>
          <Text style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.875rem', fontWeight: 700, color: '#999' }}>
            0{index + 1}
          </Text>
        </div>

        <Title order={3} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.25rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '12px', lineHeight: 1.25 }}>
          {item.title}
        </Title>

        <Text size="sm" style={{ color: '#555555', lineHeight: 1.6, marginBottom: '20px', fontFamily: 'DM Sans, sans-serif' }}>
          {item.focus}
        </Text>
      </div>

      <Box style={{ borderTop: '1px solid #ECEAE5', paddingTop: '16px' }}>
        <Text size="xs" style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600, marginBottom: '8px' }}>
          Hardware & Software:
        </Text>
        <Stack gap="4px">
          {item.tools.map((t) => (
            <Text key={t} size="xs" style={{ color: '#333', fontWeight: 500 }}>
              • {t}
            </Text>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default RoboticsCard;
