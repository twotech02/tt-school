import React from 'react';
import { Box, Container, Title, Text, Grid } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';
import PageLayout from '../../layouts/PageLayout';
import IMAGES from '../../assets/images';
import ContactForm from '../../components/contact/ContactForm';
import CampusVisitForm from '../../components/admissions/CampusVisitForm';
import { SCHOOL_CONTACT } from '../../data/navigation';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const isVisitAction = searchParams.get('action') === 'visit';

  return (
    <PageLayout
      title="We welcome your conversation."
      eyebrow="Contact & Visit"
      description="Connect with our central admissions, campus tours director, or academic divisions. We look forward to meeting your family."
      breadcrumbs={[{ label: 'Contact' }]}
      bgImage={IMAGES.heroCampus}
      dark
    >
      <Box style={{ padding: '80px 0 120px', backgroundColor: '#F7F7F5' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Grid gutter={40} align="flex-start">
            {/* Left Column: Form (defaults to ContactForm or CampusVisitForm if ?action=visit) */}
            <Grid.Col span={{ base: 12, md: 7 }}>
              {isVisitAction ? <CampusVisitForm /> : <ContactForm />}
            </Grid.Col>

            {/* Right Column: Address, Telephone, Hours & Map Graphic */}
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Box style={{ backgroundColor: '#FFFFFF', border: '1px solid #ECEAE5', padding: '36px 30px', marginBottom: '24px' }}>
                <Text size="xs" style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, marginBottom: '8px' }}>
                  Everfield Campus Location
                </Text>
                <Title order={3} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.4rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '16px' }}>
                  Main Academic Campus
                </Title>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <Text size="xs" c="dimmed">Campus Address:</Text>
                    <Text size="sm" fw={600} style={{ color: '#1F1F1F' }}>
                      {SCHOOL_CONTACT.address}
                    </Text>
                  </div>

                  <div>
                    <Text size="xs" c="dimmed">Admissions Office Phone:</Text>
                    <Text size="sm" fw={600} style={{ color: '#1F1F1F' }}>
                      {SCHOOL_CONTACT.phone}
                    </Text>
                  </div>

                  <div>
                    <Text size="xs" c="dimmed">Admissions & General Enquiries:</Text>
                    <Text size="sm" fw={600} style={{ color: '#1F1F1F' }}>
                      {SCHOOL_CONTACT.email}
                    </Text>
                  </div>

                  <div>
                    <Text size="xs" c="dimmed">Operating Hours:</Text>
                    <Text size="sm" style={{ color: '#444' }}>
                      {SCHOOL_CONTACT.hours}
                    </Text>
                  </div>
                </div>
              </Box>

              {/* Architectural Map & Directions Card */}
              <Box style={{ backgroundColor: '#1F1F1F', color: '#FFFFFF', padding: '36px 30px', border: '1px solid #ECEAE5' }}>
                <Text size="xs" style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  Transportation & Access
                </Text>
                <Title order={4} style={{ fontSize: '1.15rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '12px' }}>
                  Visitor Arrival & Parking
                </Title>
                <Text size="xs" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '16px' }}>
                  Prospective families entering via Willow Lane Gate 1 receive security passes and complimentary visitor parking in North Lot B. Our admissions welcome lounge is located directly off the central bioclimatic courtyard.
                </Text>
                <Text size="xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Nearest MRT / Transit: Orchard Boulevard Station (Exit 2), 6-minute dedicated pedestrian walkway.
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default Contact;
