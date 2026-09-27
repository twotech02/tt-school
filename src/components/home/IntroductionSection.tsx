import React, { useState } from 'react';
import { Box, Container, Grid, Title, Text, Stack, UnstyledButton } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import IMAGES from '../../assets/images';
import ImageReveal from '../common/ImageReveal';
import StatCard from '../common/StatCard';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const WHY_CHOOSE_US_ITEMS: FeatureItem[] = [
  {
    id: 1,
    title: 'Experienced Teachers',
    description: 'Our teachers take the time to understand each student, helping them build confidence and develop a genuine love for learning.',
    image: IMAGES.smartClassroom,
  },
  {
    id: 2,
    title: 'A Global Community',
    description: 'Welcoming students and faculty from over 45 nationalities, nurturing cultural empathy, bilingual fluency, and open-minded perspectives.',
    image: IMAGES.happyStudents,
  },
  {
    id: 3,
    title: 'Inspiring Learning Spaces',
    description: 'Biophilic campus architecture with abundant natural daylight, interactive 4K collaboration surfaces, and specialized research laboratories.',
    image: IMAGES.campusArchitecture,
  },
  {
    id: 4,
    title: 'Supporting Student Growth',
    description: 'Comprehensive pastoral care, personalized academic pathways, and emotional wellbeing counseling guiding every step of the journey.',
    image: IMAGES.heroCampus,
  },
];

export const IntroductionSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<FeatureItem>(WHY_CHOOSE_US_ITEMS[0]);

  return (
    <section id="introduction-section" style={{ padding: '120px 0 80px', backgroundColor: '#FFFFFF' }}>
      <Container size="xl" style={{ maxWidth: '1360px' }}>
        {/* Eyebrow and Headline matching reference image */}
        <Box style={{ marginBottom: '60px' }}>
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
            / Why choose us
          </Text>

          <Title
            order={2}
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
              lineHeight: 1.2,
              fontWeight: 400,
              color: '#1F1F1F',
              letterSpacing: '-0.025em',
              maxWidth: '860px',
            }}
          >
            We focus on{' '}
            <strong style={{ fontWeight: 600 }}>
              creating a learning environment where students feel supported, connected, and encouraged to do their best every day.
            </strong>
          </Title>
        </Box>

        {/* Asymmetric 2-column layout matching reference image */}
        <Grid gutter={48} align="center">
          {/* Left Column: Architectural Photo */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <ImageReveal
              src={activeItem.image}
              alt={activeItem.title}
              aspectRatio="16/10"
              style={{
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.06)',
                border: '1px solid #ECEAE5',
              }}
            />
          </Grid.Col>

          {/* Right Column: Active detail and interactive list matching reference image */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            {/* Active item headline callout */}
            <Box style={{ paddingBottom: '32px', borderBottom: '1px solid #ECEAE5' }}>
              <Text
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#888888',
                  marginBottom: '10px',
                }}
              >
                0{activeItem.id}
              </Text>
              <Title
                order={3}
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#1F1F1F',
                  marginBottom: '12px',
                }}
              >
                {activeItem.title}
              </Title>
              <Text
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#555555',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                {activeItem.description}
              </Text>
            </Box>

            {/* List of items matching reference image */}
            <Stack gap={0} style={{ marginTop: '16px' }}>
              {WHY_CHOOSE_US_ITEMS.map((item) => {
                const isSelected = activeItem.id === item.id;
                return (
                  <UnstyledButton
                    key={item.id}
                    onClick={() => setActiveItem(item)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 0',
                      borderBottom: '1px solid #ECEAE5',
                      color: isSelected ? '#1F1F1F' : '#666666',
                      fontWeight: isSelected ? 600 : 400,
                      fontSize: '0.9375rem',
                      fontFamily: 'DM Sans, sans-serif',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: isSelected ? '#1F1F1F' : 'transparent',
                          border: isSelected ? 'none' : '1px solid #AAA',
                        }}
                      />
                      <span>{item.title}</span>
                    </div>
                    <IconChevronRight
                      size={16}
                      color={isSelected ? '#1F1F1F' : '#BBB'}
                      style={{
                        transform: isSelected ? 'translateX(2px)' : 'none',
                        transition: 'transform 0.2s',
                      }}
                    />
                  </UnstyledButton>
                );
              })}
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Four Statistics Pillars with hairline borders */}
        <Box
          style={{
            marginTop: '80px',
            paddingTop: '20px',
            borderTop: '1px solid #ECEAE5',
          }}
        >
          <Grid gutter={0}>
            <Grid.Col span={{ base: 6, sm: 3 }}>
              <StatCard number="25+" label="Years of Excellence" description="Continuous academic distinction since 2001" borderRight />
            </Grid.Col>
            <Grid.Col span={{ base: 6, sm: 3 }}>
              <StatCard number="1:15" label="Teacher / Student Ratio" description="Individualized guidance and small cohorts" borderRight />
            </Grid.Col>
            <Grid.Col span={{ base: 6, sm: 3 }}>
              <StatCard number="30+" label="Clubs & Activities" description="Expansive co-curricular opportunities" borderRight />
            </Grid.Col>
            <Grid.Col span={{ base: 6, sm: 3 }}>
              <StatCard number="100%" label="Future-Ready Learning" description="Accredited STEAM & university pathways" />
            </Grid.Col>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default IntroductionSection;
