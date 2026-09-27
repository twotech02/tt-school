export interface AdmissionStep {
  step: string;
  title: string;
  description: string;
  timeline: string;
}

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: '01',
    title: 'Submit Application',
    description: 'Complete our online application form with academic transcripts, recommendations, and recent school reports.',
    timeline: 'Completed online in 15–20 minutes',
  },
  {
    step: '02',
    title: 'Visit Our Campus',
    description: 'Join a private architecture and academic tour to experience classrooms, meet faculty, and discover school culture.',
    timeline: 'Scheduled at your convenience',
  },
  {
    step: '03',
    title: 'Student Assessment',
    description: 'Age-appropriate diagnostic evaluation assessing literacy, mathematical reasoning, and creative problem-solving.',
    timeline: '60–90 minutes on campus or virtual',
  },
  {
    step: '04',
    title: 'Family Conversation',
    description: 'A relaxed discussion between your family and our academic leadership to align on educational goals and student passions.',
    timeline: '30–45 minutes with Division Head',
  },
  {
    step: '05',
    title: 'Welcome to Everfield',
    description: 'Formal offer of enrollment, class placement confirmation, and personalized student onboarding package.',
    timeline: 'Notification within 5 business days',
  },
];

export const ADMISSIONS_DATES = [
  { event: 'Priority Application Deadline (Academic Year 2026-2027)', date: 'November 15, 2026' },
  { event: 'Scholarship & Merit Fellowship Assessment Round', date: 'December 10, 2026' },
  { event: 'Spring Semester Mid-Year Intake Deadline', date: 'January 20, 2027' },
  { event: 'General Rolling Admissions', date: 'Subject to Grade Availability' },
];

export const REQUIRED_DOCUMENTS = [
  'Completed Online Application Form',
  'Copy of Student Passport or National Identification',
  'Official academic transcripts from the preceding 2 academic years',
  'Confidential Teacher Recommendation letter from current school',
  'Student immunization and health record',
  'Optional: Portfolio of creative work, coding projects, or athletic achievements',
];

export const TUITION_SCHEDULE = [
  { grade: 'Early Years (Kindergarten 1 & 2)', annualTuition: '$18,400', termFee: '$6,133' },
  { grade: 'Elementary School (Grades 1 – 5)', annualTuition: '$24,600', termFee: '$8,200' },
  { grade: 'Middle School (Grades 6 – 8)', annualTuition: '$28,900', termFee: '$9,633' },
  { grade: 'Senior School (Grades 9 – 12 / IB / AP)', annualTuition: '$33,800', termFee: '$11,266' },
];

export const FAQ_DATA = [
  {
    question: 'What grades and age ranges do you offer at Everfield?',
    answer: 'Everfield International School provides a continuous K–12 educational pathway for students aged 3 to 18. This encompasses Early Years (Ages 3–6), Elementary School (Grades 1–5), Middle School (Grades 6–8), and Senior School (Grades 9–12), culminating in internationally recognized IB Diploma and Advanced Placement (AP) qualifications.',
  },
  {
    question: 'What is the admission process for new students?',
    answer: 'The admission process is transparent and family-centric: 1) Submit an online application with academic records; 2) Schedule a private campus walkthrough; 3) Complete an age-appropriate holistic student assessment; 4) Attend a family conversation with school leadership; and 5) Receive the enrollment offer within five business days.',
  },
  {
    question: 'Do students learn robotics, coding, and artificial intelligence?',
    answer: 'Yes. Technology and engineering are integrated directly into our core curriculum from Grade 1 onwards. Elementary students learn block coding and sensory mechanics; Middle School students progress to Python, Arduino microcontrollers, and VEX robotics; and Senior School students study machine learning, computer vision, and ROS2 within our dedicated 4,500 sq ft Robotics Lab.',
  },
  {
    question: 'What makes your Smart Classrooms different?',
    answer: 'Our classrooms are designed with bioclimatic architecture, daylight harvesting, and fresh-air CO2 filtration. Each room features 86-inch 4K multi-touch collaboration walls, wireless device streaming, dual-camera hybrid lecture capture, and modular sit-to-stand ergonomic desks that adapt instantly from lecture to collaborative workshop mode.',
  },
  {
    question: 'Do you provide safe school transportation?',
    answer: 'Yes. Everfield operates a comprehensive fleet of modern, air-conditioned school buses equipped with seatbelts, live GPS telemetry, CCTV, and trained bus attendants across all major residential zones in the metropolitan area. Parents can track routes in real time via our school mobile portal.',
  },
  {
    question: 'What sports facilities and athletic programs are available?',
    answer: 'Our Athletics & Wellness complex includes an indoor FIBA sprung-wood basketball arena, 4 badminton courts, an 8-lane 25-meter heated swimming pool with touchpads, a 400m all-weather running track, full-size floodlit football pitch, tennis courts, and a dedicated yoga and conditioning studio.',
  },
  {
    question: 'What extracurricular clubs and leadership opportunities exist?',
    answer: 'We offer over 30 faculty-mentored co-curricular clubs including Model United Nations, Robotics Guild, Philharmonic Orchestra, Entrepreneurship Incubator, Climate Action Taskforce, Competitive Coding, and Theatre Troupe. Students also engage in House leadership, community service, and peer tutoring.',
  },
  {
    question: 'How can I schedule a personalized campus tour?',
    answer: 'You can easily schedule a personalized visit using our online "Book a Visit" calendar on this website, or by emailing our Admissions Office directly at grow@everfield.sch. We offer private morning tours Monday through Friday from 8:00 AM to 4:00 PM, as well as selected Saturday open houses.',
  },
  {
    question: 'What documents are required to begin an application?',
    answer: 'To initiate an application, you will need: student identification/passport copy, the previous two years of academic transcripts/report cards, an immunization record, and one confidential teacher recommendation. Additional creative portfolios or athletic credentials may also be submitted.',
  },
];
