import React, { useState } from 'react';
import { Box, Container, Grid, Text, Title, Group, Stack, TextInput, UnstyledButton } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconBrandInstagram, IconBrandFacebook, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react';
import SchoolLogo from '../../assets/logos/SchoolLogo';
import { SCHOOL_CONTACT } from '../../data/navigation';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer style={{ backgroundColor: '#1F1F1F', color: '#FFFFFF', paddingTop: '80px', paddingBottom: '40px' }}>
      <Container size="xl" style={{ maxWidth: '1360px' }}>
        {/* Top Section inspired by reference image */}
        <Grid gutter={40} style={{ paddingBottom: '50px', borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <SchoolLogo light size={36} />
            <Text
              style={{
                marginTop: '20px',
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.65)',
                maxWidth: '360px',
                lineHeight: 1.6,
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Learn. Explore. Create. Lead. Preparing modern students for university, innovation, and global citizenship.
            </Text>

            <Group gap="md" style={{ marginTop: '24px' }}>
              <UnstyledButton
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Everfield on Instagram"
                style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
              >
                <IconBrandInstagram size={20} stroke={1.5} />
              </UnstyledButton>
              <UnstyledButton
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Everfield on Facebook"
                style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
              >
                <IconBrandFacebook size={20} stroke={1.5} />
              </UnstyledButton>
              <UnstyledButton
                component="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Everfield on LinkedIn"
                style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
              >
                <IconBrandLinkedin size={20} stroke={1.5} />
              </UnstyledButton>
              <UnstyledButton
                component="a"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Everfield on YouTube"
                style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
              >
                <IconBrandYoutube size={20} stroke={1.5} />
              </UnstyledButton>
            </Group>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <Title
              order={3}
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(1.75rem, 2.5vw, 2.35rem)',
                fontWeight: 500,
                color: '#FFFFFF',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
              }}
            >
              Give your child a place to learn, grow, and belong.
            </Title>
            <Text
              style={{
                marginTop: '16px',
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '540px',
                lineHeight: 1.6,
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              At Everfield Academy, every student is welcomed, supported, and encouraged to explore their potential. We invite your family to discover what makes our community special.
            </Text>

            {/* Newsletter Subscription */}
            <Box style={{ marginTop: '28px', maxWidth: '440px' }}>
              <form onSubmit={handleNewsletterSubmit}>
                <Group gap="xs" wrap="nowrap">
                  <TextInput
                    placeholder="Enter your email for admissions news"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.currentTarget.value)}
                    type="email"
                    style={{ flex: 1 }}
                    styles={{
                      input: {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        borderRadius: 0,
                        height: '42px',
                        fontSize: '0.85rem',
                      },
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      height: '42px',
                      padding: '0 18px',
                      backgroundColor: '#FFFFFF',
                      color: '#1F1F1F',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 500,
                      fontSize: '0.85rem',
                    }}
                  >
                    Subscribe
                    <IconArrowRight size={14} />
                  </button>
                </Group>
              </form>
              {subscribed && (
                <Text size="xs" style={{ color: '#7CAE87', marginTop: '6px' }}>
                  Thank you for subscribing to Everfield Insights.
                </Text>
              )}
            </Box>
          </Grid.Col>
        </Grid>

        {/* Middle Navigation & Contact Grid */}
        <Grid gutter={40} style={{ paddingTop: '50px', paddingBottom: '50px', borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Contact
            </Text>
            <Stack gap="8px">
              <Text size="sm" style={{ color: '#FFFFFF', fontWeight: 500 }}>
                {SCHOOL_CONTACT.email}
              </Text>
              <Text size="sm" style={{ color: '#FFFFFF', fontWeight: 500 }}>
                {SCHOOL_CONTACT.phone}
              </Text>
              <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.6)', marginTop: '8px' }}>
                Admissions: {SCHOOL_CONTACT.admissionsEmail}
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Visit Us
            </Text>
            <Stack gap="4px">
              <Text size="sm" style={{ color: '#FFFFFF', fontWeight: 500 }}>
                {SCHOOL_CONTACT.name}
              </Text>
              <Text size="sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                {SCHOOL_CONTACT.address}
              </Text>
              <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.5)', marginTop: '6px' }}>
                {SCHOOL_CONTACT.hours}
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 6, sm: 6, md: 3 }}>
            <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Explore
            </Text>
            <Stack gap="8px">
              <UnstyledButton component={Link} to="/about" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.875rem' }}>
                About
              </UnstyledButton>
              <UnstyledButton component={Link} to="/academics" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.875rem' }}>
                Academic programs
              </UnstyledButton>
              <UnstyledButton component={Link} to="/student-life" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.875rem' }}>
                Student life
              </UnstyledButton>
              <UnstyledButton component={Link} to="/facilities" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.875rem' }}>
                Campus & Facilities
              </UnstyledButton>
              <UnstyledButton component={Link} to="/innovation" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.875rem' }}>
                Innovation & AI
              </UnstyledButton>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 6, sm: 6, md: 3 }}>
            <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Admissions
            </Text>
            <Stack gap="8px">
              <UnstyledButton component={Link} to="/admissions" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.875rem' }}>
                How to apply
              </UnstyledButton>
              <UnstyledButton component={Link} to="/admissions#tuition" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.875rem' }}>
                Tuition & Fees
              </UnstyledButton>
              <UnstyledButton component={Link} to="/contact?action=visit" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.875rem' }}>
                Schedule a visit
              </UnstyledButton>
              <UnstyledButton component={Link} to="/facilities" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.875rem' }}>
                Virtual campus tour
              </UnstyledButton>
              <UnstyledButton component={Link} to="/admissions#faq" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.875rem' }}>
                Admissions FAQs
              </UnstyledButton>
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Bottom copyright row */}
        <Group justify="space-between" align="center" style={{ paddingTop: '32px' }} wrap="wrap">
          <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'DM Sans, sans-serif' }}>
            © 2026 Everfield International School. All rights reserved.
          </Text>
          <Group gap="lg">
            <UnstyledButton component={Link} to="/about" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem' }}>
              Privacy Policy
            </UnstyledButton>
            <UnstyledButton component={Link} to="/about" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem' }}>
              Terms of Enrollment
            </UnstyledButton>
            <UnstyledButton component={Link} to="/about" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem' }}>
              Cookie Policy
            </UnstyledButton>
          </Group>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;
