import React from 'react';
import { Box, Text } from '@mantine/core';

interface StatCardProps {
  number: string;
  label: string;
  description?: string;
  light?: boolean;
  borderRight?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  number,
  label,
  description,
  light = false,
  borderRight = false,
}) => {
  return (
    <Box
      style={{
        padding: '24px 20px',
        borderRight: borderRight ? `1px solid ${light ? 'rgba(255,255,255,0.1)' : '#EAEAE6'}` : 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Text
        className="tabular-nums"
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'clamp(2.5rem, 3.5vw, 3.5rem)',
          fontWeight: 600,
          lineHeight: 1.05,
          color: light ? '#FFFFFF' : '#1F1F1F',
          letterSpacing: '-0.03em',
        }}
      >
        {number}
      </Text>

      <Text
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: '0.9375rem',
          fontWeight: 600,
          color: light ? 'rgba(255, 255, 255, 0.9)' : '#1F1F1F',
          marginTop: '8px',
          letterSpacing: '-0.01em',
        }}
      >
        {label}
      </Text>

      {description && (
        <Text
          size="xs"
          style={{
            color: light ? 'rgba(255, 255, 255, 0.6)' : '#777777',
            marginTop: '6px',
            lineHeight: 1.5,
            fontFamily: 'DM Sans, sans-serif',
          }}
        >
          {description}
        </Text>
      )}
    </Box>
  );
};

export default StatCard;
