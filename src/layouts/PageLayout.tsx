import React from 'react';
import { Box, Container, Title, Text, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconChevronRight } from '@tabler/icons-react';
import PageTransition from '../components/common/PageTransition';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageLayoutProps {
  title: string;
  eyebrow?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
  dark?: boolean;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  eyebrow,
  description,
  breadcrumbs = [],
  bgImage,
  dark = false,
  children,
}) => {
  return (
    <PageTransition>
      {/* Page Hero Header */}
      <Box
        style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '80px',
          backgroundColor: dark ? '#1A1A1A' : '#F7F7F5',
          borderBottom: '1px solid #ECEAE5',
          overflow: 'hidden',
        }}
      >
        {bgImage && (
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: dark ? 0.35 : 0.12,
              filter: 'grayscale(20%)',
            }}
          />
        )}

        <Container size="xl" style={{ position: 'relative', zIndex: 2, maxWidth: '1360px' }}>
          {/* Breadcrumb nav */}
          {breadcrumbs.length > 0 && (
            <Group gap="xs" style={{ marginBottom: '16px' }}>
              <Link to="/" style={{ fontSize: '0.8rem', color: dark ? 'rgba(255,255,255,0.6)' : '#777777', textDecoration: 'none' }}>
                Home
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.label}>
                  <IconChevronRight size={12} color={dark ? 'rgba(255,255,255,0.4)' : '#999'} />
                  {crumb.href && idx < breadcrumbs.length - 1 ? (
                    <Link
                      to={crumb.href}
                      style={{ fontSize: '0.8rem', color: dark ? 'rgba(255,255,255,0.6)' : '#777777', textDecoration: 'none' }}
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <Text size="xs" style={{ color: dark ? '#FFFFFF' : '#1F1F1F', fontWeight: 500 }}>
                      {crumb.label}
                    </Text>
                  )}
                </React.Fragment>
              ))}
            </Group>
          )}

          {eyebrow && (
            <Text
              style={{
                fontSize: '0.8125rem',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                color: dark ? 'rgba(255,255,255,0.7)' : '#777777',
                marginBottom: '12px',
                letterSpacing: '0.04em',
              }}
            >
              / {eyebrow}
            </Text>
          )}

          <Title
            order={1}
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
              fontWeight: 500,
              color: dark ? '#FFFFFF' : '#1F1F1F',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              maxWidth: '900px',
            }}
          >
            {title}
          </Title>

          {description && (
            <Text
              style={{
                marginTop: '20px',
                fontSize: '1.15rem',
                lineHeight: 1.6,
                color: dark ? 'rgba(255,255,255,0.8)' : '#555555',
                maxWidth: '740px',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              {description}
            </Text>
          )}
        </Container>
      </Box>

      {/* Main Page Content */}
      <Box style={{ backgroundColor: '#FFFFFF' }}>{children}</Box>
    </PageTransition>
  );
};

export default PageLayout;
