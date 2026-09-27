import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import { ACADEMIC_STAGES } from '../../data/academics';
import LearningStage from '../../components/academics/LearningStage';

export const ElementarySchool: React.FC = () => {
  const stage = ACADEMIC_STAGES.find((s) => s.id === 'elementary-school') || ACADEMIC_STAGES[1];

  return (
    <PageLayout
      title="Elementary School: Inquiry, Collaboration & Foundations"
      eyebrow="Grades 1 – 5 · Ages 6–11"
      description="Equipping young scholars with foundational literacy, mathematical reasoning, scientific curiosity, and collaborative empathy."
      breadcrumbs={[
        { label: 'Academics', href: '/academics' },
        { label: 'Elementary School' },
      ]}
      bgImage={stage.image}
      dark
    >
      <LearningStage stage={stage} />
    </PageLayout>
  );
};

export default ElementarySchool;
