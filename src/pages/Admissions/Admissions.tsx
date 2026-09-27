import React from 'react';
import { Box, Container, Title, Text, Grid, Table, Accordion } from '@mantine/core';
import PageLayout from '../../layouts/PageLayout';
import IMAGES from '../../assets/images';
import AdmissionSteps from '../../components/admissions/AdmissionSteps';
import AdmissionForm from '../../components/admissions/AdmissionForm';
import CampusVisitForm from '../../components/admissions/CampusVisitForm';
import { ADMISSIONS_DATES, REQUIRED_DOCUMENTS, TUITION_SCHEDULE, FAQ_DATA } from '../../data/admissions';

export const Admissions: React.FC = () => {
  return (
    <PageLayout
      title="Your child's extraordinary journey begins here."
      eyebrow="Admissions & Enrollment"
      description="We welcome curious, passionate students from around the world into our vibrant community. Explore our admissions process, tuition structure, and tour schedules."
      breadcrumbs={[{ label: 'Admissions' }]}
      bgImage={IMAGES.admissionsTour}
      dark
    >
      {/* 5-Step Process */}
      <Box style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <AdmissionSteps />
        </Container>
      </Box>

      {/* Forms Section: Admission Form & Campus Visit Form */}
      <Box style={{ padding: '100px 0', backgroundColor: '#F7F7F5' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Grid gutter={40} align="flex-start">
            <Grid.Col span={{ base: 12, lg: 7 }}>
              <AdmissionForm />
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 5 }}>
              <CampusVisitForm />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Important Dates & Required Documents */}
      <Box style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1360px' }}>
          <Grid gutter={48}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Calendar & Deadlines
              </Text>
              <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.85rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '24px' }}>
                Key Admissions Milestones
              </Title>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {ADMISSIONS_DATES.map((item) => (
                  <Box key={item.event} style={{ padding: '20px', border: '1px solid #ECEAE5', backgroundColor: '#F7F7F5' }}>
                    <Text size="xs" style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                      {item.date}
                    </Text>
                    <Text size="sm" style={{ fontWeight: 600, color: '#1F1F1F', marginTop: '4px' }}>
                      {item.event}
                    </Text>
                  </Box>
                ))}
              </div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Application Checklist
              </Text>
              <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.85rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '24px' }}>
                Required Application Documents
              </Title>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {REQUIRED_DOCUMENTS.map((doc, idx) => (
                  <Box key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 20px', border: '1px solid #ECEAE5' }}>
                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', fontWeight: 700, color: '#888' }}>
                      0{idx + 1}
                    </span>
                    <Text size="sm" style={{ color: '#333', fontWeight: 500 }}>
                      {doc}
                    </Text>
                  </Box>
                ))}
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Tuition & Fee Schedule */}
      <Box id="tuition" style={{ padding: '100px 0', backgroundColor: '#F7F7F5' }}>
        <Container size="xl" style={{ maxWidth: '1000px' }}>
          <Box style={{ marginBottom: '40px', textAlign: 'center' }}>
            <Text size="xs" style={{ color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Financial Investment
            </Text>
            <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F' }}>
              Tuition & Fee Structure (2026–2027)
            </Title>
            <Text size="sm" style={{ color: '#666', marginTop: '12px' }}>
              Tuition is inclusive of textbooks, technology software licenses, laboratory consumables, and co-curricular arts supplies.
            </Text>
          </Box>

          <Box style={{ backgroundColor: '#FFFFFF', border: '1px solid #ECEAE5', overflowX: 'auto' }}>
            <Table horizontalSpacing="xl" verticalSpacing="md" styles={{ th: { fontFamily: 'Manrope, sans-serif', fontWeight: 600 } }}>
              <Table.Thead>
                <Table.Tr style={{ borderBottom: '1px solid #ECEAE5', backgroundColor: '#FBFBFA' }}>
                  <Table.Th>Division / Grade Level</Table.Th>
                  <Table.Th>Term Fee (3 Terms)</Table.Th>
                  <Table.Th>Annual Tuition</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {TUITION_SCHEDULE.map((row) => (
                  <Table.Tr key={row.grade} style={{ borderBottom: '1px solid #ECEAE5' }}>
                    <Table.Td style={{ fontWeight: 600, color: '#1F1F1F' }}>{row.grade}</Table.Td>
                    <Table.Td className="tabular-nums" style={{ color: '#555' }}>{row.termFee}</Table.Td>
                    <Table.Td className="tabular-nums" style={{ fontWeight: 700, color: '#1F1F1F' }}>{row.annualTuition}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Box>
        </Container>
      </Box>

      {/* Admissions FAQ */}
      <Box id="faq" style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <Container size="xl" style={{ maxWidth: '1000px' }}>
          <Box style={{ marginBottom: '50px', textAlign: 'center' }}>
            <Title order={2} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.25rem', fontWeight: 600, color: '#1F1F1F' }}>
              Admissions Questions Answered
            </Title>
          </Box>

          <Accordion
            variant="separated"
            styles={{
              item: { backgroundColor: '#F7F7F5', borderColor: '#ECEAE5', borderRadius: 0, marginBottom: '12px' },
              control: { padding: '20px 24px', fontFamily: 'Manrope, sans-serif', fontWeight: 600 },
              panel: { padding: '0 24px 20px', fontFamily: 'DM Sans, sans-serif', color: '#555', lineHeight: 1.65 },
            }}
          >
            {FAQ_DATA.map((item, idx) => (
              <Accordion.Item key={idx} value={`adm-faq-${idx}`}>
                <Accordion.Control>{item.question}</Accordion.Control>
                <Accordion.Panel>{item.answer}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default Admissions;
