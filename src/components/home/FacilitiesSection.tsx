import React, { useState } from 'react';
import { Box, Container, Title, Text, Group, UnstyledButton, Grid } from '@mantine/core';
import { FACILITIES_DATA, FACILITY_CATEGORIES, Facility } from '../../data/facilities';
import ImageReveal from '../common/ImageReveal';
import AnimatedButton from '../common/AnimatedButton';

export const FacilitiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeFacility, setActiveFacility] = useState<Facility>(FACILITIES_DATA[0]);

  const filteredFacilities = selectedCategory === 'All'
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter((f) => f.category === selectedCategory);

  return (
    <section style={{ backgroundColor: '#F7F7F5', padding: '120px 0' }}>
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
            / World-Class Campus
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
              Spaces crafted for exploration.
            </Title>
            <AnimatedButton to="/facilities" variant="outline" arrow="upRight">
              View Complete Directory
            </AnimatedButton>
          </Group>
        </Box>

        {/* Clean Segmented Filter Tabs (Interactive filter controls allowed per frontend-design skill) */}
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '16px',
            marginBottom: '40px',
            borderBottom: '1px solid #ECEAE5',
          }}
        >
          {FACILITY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  const firstOfCat = cat === 'All' ? FACILITIES_DATA[0] : FACILITIES_DATA.find((f) => f.category === cat);
                  if (firstOfCat) setActiveFacility(firstOfCat);
                }}
                style={{
                  padding: '8px 18px',
                  fontSize: '0.85rem',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: isSelected ? 600 : 400,
                  color: isSelected ? '#1F1F1F' : '#666666',
                  backgroundColor: isSelected ? '#FFFFFF' : 'transparent',
                  border: isSelected ? '1px solid #1F1F1F' : '1px solid transparent',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            );
          })}
        </Box>

        {/* Interactive Master-Detail Showcase */}
        <Grid gutter={40} align="stretch">
          {/* Left Column: Interactive Facility List */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '520px', overflowY: 'auto' }}>
              {filteredFacilities.map((facility) => {
                const isCurrent = activeFacility.id === facility.id;
                return (
                  <UnstyledButton
                    key={facility.id}
                    onClick={() => setActiveFacility(facility)}
                    style={{
                      padding: '20px',
                      backgroundColor: isCurrent ? '#FFFFFF' : 'transparent',
                      border: `1px solid ${isCurrent ? '#1F1F1F' : '#ECEAE5'}`,
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.2s ease',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <Text size="xs" style={{ color: '#888888', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        {facility.category}
                      </Text>
                      {facility.location && (
                        <Text size="xs" style={{ color: '#999999' }}>
                          {facility.location}
                        </Text>
                      )}
                    </div>
                    <Title order={4} style={{ fontSize: '1.05rem', fontWeight: 600, color: '#1F1F1F', marginTop: '6px' }}>
                      {facility.title}
                    </Title>
                  </UnstyledButton>
                );
              })}
            </Box>
          </Grid.Col>

          {/* Right Column: Detailed View with Image & Features */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Box
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #ECEAE5',
                padding: '24px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <ImageReveal
                src={activeFacility.image}
                alt={activeFacility.title}
                aspectRatio="16/9"
                style={{ border: '1px solid #ECEAE5', marginBottom: '24px' }}
              />

              <Box>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '0.75rem', color: '#888' }}>
                  <span>{activeFacility.category}</span>
                  {activeFacility.capacity && (
                    <>
                      <span>·</span>
                      <span>Capacity: {activeFacility.capacity}</span>
                    </>
                  )}
                </div>

                <Title order={3} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.4rem', fontWeight: 600, marginBottom: '12px', color: '#1F1F1F' }}>
                  {activeFacility.title}
                </Title>

                <Text size="sm" style={{ color: '#555555', lineHeight: 1.65, marginBottom: '20px', fontFamily: 'DM Sans, sans-serif' }}>
                  {activeFacility.description}
                </Text>

                <Box style={{ paddingTop: '16px', borderTop: '1px solid #ECEAE5' }}>
                  <Text size="xs" style={{ color: '#888888', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, marginBottom: '10px' }}>
                    Key Architecture & Equipment:
                  </Text>
                  <Grid gutter={12}>
                    {activeFacility.features.map((feature, i) => (
                      <Grid.Col key={i} span={{ base: 12, sm: 6 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#444444' }}>
                          <span style={{ width: '4px', height: '4px', backgroundColor: '#1F1F1F', borderRadius: '50%' }} />
                          <span>{feature}</span>
                        </div>
                      </Grid.Col>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default FacilitiesSection;
