import IMAGES from '../assets/images';

export interface MeaningfulLesson {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
}

export const MEANINGFUL_LESSONS: MeaningfulLesson[] = [
  {
    id: 'sports-athletics',
    title: 'Sports & Athletics',
    category: 'Physical Resilience',
    description: 'Developing tactical teamwork, grit, and cardiovascular fitness across 12 competitive disciplines.',
    image: IMAGES.sportsBasketball,
    href: '/sports',
  },
  {
    id: 'stem-robotics',
    title: 'STEM & Robotics',
    category: 'Technological Mastery',
    description: 'Transforming algorithms and mechanical components into autonomous machines and AI models.',
    image: IMAGES.roboticsWorkshop,
    href: '/robotics',
  },
  {
    id: 'arts-music',
    title: 'Arts & Music',
    category: 'Creative Expression',
    description: 'Refining individual artistic voice across orchestral performance, theater, ceramic sculpture, and digital media.',
    image: IMAGES.artsMusic,
    href: '/arts',
  },
  {
    id: 'leadership-programs',
    title: 'Leadership & MUN',
    category: 'Civic Responsibility',
    description: 'Challenging students to debate international diplomacy, manage social enterprises, and lead community initiatives.',
    image: IMAGES.leadershipModelUN,
    href: '/student-life',
  },
];

export const CLUBS_DATA = [
  {
    name: 'Model United Nations (MUN)',
    category: 'Leadership & Debate',
    description: 'Debating global humanitarian crises, draft resolutions, and international security protocols at regional conferences.',
  },
  {
    name: 'Everfield Robotics Guild',
    category: 'STEM & Engineering',
    description: 'Designing autonomous robots and competing in FIRST Tech Challenge and VEX Robotics World Championships.',
  },
  {
    name: 'Philharmonic Orchestra & Choir',
    category: 'Music & Performance',
    description: 'Performing classical masterworks and modern symphonic compositions in our 600-seat acoustic concert hall.',
  },
  {
    name: 'Entrepreneurs Incubator',
    category: 'Business & Innovation',
    description: 'Mentored by startup founders to build pitch decks, validate product market fit, and run real school micro-ventures.',
  },
  {
    name: 'Eco-Action & Climate Taskforce',
    category: 'Sustainability',
    description: 'Managing the campus solar telemetry, native botanical gardens, composting systems, and local reforestation campaigns.',
  },
  {
    name: 'Coding & Cyber Guild',
    category: 'Computer Science',
    description: 'Competitive programming, algorithmic puzzle solving, cybersecurity capture-the-flag competitions, and app development.',
  },
  {
    name: 'Literary Review & Journalism',
    category: 'Publications',
    description: 'Publishing the quarterly school literary magazine, campus newspaper, and student investigative journalism.',
  },
  {
    name: 'Studio Arts & Photography Collective',
    category: 'Visual Arts',
    description: 'Mastering darkroom photography, digital illustration, ceramics, and curating the annual spring student art vernissage.',
  },
];

export const INDUSTRY_PARTNERS = [
  { name: 'Sony', label: 'SONY' },
  { name: 'Razer', label: 'RAZER' },
  { name: 'Google', label: 'Google' },
  { name: 'Apple', label: 'Apple' },
  { name: 'Microsoft', label: 'Microsoft' },
  { name: 'Cisco', label: 'CISCO' },
];
