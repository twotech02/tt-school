import React, { useState } from 'react';
import { Box, Container, Group, UnstyledButton, Burger, Menu } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons-react';
import SchoolLogo from '../../assets/logos/SchoolLogo';
import { MAIN_NAV_ITEMS } from '../../data/navigation';
import AnimatedButton from '../common/AnimatedButton';
import MobileMenu from './MobileMenu';
import { useScrollHeader } from '../../hooks/useScrollAnimation';

interface HeaderProps {
  forceDarkText?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ forceDarkText = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isScrolled = useScrollHeader(50);

  // If not on home page or if scrolled, use solid white header with dark text
  const isTransparent = isHomePage && !isScrolled && !forceDarkText;
  const textColor = isTransparent ? '#FFFFFF' : '#1F1F1F';
  const subtextColor = isTransparent ? 'rgba(255, 255, 255, 0.7)' : '#666666';

  return (
    <>
      <header
        className={`site-header ${isTransparent ? 'transparent' : 'scrolled'}`}
        style={{
          height: isScrolled ? '60px' : '65px',
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <Container size="xl" style={{ width: '100%', maxWidth: '1360px' }}>
          <Group justify="space-between" align="center" wrap="nowrap">
            {/* Zone 1: Brand & Tagline */}
            <Group gap="lg" align="center" wrap="nowrap">
              <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <SchoolLogo light={isTransparent} size={32} />
              </Link>

              {/* Editorial motto inspired by reference image */}
              <Box
                visibleFrom="lg"
                style={{
                  borderLeft: `1px solid ${isTransparent ? 'rgba(255,255,255,0.25)' : '#E0E0DC'}`,
                  paddingLeft: '16px',
                  lineHeight: 1.15,
                }}
                className="desktop-tagline"
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: subtextColor,
                    fontFamily: 'DM Sans, sans-serif',
                    letterSpacing: '0.01em',
                  }}
                >
                  every student has <strong style={{ color: textColor, fontWeight: 500 }}>their own dreams</strong>
                </span>
              </Box>
            </Group>

            {/* Zone 2: Navigation Links */}
            <Group gap="xl" visibleFrom="md" wrap="nowrap">
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.href;

                if (item.children) {
                  return (
                    <Menu key={item.label} trigger="hover" openDelay={50} closeDelay={150} shadow="md" width={240}>
                      <Menu.Target>
                        <UnstyledButton
                          component={Link}
                          to={item.href}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '0.875rem',
                            fontWeight: isActive ? 600 : 500,
                            color: textColor,
                            fontFamily: 'DM Sans, sans-serif',
                            transition: 'opacity 0.2s ease',
                            opacity: isActive ? 1 : 0.85,
                          }}
                        >
                          <span>{item.label}</span>
                          <IconChevronDown size={14} stroke={1.5} style={{ opacity: 0.6 }} />
                        </UnstyledButton>
                      </Menu.Target>

                      <Menu.Dropdown style={{ backgroundColor: '#FFFFFF', borderRadius: 0, padding: '8px' }}>
                        {item.children.map((child) => (
                          <Menu.Item
                            key={child.label}
                            component={Link}
                            to={child.href}
                            style={{
                              fontSize: '0.825rem',
                              fontFamily: 'DM Sans, sans-serif',
                              color: '#1F1F1F',
                              borderRadius: 0,
                              padding: '8px 12px',
                            }}
                          >
                            <Box>
                              <div style={{ fontWeight: 600 }}>{child.label}</div>
                              {child.description && (
                                <div style={{ fontSize: '0.72rem', color: '#777777', marginTop: 2 }}>
                                  {child.description}
                                </div>
                              )}
                            </Box>
                          </Menu.Item>
                        ))}
                      </Menu.Dropdown>
                    </Menu>
                  );
                }

                return (
                  <UnstyledButton
                    key={item.label}
                    component={Link}
                    to={item.href}
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 500,
                      color: textColor,
                      fontFamily: 'DM Sans, sans-serif',
                      transition: 'opacity 0.2s ease',
                      opacity: isActive ? 1 : 0.85,
                    }}
                  >
                    {item.label}
                  </UnstyledButton>
                );
              })}
            </Group>

            {/* Zone 3: CTA & Mobile Hamburger */}
            <Group gap="sm" wrap="nowrap">
              <AnimatedButton
                to="/contact?action=visit"
                variant={isTransparent ? 'white' : 'solid'}
                arrow="upRight"
                visibleFrom="sm"
                style={{
                  height: '38px',
                  padding: '0 18px',
                  fontSize: '0.8125rem',
                }}
              >
                Book a Visit
              </AnimatedButton>

              <Burger
                opened={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((o) => !o)}
                hiddenFrom="md"
                size="sm"
                color={textColor}
                aria-label="Toggle navigation menu"
              />
            </Group>
          </Group>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu opened={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
