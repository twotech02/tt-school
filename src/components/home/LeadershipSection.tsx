import React from 'react';
import { Box, Container, Title, Text, Grid } from '@mantine/core';

export const LeadershipSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#F7F7F5', padding: '120px 0' }}>
      <Container size="xl" style={{ maxWidth: '1360px' }}>
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
            / Leadership & Character
          </Text>

          <Title
            order={2}
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
              lineHeight: 1.15,
              fontWeight: 500,
              color: '#1F1F1F',
              letterSpacing: '-0.025em',
              maxWidth: '780px',
            }}
          >
            Preparing students for life, not just exams.
          </Title>

          <Text
            style={{
              marginTop: '1.25rem',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              color: '#555555',
              maxWidth: '680px',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            We instill the moral compass, rhetorical fluency, and collaborative empathy needed to lead in an interconnected global society.
          </Text>
        </Box>

        <Grid gutter={24}>
          {[
            {
              number: '01',
              title: 'Model United Nations & Diplomacy',
              description: 'Students represent global delegates, negotiating bilateral accords, drafting treaty resolutions, and mastering formal parliamentary debate.',
            },
            {
              number: '02',
              title: 'Student Enterprise Incubator',
              description: 'Mentored by tech executives and venture founders, students build pitch decks, test product prototypes, and manage real campus social businesses.',
            },
            {
              number: '03',
              title: 'Civic Service & Community Action',
              description: 'Every student commits to sustained community partnerships, from regional clean water initiatives to neighborhood elderly digital literacy.',
            },
            {
              number: '04',
              title: 'Public Rhetoric & Expository Debate',
              description: 'Training in structured argument construction, rebuttals, speech cadence, and confident stage delivery across academic symposiums.',
            },
          ].map((item) => (
            <Grid.Col key={item.number} span={{ base: 12, sm: 6, lg: 3 }}>
              <Box
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '32px 24px',
                  border: '1px solid #ECEAE5',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1F1F1F';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#ECEAE5';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <Text
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: '#888888',
                      marginBottom: '16px',
                    }}
                  >
                    {item.number}
                  </Text>
                  <Title
                    order={3}
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      lineHeight: 1.25,
                      color: '#1F1F1F',
                      marginBottom: '10px',
                    }}
                  >
                    {item.title}
                  </Title>
                  <Text size="sm" style={{ color: '#555555', lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif' }}>
                    {item.description}
                  </Text>
                </div>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default LeadershipSection;
