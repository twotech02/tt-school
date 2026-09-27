export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: { label: string; href: string; description?: string }[];
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Academics',
    href: '/academics',
    children: [
      { label: 'Overview', href: '/academics', description: 'Academic philosophy and curriculum structure' },
      { label: 'Early Years', href: '/academics/early-years', description: 'Ages 3-6: Curiosity, confidence & discovery' },
      { label: 'Elementary School', href: '/academics/elementary', description: 'Grades 1-5: Core foundations & collaborative inquiry' },
      { label: 'Middle School', href: '/academics/middle-school', description: 'Grades 6-8: Critical thinking & personal passions' },
      { label: 'Senior School', href: '/academics/senior-school', description: 'Grades 9-12: University readiness & global credentials' },
    ],
  },
  {
    label: 'Innovation',
    href: '/innovation',
    children: [
      { label: 'Innovation Hub', href: '/innovation', description: 'AI, coding, maker spaces & student venture projects' },
      { label: 'Robotics & STEM', href: '/robotics', description: 'Modular robotics, IoT, competitions & labs' },
    ],
  },
  {
    label: 'Campus',
    href: '/facilities',
  },
  {
    label: 'Student Life',
    href: '/student-life',
    children: [
      { label: 'Student Life Overview', href: '/student-life', description: 'Clubs, house system & school traditions' },
      { label: 'Athletics & Sports', href: '/sports', description: 'Competitive sports & holistic wellness' },
      { label: 'Arts & Culture', href: '/arts', description: 'Music, drama, fine arts & public speaking' },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const SCHOOL_CONTACT = {
  name: 'Everfield International School',
  tagline: 'Learn. Explore. Create. Lead.',
  address: '24 Willow Lane, Singapore 238841',
  email: 'grow@everfield.sch',
  admissionsEmail: 'admissions@everfield.sch',
  phone: '+1 652 988 2182',
  hours: 'Monday – Friday: 8:00 AM – 4:00 PM',
  established: 2001,
  stats: {
    ratio: '1:15',
    clubsCount: '30+',
    universityAcceptance: '100%',
    stemAccreditation: 'Tier-1 International',
  },
};
