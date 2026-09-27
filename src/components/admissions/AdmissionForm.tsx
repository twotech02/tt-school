import React, { useState } from 'react';
import { Box, Title, Text, Grid, TextInput, Select, Textarea, Alert, Group } from '@mantine/core';
import { IconCheck, IconAlertCircle } from '@tabler/icons-react';
import AnimatedButton from '../common/AnimatedButton';
import admissionService from '../../services/admissionService';

export const AdmissionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    grade: 'Grade 6 – Middle School',
    entryYear: 'Academic Year 2026-2027',
    preferredCampus: 'Main Willow Lane Campus',
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
      setErrorMsg('Please complete all required fields.');
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
          entryYear: 'Academic Year 2026-2027',
          preferredCampus: 'Main Willow Lane Campus',
          message: '',
        });
      } else {
        setErrorMsg(res.message);
      }
    } catch {
      setErrorMsg('An error occurred while submitting your enquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box style={{ backgroundColor: '#FFFFFF', border: '1px solid #ECEAE5', padding: '40px 32px' }}>
      <Title order={3} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.5rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '8px' }}>
        Formal Application & Admissions Enquiry
      </Title>
      <Text size="sm" style={{ color: '#666', marginBottom: '28px', fontFamily: 'DM Sans, sans-serif' }}>
        Begin your family's journey with Everfield International School. Our team will review your enquiry within one working day.
      </Text>

      {successMsg && (
        <Alert icon={<IconCheck size={18} />} title="Enquiry Received" color="green" radius={0} mb="lg">
          {successMsg}
        </Alert>
      )}

      {errorMsg && (
        <Alert icon={<IconAlertCircle size={18} />} title="Incomplete Information" color="red" radius={0} mb="lg">
          {errorMsg}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Grid gutter={16}>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Parent / Guardian Full Name"
              placeholder="e.g. Marcus & Sarah Sterling"
              required
              value={formData.parentName}
              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Student Full Name"
              placeholder="e.g. Leo Sterling"
              required
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Parent Email Address"
              placeholder="e.g. sterling@example.com"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Contact Telephone / Mobile"
              placeholder="+1 652 988 2182"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Select
              label="Entry Grade Level"
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
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Select
              label="Target Academic Year"
              data={[
                'Academic Year 2026-2027 (Immediate / Autumn)',
                'Mid-Year Spring Intake 2027',
                'Academic Year 2027-2028 (Advance Planning)',
              ]}
              value={formData.entryYear}
              onChange={(val) => setFormData({ ...formData, entryYear: val || '' })}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Textarea
              label="Tell Us About Your Student"
              placeholder="Share academic strengths, languages spoken, arts/sports interests, or previous school curriculum..."
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Group justify="space-between" align="center" style={{ marginTop: '12px' }}>
              <AnimatedButton type="submit" variant="solid" loading={loading} arrow="right">
                Submit Formal Application
              </AnimatedButton>
              <Text size="xs" style={{ color: '#888888' }}>
                Secure SSL Submission · Everfield Registrar
              </Text>
            </Group>
          </Grid.Col>
        </Grid>
      </form>
    </Box>
  );
};

export default AdmissionForm;
