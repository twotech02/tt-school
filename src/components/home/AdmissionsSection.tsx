import React, { useState } from 'react';
import { Box, Container, Title, Text, Grid, TextInput, Select, Textarea, Alert, Group } from '@mantine/core';
import { IconCheck, IconAlertCircle } from '@tabler/icons-react';
import { ADMISSION_STEPS } from '../../data/admissions';
import IMAGES from '../../assets/images';
import ImageReveal from '../common/ImageReveal';
import AnimatedButton from '../common/AnimatedButton';
import admissionService from '../../services/admissionService';

export const AdmissionsSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    grade: 'Grade 6 – Middle School',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!formData.parentName || !formData.studentName || !formData.email || !formData.phone) {
      setErrorMsg('Please complete parent name, student name, email, and phone number.');
      return;
    }

    setLoading(true);
    try {
      const res = await admissionService.submitEnquiry(formData);
      if (res.success) {
        setSuccessMsg(`${res.message} (Reference: ${res.referenceNumber})`);
        setFormData({
          parentName: '',
          studentName: '',
          email: '',
          phone: '',
          grade: 'Grade 6 – Middle School',
          message: '',
        });
      } else {
        setErrorMsg(res.message);
      }
    } catch {
      setErrorMsg('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="admissions-section" style={{ backgroundColor: '#F7F7F5', padding: '120px 0' }}>
      <Container size="xl" style={{ maxWidth: '1360px' }}>
        {/* Header from reference image */}
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
            / Your journey starts here
          </Text>

          <Title
            order={2}
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
              lineHeight: 1.18,
              fontWeight: 400,
              color: '#1F1F1F',
              letterSpacing: '-0.025em',
              maxWidth: '850px',
            }}
          >
            Our admissions team is here to guide your family through each step and{' '}
            <strong style={{ fontWeight: 600 }}>help you learn more about life at Everfield.</strong>
          </Title>
        </Box>

        {/* Two Side-by-Side Campus Architectural Images from reference image */}
        <Grid gutter={24} style={{ marginBottom: '40px' }}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <ImageReveal
              src={IMAGES.campusOverview}
              alt="Everfield Campus Academic Building Entrance"
              aspectRatio="16/10"
              style={{ border: '1px solid #ECEAE5' }}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <ImageReveal
              src={IMAGES.heroCampus}
              alt="Everfield Campus Courtyard and Modern Walkways"
              aspectRatio="16/10"
              style={{ border: '1px solid #ECEAE5' }}
            />
          </Grid.Col>
        </Grid>

        {/* Numbered Steps Bar matching reference image */}
        <Box
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #ECEAE5',
            padding: '24px 20px',
            marginBottom: '60px',
            overflowX: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minWidth: '780px',
              gap: '24px',
            }}
          >
            {ADMISSION_STEPS.map((s) => (
              <div key={s.step} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: '#1F1F1F',
                  }}
                >
                  {s.step}
                </span>
                <span style={{ color: '#BBB' }}>—</span>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.85rem',
                    color: '#444444',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </Box>

        {/* Admissions Enquiry Form & Consultation Box */}
        <Grid gutter={40} align="flex-start">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Box style={{ backgroundColor: '#FFFFFF', border: '1px solid #ECEAE5', padding: '40px' }}>
              <Title order={3} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.4rem', fontWeight: 600, marginBottom: '8px', color: '#1F1F1F' }}>
                Online Admissions Enquiry
              </Title>
              <Text size="sm" style={{ color: '#666666', marginBottom: '28px', fontFamily: 'DM Sans, sans-serif' }}>
                Submit an initial enquiry and our admissions deans will provide a personalized admissions prospectus and tour availability.
              </Text>

              {successMsg && (
                <Alert icon={<IconCheck size={18} />} title="Enquiry Submitted" color="green" radius={0} mb="lg">
                  {successMsg}
                </Alert>
              )}

              {errorMsg && (
                <Alert icon={<IconAlertCircle size={18} />} title="Submission Error" color="red" radius={0} mb="lg">
                  {errorMsg}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Grid gutter={16}>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <TextInput
                      label="Parent / Guardian Full Name"
                      placeholder="e.g. Eleanor Vance"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <TextInput
                      label="Student Full Name"
                      placeholder="e.g. Liam Vance"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <TextInput
                      label="Email Address"
                      placeholder="e.g. eleanor@example.com"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <TextInput
                      label="Phone / WhatsApp"
                      placeholder="+1 (555) 000-0000"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <Select
                      label="Grade of Interest"
                      data={[
                        'Early Years (Kindergarten 1 & 2 / Ages 3-6)',
                        'Elementary School (Grades 1 – 5)',
                        'Grade 6 – Middle School',
                        'Grade 7 – Middle School',
                        'Grade 8 – Middle School',
                        'Grade 9 – Senior School',
                        'Grade 10 – Senior School',
                        'Grades 11 & 12 (IB Diploma / AP)',
                      ]}
                      value={formData.grade}
                      onChange={(val) => setFormData({ ...formData, grade: val || '' })}
                    />
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <Textarea
                      label="Message / Student Interests (Optional)"
                      placeholder="Tell us about your child's passions, academic interests, or questions for our admissions team..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <Group justify="space-between" align="center" style={{ marginTop: '8px' }}>
                      <AnimatedButton type="submit" variant="solid" loading={loading} arrow="right">
                        Submit Admissions Enquiry
                      </AnimatedButton>
                      <Text size="xs" style={{ color: '#888888' }}>
                        Response guaranteed within 24 hours
                      </Text>
                    </Group>
                  </Grid.Col>
                </Grid>
              </form>
            </Box>
          </Grid.Col>

          {/* Right Column: Admissions Quick Info & Tour CTA */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Box style={{ backgroundColor: '#FFFFFF', border: '1px solid #ECEAE5', padding: '36px 30px' }}>
              <Text size="xs" style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, marginBottom: '8px' }}>
                Visit Options
              </Text>
              <Title order={3} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.35rem', fontWeight: 600, marginBottom: '12px', color: '#1F1F1F' }}>
                Private Campus Walkthroughs
              </Title>
              <Text size="sm" style={{ color: '#555555', lineHeight: 1.6, marginBottom: '24px' }}>
                We encourage prospective families to tour during a regular academic school day to experience the energy of our classes, meet division heads, and observe collaborative student inquiry.
              </Text>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F0EFEA', paddingBottom: '8px' }}>
                  <Text size="xs" c="dimmed">Tour Days:</Text>
                  <Text size="xs" fw={600}>Monday – Friday</Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F0EFEA', paddingBottom: '8px' }}>
                  <Text size="xs" c="dimmed">Time Slots:</Text>
                  <Text size="xs" fw={600}>9:30 AM & 1:30 PM</Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F0EFEA', paddingBottom: '8px' }}>
                  <Text size="xs" c="dimmed">Tour Duration:</Text>
                  <Text size="xs" fw={600}>60 minutes</Text>
                </div>
              </div>

              <AnimatedButton to="/contact?action=visit" variant="outline" arrow="upRight" style={{ width: '100%' }}>
                Book Private Campus Visit
              </AnimatedButton>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default AdmissionsSection;
