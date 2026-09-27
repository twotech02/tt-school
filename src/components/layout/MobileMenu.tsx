import React from 'react';
import { Drawer, Stack, Box, Text, UnstyledButton, Group, Divider } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconChevronRight, IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';
import SchoolLogo from '../../assets/logos/SchoolLogo';
import { MAIN_NAV_ITEMS, SCHOOL_CONTACT } from '../../data/navigation';
import AnimatedButton from '../common/AnimatedButton';

interface MobileMenuProps {
  opened: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ opened, onClose }) => {
  const location = useLocation();

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      position="right"
      size="85%"
      padding="xl"
      withCloseButton
      styles={{
        content: {
          backgroundColor: '#FFFFFF',
        },
        header: {
          paddingBottom: '16px',
          borderBottom: '1px solid #ECEAE5',
        },
      }}
      title={<SchoolLogo size={28} />}
    >
      <Stack gap="lg" style={{ paddingTop: '16px' }}>
        <Stack gap="xs">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Box key={item.label}>
                <UnstyledButton
                  component={Link}
                  to={item.href}
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '12px 0',
                    borderBottom: '1px solid #F2F2EE',
                    color: isActive ? '#1F1F1F' : '#444444',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '1.05rem',
                    fontFamily: 'Manrope, sans-serif',
                  }}
                >
                  <span>{item.label}</span>
                  <IconChevronRight size={18} stroke={1.5} color="#999" />
                </UnstyledButton>

                {item.children && (
                  <Stack gap="4px" style={{ paddingLeft: '14px', paddingTop: '6px', paddingBottom: '6px' }}>
                    {item.children.slice(0, 4).map((child) => (
                      <UnstyledButton
                        key={child.label}
                        component={Link}
                        to={child.href}
                        onClick={onClose}
                        style={{
                          fontSize: '0.85rem',
                          color: '#666666',
                          padding: '6px 0',
                          fontFamily: 'DM Sans, sans-serif',
                        }}
                      >
                        {child.label}
                      </UnstyledButton>
                    ))}
                  </Stack>
                )}
              </Box>
            );
          })}
        </Stack>

        <Divider my="sm" color="#ECEAE5" />

        <Stack gap="xs">
          <AnimatedButton
            to="/admissions"
            variant="solid"
            onClick={onClose}
            style={{ width: '100%' }}
          >
            Apply Now
          </AnimatedButton>
          <AnimatedButton
            to="/contact?action=visit"
            variant="outline"
            onClick={onClose}
            style={{ width: '100%' }}
          >
            Book a Campus Visit
          </AnimatedButton>
        </Stack>

        <Box style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #ECEAE5' }}>
          <Text size="xs" c="dimmed" style={{ letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Everfield Admissions
          </Text>
          <Stack gap="8px">
            <Group gap="xs">
              <IconPhone size={14} color="#666" />
              <Text size="xs" c="#444">{SCHOOL_CONTACT.phone}</Text>
            </Group>
            <Group gap="xs">
              <IconMail size={14} color="#666" />
              <Text size="xs" c="#444">{SCHOOL_CONTACT.email}</Text>
            </Group>
            <Group gap="xs" align="flex-start">
              <IconMapPin size={14} color="#666" style={{ marginTop: 2 }} />
              <Text size="xs" c="#444">{SCHOOL_CONTACT.address}</Text>
            </Group>
          </Stack>
        </Box>
      </Stack>
    </Drawer>
  );
};

export default MobileMenu;
