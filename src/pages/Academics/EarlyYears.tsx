import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import { ACADEMIC_STAGES } from '../../data/academics';
import LearningStage from '../../components/academics/LearningStage';

export const EarlyYears: React.FC = () => {
  const stage = ACADEMIC_STAGES.find((s) => s.id === 'early-years') || ACADEMIC_STAGES[0];

  return (
    <PageLayout
      title="Early Years: Wonder, Discovery & Social Play"
      eyebrow="Kindergarten 1 & 2 · Ages 3–6"
      description="Creating a warm, joyful foundation where young learners cultivate motor dexterity, linguistic confidence, and boundless creative curiosity."
      breadcrumbs={[
        { label: 'Academics', href: '/academics' },
        { label: 'Early Years' },
      ]}
      bgImage={stage.image}
      dark
    >
      <LearningStage stage={stage} />
    </PageLayout>
  );
};

export default EarlyYears;
