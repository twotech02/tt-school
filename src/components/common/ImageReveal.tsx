import React, { useState } from 'react';
import { Box, Text } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

interface ImageRevealProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  caption?: string;
  zoomOnHover?: boolean;
  overlay?: boolean | string;
  className?: string;
  style?: React.CSSProperties;
  height?: string | number;
  width?: string | number;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  aspectRatio,
  caption,
  zoomOnHover = true,
  overlay = false,
  className = '',
  style,
  height,
  width = '100%',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <Box
      style={{
        position: 'relative',
        width,
        height,
        aspectRatio,
        overflow: 'hidden',
        backgroundColor: '#EBEAE5',
        ...style,
      }}
      className={`img-zoom-container ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: zoomOnHover ? 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
          }}
        />
      ) : (
        <Box
          style={{
            width: '100%',
            height: '100%',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #F0EFEA 0%, #E2E0D8 100%)',
            color: '#777770',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <IconPhoto size={36} stroke={1.5} style={{ opacity: 0.6, marginBottom: '8px' }} />
          <Text size="sm" style={{ fontWeight: 500, fontFamily: 'DM Sans, sans-serif' }}>
            {alt || 'Everfield Campus Architecture'}
          </Text>
        </Box>
      )}

      {overlay && (
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            background:
              typeof overlay === 'string'
                ? overlay
                : 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.65) 100%)',
            pointerEvents: 'none',
          }}
        />
      )}

      {caption && (
        <Box
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '12px 16px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
            color: '#FFFFFF',
          }}
        >
          <Text size="xs" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.02em' }}>
            {caption}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default ImageReveal;
