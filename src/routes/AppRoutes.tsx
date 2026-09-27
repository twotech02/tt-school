import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Academics from '../pages/Academics/Academics';
import EarlyYears from '../pages/Academics/EarlyYears';
import ElementarySchool from '../pages/Academics/ElementarySchool';
import MiddleSchool from '../pages/Academics/MiddleSchool';
import SeniorSchool from '../pages/Academics/SeniorSchool';
import Innovation from '../pages/Innovation/Innovation';
import Robotics from '../pages/Robotics/Robotics';
import Facilities from '../pages/Facilities/Facilities';
import StudentLife from '../pages/StudentLife/StudentLife';
import Sports from '../pages/Sports/Sports';
import Arts from '../pages/Arts/Arts';
import Admissions from '../pages/Admissions/Admissions';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="academics" element={<Academics />} />
        <Route path="academics/early-years" element={<EarlyYears />} />
        <Route path="academics/elementary" element={<ElementarySchool />} />
        <Route path="academics/middle-school" element={<MiddleSchool />} />
        <Route path="academics/senior-school" element={<SeniorSchool />} />
        <Route path="innovation" element={<Innovation />} />
        <Route path="robotics" element={<Robotics />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="student-life" element={<StudentLife />} />
        <Route path="sports" element={<Sports />} />
        <Route path="arts" element={<Arts />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
