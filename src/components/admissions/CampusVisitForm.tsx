import React, { useState } from 'react';
import { Box, Title, Text, Grid, TextInput, Select, Alert, Group } from '@mantine/core';
import { IconCheck, IconAlertCircle } from '@tabler/icons-react';
import AnimatedButton from '../common/AnimatedButton';
import campusVisitService from '../../services/campusVisitService';

export const CampusVisitForm: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    preferredDate: '2026-10-15',
    preferredTimeSlot: 'Morning Tour (9:30 AM – 10:45 AM)',
    gradeOfInterest: 'Elementary School (Grades 1 – 5)',
    attendeeCount: 2,
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!formData.parentName || !formData.email || !formData.phone || !formData.preferredDate) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setLoading(true);
    try {
      const res = await campusVisitService.bookVisit(formData);
      if (res.success) {
        setSuccessMsg(`${res.message} (Booking Code: ${res.confirmationCode})`);
      } else {
        setErrorMsg(res.message);
      }
    } catch {
      setErrorMsg('Failed to book campus visit. Please try again or call our Admissions office.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box style={{ backgroundColor: '#F7F7F5', border: '1px solid #ECEAE5', padding: '40px 32px' }}>
      <Title order={3} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.4rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '8px' }}>
        Book an In-Person Campus Tour
      </Title>
      <Text size="sm" style={{ color: '#666', marginBottom: '24px', fontFamily: 'DM Sans, sans-serif' }}>
        Tours are hosted by senior academic directors and include classrooms, science laboratories, robotics arenas, and arts studios.
      </Text>

      {successMsg && (
        <Alert icon={<IconCheck size={18} />} title="Tour Confirmed" color="green" radius={0} mb="lg">
          {successMsg}
        </Alert>
      )}

      {errorMsg && (
        <Alert icon={<IconAlertCircle size={18} />} title="Booking Notice" color="red" radius={0} mb="lg">
          {errorMsg}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Grid gutter={16}>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Parent / Guardian Name"
              placeholder="e.g. Dr. Arthur Pendelton"
              required
              value={formData.parentName}
              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Email Address"
              type="email"
              placeholder="e.g. arthur@example.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Phone Number"
              placeholder="+1 (555) 000-0000"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Preferred Visit Date"
              type="date"
              required
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Select
              label="Tour Session Time"
              data={[
                'Morning Tour (9:30 AM – 10:45 AM)',
                'Afternoon Tour (1:30 PM – 2:45 PM)',
                'Saturday Open House (10:00 AM – 12:00 PM)',
              ]}
              value={formData.preferredTimeSlot}
              onChange={(val) => setFormData({ ...formData, preferredTimeSlot: val || '' })}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Select
              label="Primary Grade of Interest"
              data={[
                'Early Years (Ages 3 – 6)',
                'Elementary School (Grades 1 – 5)',
                'Middle School (Grades 6 – 8)',
                'Senior School (Grades 9 – 12)',
              ]}
              value={formData.gradeOfInterest}
              onChange={(val) => setFormData({ ...formData, gradeOfInterest: val || '' })}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Group justify="space-between" align="center" style={{ marginTop: '8px' }}>
              <AnimatedButton type="submit" variant="solid" loading={loading} arrow="right">
                Confirm Tour Booking
              </AnimatedButton>
              <Text size="xs" style={{ color: '#888' }}>
                Complimentary guest parking included on campus
              </Text>
            </Group>
          </Grid.Col>
        </Grid>
      </form>
    </Box>
  );
};

export default CampusVisitForm;
