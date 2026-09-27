import React, { useState } from 'react';
import { Box, Container, Title, Text, Group } from '@mantine/core';
import { IconArrowLeft, IconArrowRight, IconQuote } from '@tabler/icons-react';
import { TESTIMONIALS_DATA } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Parents' | 'Students' | 'Alumni'>('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredTestimonials = activeCategory === 'All'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((t) => t.category === activeCategory);

  const safeIndex = currentIndex % filteredTestimonials.length;
  const current = filteredTestimonials[safeIndex] || filteredTestimonials[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '120px 0' }}>
      <Container size="xl" style={{ maxWidth: '1360px' }}>
        <Box style={{ marginBottom: '50px' }}>
          <Text
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: '#777777',
              letterSpacing: '0.04em',
              marginBottom: '1rem',
            }}
          >
            / Voices of Everfield
          </Text>

          <Group justify="space-between" align="flex-end" wrap="wrap">
            <Title
              order={2}
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
                lineHeight: 1.15,
                fontWeight: 500,
                color: '#1F1F1F',
                letterSpacing: '-0.025em',
                maxWidth: '680px',
              }}
            >
              Stories from our community.
            </Title>

            {/* Category Filter */}
            <Group gap="xs">
              {(['All', 'Parents', 'Students', 'Alumni'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentIndex(0);
                  }}
                  style={{
                    padding: '6px 14px',
                    fontSize: '0.8125rem',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: activeCategory === cat ? 600 : 400,
                    color: activeCategory === cat ? '#1F1F1F' : '#777',
                    backgroundColor: activeCategory === cat ? '#ECEAE5' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {cat}
                </button>
              ))}
            </Group>
          </Group>
        </Box>

        {/* Large Editorial Quote Card */}
        <Box
          style={{
            backgroundColor: '#F7F7F5',
            border: '1px solid #ECEAE5',
            padding: '60px 48px',
            position: 'relative',
          }}
        >
          <Box style={{ position: 'absolute', top: '32px', right: '40px', opacity: 0.15, color: '#1F1F1F' }}>
            <IconQuote size={64} stroke={1} />
          </Box>

          <div style={{ maxWidth: '900px' }}>
            <Text
              size="xs"
              style={{
                color: '#888888',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: '20px',
              }}
            >
              Perspective · {current.category}
            </Text>

            <Text
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(1.25rem, 2.2vw, 1.85rem)',
                fontWeight: 400,
                lineHeight: 1.45,
                color: '#1F1F1F',
                letterSpacing: '-0.015em',
                marginBottom: '36px',
              }}
            >
              "{current.quote}"
            </Text>

            <Box style={{ borderTop: '1px solid #E2E0D8', paddingTop: '20px' }}>
              <Text style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.05rem', fontWeight: 600, color: '#1F1F1F' }}>
                {current.author}
              </Text>
              <Text size="sm" style={{ color: '#666666', fontFamily: 'DM Sans, sans-serif' }}>
                {current.role}
              </Text>
              <Text size="xs" style={{ color: '#888888', marginTop: '2px', fontFamily: 'DM Sans, sans-serif' }}>
                {current.detail}
              </Text>
            </Box>
          </div>

          {/* Navigation Controls */}
          <Group gap="sm" style={{ marginTop: '36px' }}>
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                border: '1px solid #ECEAE5',
                cursor: 'pointer',
                color: '#1F1F1F',
                transition: 'border-color 0.2s',
              }}
            >
              <IconArrowLeft size={18} stroke={1.5} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                border: '1px solid #ECEAE5',
                cursor: 'pointer',
                color: '#1F1F1F',
                transition: 'border-color 0.2s',
              }}
            >
              <IconArrowRight size={18} stroke={1.5} />
            </button>
            <Text size="xs" style={{ color: '#888888', marginLeft: '12px' }}>
              {safeIndex + 1} of {filteredTestimonials.length}
            </Text>
          </Group>
        </Box>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
