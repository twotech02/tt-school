import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import { ACADEMIC_STAGES } from '../../data/academics';
import LearningStage from '../../components/academics/LearningStage';

export const SeniorSchool: React.FC = () => {
  const stage = ACADEMIC_STAGES.find((s) => s.id === 'senior-school') || ACADEMIC_STAGES[3];

  return (
    <PageLayout
      title="Senior School: Advanced Credentials & University Leadership"
      eyebrow="Grades 9 – 12 · Ages 14–18"
      description="Offering rigorous IB Diploma and Advanced Placement credentials, independent capstone dissertations, and world-class university guidance."
      breadcrumbs={[
        { label: 'Academics', href: '/academics' },
        { label: 'Senior School' },
      ]}
      bgImage={stage.image}
      dark
    >
      <LearningStage stage={stage} />
    </PageLayout>
  );
};

export default SeniorSchool;
