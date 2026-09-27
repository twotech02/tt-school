import React from 'react';
import { Box, Container, Title, Text, Grid, Group } from '@mantine/core';
import IMAGES from '../../assets/images';
import ImageReveal from '../common/ImageReveal';
import AnimatedButton from '../common/AnimatedButton';

export const StudentLifeSection: React.FC = () => {
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
            / Student life
          </Text>

          <Group justify="space-between" align="flex-end" wrap="wrap">
            <Box style={{ maxWidth: '640px' }}>
              <Title
                order={2}
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
                  lineHeight: 1.15,
                  fontWeight: 500,
                  color: '#1F1F1F',
                  letterSpacing: '-0.025em',
                  marginBottom: '12px',
                }}
              >
                A vibrant, inclusive community.
              </Title>
              <Text
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: '#666666',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                From lively house competitions and international festivals to outdoor expeditions, student life at Everfield creates lifelong bonds and memories.
              </Text>
            </Box>

            <AnimatedButton to="/student-life" variant="outline" arrow="right">
              Explore Life at Everfield
            </AnimatedButton>
          </Group>
        </Box>

        {/* Editorial Masonry Grid */}
        <Grid gutter={20}>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <ImageReveal
              src={IMAGES.happyStudents}
              alt="Everfield students collaborating in the sunlit central quad"
              aspectRatio="16/9"
              caption="Community spirit in the bioclimatic central courtyard"
              style={{ border: '1px solid #ECEAE5' }}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <ImageReveal
              src={IMAGES.library}
              alt="Discovery library quiet study atrium"
              aspectRatio="4/3"
              caption="Discovery Library atrium with 45,000+ volumes"
              style={{ border: '1px solid #ECEAE5', height: '100%' }}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <ImageReveal
              src={IMAGES.auditorium}
              alt="Performing arts rehearsal hall"
              aspectRatio="4/3"
              caption="Concert hall symphonic rehearsals"
              style={{ border: '1px solid #ECEAE5' }}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <ImageReveal
              src={IMAGES.smartClassroom}
              alt="Interactive collaborative seminar"
              aspectRatio="4/3"
              caption="Collaborative smart seminar sessions"
              style={{ border: '1px solid #ECEAE5' }}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <ImageReveal
              src={IMAGES.roboticsWorkshop}
              alt="Robotics workshop bench"
              aspectRatio="4/3"
              caption="Robotics Guild tournament preparation"
              style={{ border: '1px solid #ECEAE5' }}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default StudentLifeSection;
