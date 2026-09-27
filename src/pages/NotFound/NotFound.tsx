import React from 'react';
import { Box, Container, Title, Text } from '@mantine/core';
import AnimatedButton from '../../components/common/AnimatedButton';

export const NotFound: React.FC = () => {
  return (
    <Box style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7F7F5', padding: '120px 24px' }}>
      <Container size="sm" style={{ textAlign: 'center' }}>
        <Text style={{ fontFamily: 'Manrope, sans-serif', fontSize: '6rem', fontWeight: 800, color: '#1F1F1F', lineHeight: 1 }}>
          404
        </Text>
        <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.75rem', fontWeight: 600, margin: '20px 0 12px' }}>
          Page Not Found
        </Title>
        <Text size="md" style={{ color: '#666', marginBottom: '32px', fontFamily: 'DM Sans, sans-serif' }}>
          The page or curriculum document you are seeking may have been reorganized within our new portal structure.
        </Text>
        <AnimatedButton to="/" variant="solid" arrow="right">
          Return to Everfield Homepage
        </AnimatedButton>
      </Container>
    </Box>
  );
};

export default NotFound;
