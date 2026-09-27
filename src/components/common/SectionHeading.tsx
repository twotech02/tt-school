import React from 'react';
import { Title, Text, Box } from '@mantine/core';

interface SectionHeadingProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  maxWidth?: number | string;
  className?: string;
  titleSize?: 'sm' | 'md' | 'lg' | 'xl';
  style?: React.CSSProperties;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
  light = false,
  maxWidth = '780px',
  className = '',
  titleSize = 'lg',
  style,
}) => {
  const getFontSize = () => {
    switch (titleSize) {
      case 'xl':
        return 'clamp(2.2rem, 4vw, 3.25rem)';
      case 'lg':
        return 'clamp(1.85rem, 3.2vw, 2.75rem)';
      case 'md':
        return 'clamp(1.5rem, 2.5vw, 2.15rem)';
      case 'sm':
        return 'clamp(1.25rem, 2vw, 1.65rem)';
    }
  };

  return (
    <Box
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? maxWidth : '100%',
        margin: align === 'center' ? '0 auto' : undefined,
        marginBottom: '2.5rem',
        ...style,
      }}
      className={className}
    >
      {label && (
        <Text
          style={{
            color: light ? 'rgba(255, 255, 255, 0.65)' : '#777777',
            fontSize: '0.8125rem',
            fontWeight: 500,
            letterSpacing: '0.04em',
            marginBottom: '0.75rem',
            fontFamily: 'DM Sans, sans-serif',
          }}
        >
          / {label}
        </Text>
      )}

      <Title
        order={2}
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: getFontSize(),
          lineHeight: 1.18,
          fontWeight: 400,
          color: light ? '#FFFFFF' : '#1F1F1F',
          letterSpacing: '-0.025em',
          maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
        }}
      >
        {title}
      </Title>

      {subtitle && (
        <Text
          style={{
            marginTop: '1.25rem',
            fontSize: '1.0625rem',
            lineHeight: 1.65,
            color: light ? 'rgba(255, 255, 255, 0.75)' : '#555555',
            maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
            fontFamily: 'DM Sans, sans-serif',
          }}
        >
          {subtitle}
        </Text>
      )}
    </Box>
  );
};

export default SectionHeading;
