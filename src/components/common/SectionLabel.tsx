import React from 'react';
import { Box, Text } from '@mantine/core';

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  light = false,
  className = '',
  style,
}) => {
  return (
    <Box
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        marginBottom: '1rem',
        ...style,
      }}
      className={className}
    >
      <Text
        component="span"
        style={{
          color: light ? 'rgba(255, 255, 255, 0.6)' : '#888888',
          fontSize: '0.8125rem',
          fontWeight: 500,
          fontFamily: 'DM Sans, sans-serif',
          letterSpacing: '0.04em',
          textTransform: 'none',
        }}
      >
        / {children}
      </Text>
    </Box>
  );
};

export default SectionLabel;
