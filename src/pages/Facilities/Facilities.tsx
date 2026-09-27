import React from 'react';
import { Box, Container, Title, Text } from '@mantine/core';
import PageLayout from '../../layouts/PageLayout';
import IMAGES from '../../assets/images';
import { FACILITIES_DATA } from '../../data/facilities';
import FacilityGallery from '../../components/facilities/FacilityGallery';

export const Facilities: React.FC = () => {
  return (
    <PageLayout
      title="An architectural masterplan for purposeful discovery."
      eyebrow="Campus & Architecture"
      description="Our 18-acre green campus integrates bioclimatic architecture, daylight-harvested learning studios, Olympic sports pavilions, and acoustic performance spaces."
      breadcrumbs={[{ label: 'Facilities' }]}
      bgImage={IMAGES.campusOverview}
      dark
    >
      <Box style={{ padding: '80px 0 120px', backgroundColor: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Box style={{ marginBottom: '40px' }}>
            <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Interactive Directory
            </Text>
            <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F' }}>
              Explore Campus Facilities
            </Title>
          </Box>

          <FacilityGallery facilities={FACILITIES_DATA} />
        </Container>
      </Box>
    </PageLayout>
  );
};

export default Facilities;
