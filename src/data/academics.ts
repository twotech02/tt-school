import IMAGES from '../assets/images';

export interface AcademicStage {
  id: string;
  slug: string;
  title: string;
  grades: string;
  ageRange: string;
  summary: string;
  description: string;
  learningObjectives: string[];
  keySubjects: string[];
  features: string[];
  image: string;
  galleryImages?: string[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export const ACADEMIC_STAGES: AcademicStage[] = [
  {
    id: 'early-years',
    slug: 'early-years',
    title: 'Early Years',
    grades: 'Kindergarten 1 – 2',
    ageRange: 'Ages 3 – 6',
    summary: 'Creating a positive first learning experience where children develop curiosity, confidence, and independence.',
    description: 'In the Early Years at Everfield, learning is natural, joyful, and immersive. Through play-based inquiry, experiential exploration, and guided Montessori principles, our youngest learners build strong foundational language, motor, and social skills in nurturing light-filled spaces.',
    learningObjectives: [
      'Foster emotional resilience, empathy, and social cooperation',
      'Develop phonemic awareness, vocabulary, and early numeracy',
      'Encourage motor coordination through sensory play and nature exploration',
      'Cultivate open curiosity and joy of asking inquisitive questions',
    ],
    keySubjects: [
      'Early Literacy & Storytelling',
      'Foundational Numeracy & Spatial Play',
      'Nature & Sensory Discovery',
      'Creative Arts & Movement',
      'Bilingual Introduction (English & Mandarin)',
    ],
    features: [
      '1:7 Educator-to-student nurturing ratio',
      'Dedicated nature garden and sensory water pavilion',
      'Child-centric ergonomic learning studios',
      'Continuous developmental observation reports',
    ],
    image: IMAGES.earlyYears[0],
    galleryImages: IMAGES.earlyYears,
    quote: {
      text: 'Our children do not just prepare for school; they develop a vibrant, lifelong relationship with wonder and discovery.',
      author: 'Clara Vance',
      role: 'Head of Early Years',
    },
  },
  {
    id: 'elementary-school',
    slug: 'elementary',
    title: 'Elementary School',
    grades: 'Grades 1 – 5',
    ageRange: 'Ages 6 – 11',
    summary: 'Building strong academic foundations through exploration, creativity, and collaboration.',
    description: 'Our Elementary program integrates inquiry-driven curricula with structured academic rigor. Students transition seamlessly from concrete exploration into abstract conceptual thinking, developing strong literacy, mathematical reasoning, scientific curiosity, and foundational digital literacy.',
    learningObjectives: [
      'Master deep literacy, expository writing, and expressive communication',
      'Establish robust conceptual mathematical foundations and problem-solving',
      'Introduce the scientific method, robotics basics, and computational thinking',
      'Strengthen teamwork, cultural empathy, and responsible digital citizenship',
    ],
    keySubjects: [
      'English Language Arts & Literature',
      'Inquiry Mathematics & Applied Geometry',
      'Integrated Science & Environmental Studies',
      'Foundational Coding & Computational Logic',
      'World Languages & Global Perspectives',
      'Visual Arts & Orchestral Music',
      'Physical Education & Health',
    ],
    features: [
      'Interactive Smart Classrooms with touch learning walls',
      'Junior Maker Lab with early block coding and Lego robotics',
      'Outdoor science ecology pond and greenhouse',
      'Student-led inquiry exhibitions every semester',
    ],
    image: IMAGES.elementary,
    quote: {
      text: 'Elementary years at Everfield provide the intellectual anchor that allows children to think critically and dare to innovate.',
      author: 'Marcus Bennett',
      role: 'Dean of Elementary Academics',
    },
  },
  {
    id: 'middle-school',
    slug: 'middle-school',
    title: 'Middle School',
    grades: 'Grades 6 – 8',
    ageRange: 'Ages 11 – 14',
    summary: 'Supporting students as they become more independent, develop critical thinking, and discover their passions.',
    description: 'Middle school is a pivotal time of transition and intellectual awakening. At Everfield, we challenge students to connect theoretical classroom knowledge with real-world problems. With dedicated subject specialists, students dive into science laboratories, design thinking challenges, debate, and interdisciplinary investigations.',
    learningObjectives: [
      'Transition from guided inquiry to rigorous independent research',
      'Master algebra, data representation, and experimental science methods',
      'Build algorithmic thinking with Python, mechanical design, and robotics',
      'Cultivate nuanced ethical perspective, public speaking, and personal wellbeing',
    ],
    keySubjects: [
      'Advanced Mathematics (Algebra & Geometry)',
      'Physics, Chemistry & Biology Laboratory Sciences',
      'Humanities, World History & Social Systems',
      'Robotics, Microcontroller Electronics & Python',
      'Literature & Critical Analysis',
      'Modern Foreign Languages',
      'Performing Arts (Drama & Concert Band)',
      'Leadership & Physical Athletics',
    ],
    features: [
      'Dedicated Grade 6-8 STEM innovation laboratory wing',
      'Middle School House Advisory system for personalized wellbeing',
      'Inter-school Model UN and debate championships',
      'Elective rotation in digital arts, media production, and entrepreneurship',
    ],
    image: IMAGES.middleSchool,
    quote: {
      text: 'We guide adolescents through their most transformative years by providing rigorous intellectual challenge alongside unwavering emotional support.',
      author: 'Dr. Elena Rostova',
      role: 'Director of Middle Years',
    },
  },
  {
    id: 'senior-school',
    slug: 'senior-school',
    title: 'Senior School',
    grades: 'Grades 9 – 12',
    ageRange: 'Ages 14 – 18',
    summary: 'Preparing students for higher education with academic guidance, real-world skills, and personal support.',
    description: 'Our Senior School offers an internationally accredited pre-university curriculum designed to unlock top global university admissions and future leadership. Students undertake rigorous AP and IB diploma pathways, combined with advanced research capstones, university counselling, and leadership apprenticeships.',
    learningObjectives: [
      'Achieve top-tier pre-university academic credentials (IB Diploma & AP)',
      'Produce university-caliber capstone research dissertations and prototypes',
      'Demonstrate leadership in student government, social venture, and innovation',
      'Navigate college application portfolios with 1-on-1 university counselors',
    ],
    keySubjects: [
      'AP / IB Higher Level Mathematics & Calculus',
      'Advanced Physics, Chemistry, Molecular Biology',
      'Artificial Intelligence, Machine Learning & Computer Science',
      'Economics, Business Management & Entrepreneurship',
      'World Literature, Philosophy & Theory of Knowledge',
      'International Relations & Global Geopolitics',
      'Fine Arts, Portfolio Studio & Digital Media',
    ],
    features: [
      '100% acceptance to premier worldwide universities (Ivy League, Oxbridge, NUS)',
      'Individual college counseling from Grade 9 onwards',
      'Silicon Valley & Global Tech Mentorship opportunities',
      'High-performance university-grade laboratories and research facilities',
    ],
    image: IMAGES.seniorSchool,
    quote: {
      text: 'Everfield graduates do not merely enter prestigious universities; they enter as confident contributors equipped to solve complex global challenges.',
      author: 'Julian Sterling',
      role: 'Head of Senior School & University Guidance',
    },
  },
];

export const ACADEMIC_PILLARS = [
  {
    number: '01',
    title: 'Inquiry-Driven Pedagogy',
    description: 'We believe genuine understanding begins with a question. Students investigate real-world phenomena through rigorous scientific and analytical methods.',
  },
  {
    number: '02',
    title: 'Future-Ready Technology Integration',
    description: 'Technology is not an add-on; it is woven into daily learning through AI literacy, programming, virtual labs, and data-driven insights.',
  },
  {
    number: '03',
    title: 'Personalized Learning Pathways',
    description: 'Every student learns differently. Diagnostic analytics and small classroom cohorts ensure tailored academic acceleration and targeted support.',
  },
  {
    number: '04',
    title: 'Holistic Character & Leadership',
    description: 'Academic excellence is paired with integrity, community responsibility, emotional mindfulness, and collaborative leadership.',
  },
];
