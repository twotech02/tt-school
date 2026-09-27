import React, { useState } from 'react';
import { Box, Container, Title, Text, Group, Modal } from '@mantine/core';
import { IconArrowDown, IconPlayerPlay } from '@tabler/icons-react';
import IMAGES from '../../assets/images';
import AnimatedButton from '../common/AnimatedButton';

export const HeroSection: React.FC = () => {
  const [tourModalOpen, setTourModalOpen] = useState(false);

  const scrollToNext = () => {
    const introElem = document.getElementById('introduction-section');
    if (introElem) {
      introElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#111111',
      }}
    >
      {/* Background Image with Dark Vignette/Overlay matching reference image */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${IMAGES.heroCampus})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          transform: 'scale(1.02)',
          transition: 'transform 8s ease-out',
        }}
      />

      {/* Cinematic dark scrim overlay ensuring WCAG AA legibility for white text */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(15,15,15,0.45) 0%, rgba(15,15,15,0.65) 60%, rgba(15,15,15,0.85) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Main Hero Content */}
      <Container
        size="xl"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1360px',
          paddingTop: '130px',
          paddingBottom: '100px',
        }}
      >
        <Box style={{ maxWidth: '820px' }}>
          {/* Eyebrow */}
          <Text
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.75)',
              marginBottom: '1.25rem',
            }}
          >
            Everfield International School
          </Text>

          {/* Heading from reference image */}
          <Title
            order={1}
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(2.75rem, 5.5vw, 4.75rem)',
              lineHeight: 1.08,
              fontWeight: 400,
              color: '#FFFFFF',
              letterSpacing: '-0.035em',
            }}
          >
            A school where every <br />
            <strong style={{ fontWeight: 600 }}>student can find their path.</strong>
          </Title>

          {/* Description from reference image */}
          <Text
            style={{
              marginTop: '2rem',
              fontSize: '1.125rem',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.82)',
              maxWidth: '680px',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 400,
            }}
          >
            At Everfield Academy, we believe every student has their own strengths, interests, and dreams. Our role is to create a supportive environment where they can learn with confidence, explore new ideas, and grow into who they are meant to become.
          </Text>

          {/* Action CTAs */}
          <Group gap="md" style={{ marginTop: '2.5rem' }}>
            <AnimatedButton to="/about" variant="white" arrow="right">
              Explore Our School
            </AnimatedButton>
            <AnimatedButton
              to="/contact?action=visit"
              variant="outline"
              style={{
                color: '#FFFFFF',
                borderColor: 'rgba(255, 255, 255, 0.4)',
              }}
            >
              Book a Campus Visit
            </AnimatedButton>
          </Group>
        </Box>
      </Container>

      {/* Floating Campus Tour Card on Bottom-Right as seen in the reference image */}
      <Box
        visibleFrom="md"
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '32px',
          zIndex: 3,
        }}
        className="hero-tour-card"
      >
        <Box
          onClick={() => setTourModalOpen(true)}
          style={{
            cursor: 'pointer',
            width: '240px',
            backgroundColor: 'rgba(20, 20, 20, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
            padding: '8px',
            transition: 'transform 0.3s ease, border-color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
          }}
        >
          <Box style={{ position: 'relative', width: '100%', height: '120px', overflow: 'hidden' }}>
            <img
              src={IMAGES.campusOverview}
              alt="Campus tour thumbnail"
              referrerPolicy="no-referrer"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1F1F1F',
                }}
              >
                <IconPlayerPlay size={16} fill="#1F1F1F" style={{ marginLeft: 2 }} />
              </Box>
            </Box>
          </Box>
          <Group justify="space-between" align="center" style={{ padding: '8px 4px 4px' }}>
            <Text size="xs" style={{ color: '#FFFFFF', fontWeight: 500, fontFamily: 'DM Sans, sans-serif' }}>
              Take a campus tour
            </Text>
            <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              2:40 min
            </Text>
          </Group>
        </Box>
      </Box>

      {/* Bottom Scroll Indicator */}
      <Box
        onClick={scrollToNext}
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '32px',
          zIndex: 3,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'rgba(255, 255, 255, 0.6)',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)')}
      >
        <IconArrowDown size={14} />
        <Text size="xs" style={{ letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>
          Scroll to explore
        </Text>
      </Box>

      {/* Video / Campus Tour Modal */}
      <Modal
        opened={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
        title="Everfield Campus Walkthrough"
        size="lg"
        centered
        styles={{
          header: { fontFamily: 'Manrope, sans-serif' },
        }}
      >
        <Box style={{ paddingBottom: '16px' }}>
          <img
            src={IMAGES.heroCampus}
            alt="Virtual tour showcase"
            referrerPolicy="no-referrer"
            style={{ width: '100%', height: 'auto', display: 'block', marginBottom: '16px' }}
          />
          <Title order={4} style={{ marginBottom: '8px' }}>
            Architectural Campus Experience
          </Title>
          <Text size="sm" c="dimmed">
            Experience our 18-acre green campus featuring bioclimatic architecture, STEM laboratories, Olympic sports pavilion, and performing arts center.
          </Text>
          <Group justify="flex-end" style={{ marginTop: '20px' }}>
            <AnimatedButton to="/contact?action=visit" variant="solid" onClick={() => setTourModalOpen(false)}>
              Schedule an In-Person Tour
            </AnimatedButton>
          </Group>
        </Box>
      </Modal>
    </Box>
  );
};

export default HeroSection;
