import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import { ACADEMIC_STAGES } from '../../data/academics';
import LearningStage from '../../components/academics/LearningStage';

export const MiddleSchool: React.FC = () => {
  const stage = ACADEMIC_STAGES.find((s) => s.id === 'middle-school') || ACADEMIC_STAGES[2];

  return (
    <PageLayout
      title="Middle School: Independence, Critical Thinking & Voice"
      eyebrow="Grades 6 – 8 · Ages 11–14"
      description="Navigating adolescent transitions with rigorous subject-specific inquiry, robotics laboratories, interdisciplinary humanities, and personal mentorship."
      breadcrumbs={[
        { label: 'Academics', href: '/academics' },
        { label: 'Middle School' },
      ]}
      bgImage={stage.image}
      dark
    >
      <LearningStage stage={stage} />
    </PageLayout>
  );
};

export default MiddleSchool;
