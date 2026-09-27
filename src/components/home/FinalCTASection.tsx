import React from 'react';
import { Box, Container, Title, Text, Group } from '@mantine/core';
import IMAGES from '../../assets/images';
import AnimatedButton from '../common/AnimatedButton';

export const FinalCTASection: React.FC = () => {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '140px 0', backgroundColor: '#111111' }}>
      {/* Background Image */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${IMAGES.heroCampus})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.38,
        }}
      />

      <Box
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(17,17,17,0.7) 0%, rgba(17,17,17,0.92) 100%)',
        }}
      />

      <Container size="xl" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '880px' }}>
        <Text
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.8125rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.75)',
            marginBottom: '1rem',
          }}
        >
          Everfield International School
        </Text>

        <Title
          order={2}
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(2.4rem, 4.5vw, 3.85rem)',
            lineHeight: 1.12,
            fontWeight: 500,
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
          }}
        >
          Give your child a place to <br />
          <strong style={{ fontWeight: 600 }}>learn, grow and belong.</strong>
        </Title>

        <Text
          style={{
            fontSize: '1.1rem',
            lineHeight: 1.65,
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '2.5rem',
            fontFamily: 'DM Sans, sans-serif',
          }}
        >
          Discover an inspiring school environment where curiosity, creativity and technology come together to prepare students for an ever-changing global future.
        </Text>

        <Group justify="center" gap="md">
          <AnimatedButton to="/admissions" variant="white" arrow="right">
            Apply for Admission
          </AnimatedButton>
          <AnimatedButton
            to="/contact?action=visit"
            variant="outline"
            style={{
              color: '#FFFFFF',
              borderColor: 'rgba(255, 255, 255, 0.4)',
            }}
          >
            Schedule a Campus Visit
          </AnimatedButton>
        </Group>
      </Container>
    </section>
  );
};

export default FinalCTASection;
