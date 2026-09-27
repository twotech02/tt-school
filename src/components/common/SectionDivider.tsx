import React from 'react';
import { Box } from '@mantine/core';

interface SectionDividerProps {
  light?: boolean;
  margin?: string | number;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  light = false,
  margin = '0',
}) => {
  return (
    <Box
      style={{
        width: '100%',
        height: '1px',
        backgroundColor: light ? 'rgba(255, 255, 255, 0.1)' : '#ECEAE5',
        margin: typeof margin === 'number' ? `${margin}px 0` : margin,
      }}
    />
  );
};

export default SectionDivider;
