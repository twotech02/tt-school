import React from 'react';
import PageTransition from '../../components/common/PageTransition';
import HeroSection from '../../components/home/HeroSection';
import IntroductionSection from '../../components/home/IntroductionSection';
import CampusSection from '../../components/home/CampusSection';
import AcademicJourney from '../../components/home/AcademicJourney';
import SmartClassroomSection from '../../components/home/SmartClassroomSection';
import RoboticsSection from '../../components/home/RoboticsSection';
import InnovationSection from '../../components/home/InnovationSection';
import SportsSection from '../../components/home/SportsSection';
import ArtsSection from '../../components/home/ArtsSection';
import LeadershipSection from '../../components/home/LeadershipSection';
import StudentLifeSection from '../../components/home/StudentLifeSection';
import FacilitiesSection from '../../components/home/FacilitiesSection';
import TestimonialsSection from '../../components/home/TestimonialsSection';
import AdmissionsSection from '../../components/home/AdmissionsSection';
import FAQSection from '../../components/home/FAQSection';
import FinalCTASection from '../../components/home/FinalCTASection';

export const Home: React.FC = () => {
  return (
    <PageTransition>
      <HeroSection />
      <IntroductionSection />
      <CampusSection />
      <AcademicJourney />
      <SmartClassroomSection />
      <RoboticsSection />
      <InnovationSection />
      <SportsSection />
      <ArtsSection />
      <LeadershipSection />
      <StudentLifeSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <AdmissionsSection />
      <FAQSection />
      <FinalCTASection />
    </PageTransition>
  );
};

export default Home;
