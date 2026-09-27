import React, { useState } from 'react';
import { Box, Title, Text, Grid, TextInput, Select, Textarea, Alert, Group } from '@mantine/core';
import { IconCheck, IconAlertCircle } from '@tabler/icons-react';
import AnimatedButton from '../common/AnimatedButton';
import contactService from '../../services/contactService';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Academic Enquiry',
    enquiryType: 'Admissions & Enrollment',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please provide your name, email, and message.');
      return;
    }

    setLoading(true);
    try {
      const res = await contactService.submitContact(formData);
      if (res.success) {
        setSuccessMsg(`${res.message} (Reference #${res.ticketId})`);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'General Academic Enquiry',
          enquiryType: 'Admissions & Enrollment',
          message: '',
        });
      } else {
        setErrorMsg(res.message);
      }
    } catch {
      setErrorMsg('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box style={{ backgroundColor: '#FFFFFF', border: '1px solid #ECEAE5', padding: '40px 32px' }}>
      <Title order={3} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.45rem', fontWeight: 600, color: '#1F1F1F', marginBottom: '8px' }}>
        Send Us a Message
      </Title>
      <Text size="sm" style={{ color: '#666', marginBottom: '24px', fontFamily: 'DM Sans, sans-serif' }}>
        Our central administration office will route your enquiry to the appropriate academic or administrative division.
      </Text>

      {successMsg && (
        <Alert icon={<IconCheck size={18} />} title="Message Transmitted" color="green" radius={0} mb="lg">
          {successMsg}
        </Alert>
      )}

      {errorMsg && (
        <Alert icon={<IconAlertCircle size={18} />} title="Transmission Error" color="red" radius={0} mb="lg">
          {errorMsg}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Grid gutter={16}>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Full Name"
              placeholder="e.g. Katherine Howard"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Email Address"
              type="email"
              placeholder="e.g. katherine@example.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Phone Number"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Select
              label="Enquiry Category"
              data={[
                'Admissions & Enrollment',
                'Campus Visit Request',
                'Curriculum & Academics',
                'Athletics & Performing Arts',
                'Careers & Faculty Recruitment',
                'Alumni Relations',
                'General Administration',
              ]}
              value={formData.enquiryType}
              onChange={(val) => setFormData({ ...formData, enquiryType: val || '' })}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput
              label="Subject"
              placeholder="Summary of inquiry"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Textarea
              label="Message"
              placeholder="Please describe how we can assist you..."
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Group justify="space-between" align="center" style={{ marginTop: '8px' }}>
              <AnimatedButton type="submit" variant="solid" loading={loading} arrow="right">
                Send Message
              </AnimatedButton>
              <Text size="xs" style={{ color: '#888' }}>
                Monitored Monday – Friday, 8am – 4pm
              </Text>
            </Group>
          </Grid.Col>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm;
