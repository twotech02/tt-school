import React from 'react';
import { Box, Container, Title, Text, Accordion } from '@mantine/core';
import { FAQ_DATA } from '../../data/admissions';

export const FAQSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '120px 0' }}>
      <Container size="xl" style={{ maxWidth: '1000px' }}>
        <Box style={{ marginBottom: '50px', textAlign: 'center' }}>
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
            / Common Questions
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
            }}
          >
            Frequently Asked Questions
          </Title>
        </Box>

        <Accordion
          variant="separated"
          styles={{
            item: {
              backgroundColor: '#F7F7F5',
              borderColor: '#ECEAE5',
              borderRadius: 0,
              marginBottom: '12px',
            },
            control: {
              padding: '20px 24px',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: '#1F1F1F',
              '&:hover': {
                backgroundColor: '#F0EFEA',
              },
            },
            panel: {
              padding: '0 24px 20px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9375rem',
              lineHeight: 1.65,
              color: '#555555',
            },
          }}
        >
          {FAQ_DATA.map((item, index) => (
            <Accordion.Item key={index} value={`faq-${index}`}>
              <Accordion.Control>{item.question}</Accordion.Control>
              <Accordion.Panel>{item.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQSection;
