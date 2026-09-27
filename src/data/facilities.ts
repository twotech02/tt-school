import IMAGES from '../assets/images';

export interface Facility {
  id: string;
  title: string;
  category: 'Learning' | 'Technology' | 'Sports' | 'Arts' | 'Wellbeing' | 'Campus';
  description: string;
  image: string;
  features: string[];
  capacity?: string;
  location?: string;
}

export const FACILITY_CATEGORIES = [
  'All',
  'Learning',
  'Technology',
  'Sports',
  'Arts',
  'Wellbeing',
  'Campus',
] as const;

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'smart-classrooms',
    title: 'Smart Classrooms',
    category: 'Learning',
    description: 'Acoustically treated, natural-light flooded flexible classrooms outfitted with 4K touch display walls, wireless student device streaming, and modular ergonomic furniture that shifts seamlessly between seminar lectures and group collaborations.',
    image: IMAGES.smartClassroom,
    features: [
      'Interactive 86-inch 4K multi-touch displays',
      'Dual-camera hybrid learning broadcast stations',
      'Flexible ergonomic mobile sit-to-stand desks',
      'Filtered fresh air circulation & daylight harvesting',
    ],
    capacity: '24 students per classroom',
    location: 'Academic Pavilions A & B',
  },
  {
    id: 'robotics-innovation-lab',
    title: 'Advanced Robotics & STEM Lab',
    category: 'Technology',
    description: 'A dedicated 4,500 sq ft innovation hangar featuring automated testing arenas, precision CNC machining, rapid prototyping 3D printing farms, electronics soldering stations, and modular robotics test tracks for international FIRST Tech and VEX competitions.',
    image: IMAGES.roboticsLab,
    features: [
      'Industrial 3D printers and laser cutters',
      'Dedicated robotics combat & obstacle challenge arena',
      'Oscilloscopes, logic analyzers & solder stations',
      'High-performance CAD/CAM AI modeling workstations',
    ],
    capacity: '40 student inventors',
    location: 'Innovation Center, Level 2',
  },
  {
    id: 'science-laboratories',
    title: 'Advanced Science Laboratories',
    category: 'Learning',
    description: 'University-specification physical, chemical, and biological laboratories equipped with laminar flow hoods, analytical spectrophotometers, digital sensor interfaces, and safety gear for hands-on research.',
    image: IMAGES.scienceLab,
    features: [
      'Individual safety fume hoods & eye wash stations',
      'Digital micro-spectrophotometry & PCR machines',
      'Real-time Vernier sensor data capture arrays',
      'Adjoining specimen prep and darkroom bays',
    ],
    capacity: '28 researchers',
    location: 'Science Wing C',
  },
  {
    id: 'olympic-sports-complex',
    title: 'Indoor Sports Pavilion & Arena',
    category: 'Sports',
    description: 'An expansive multi-sport arena boasting FIBA-standard sprung beechwood courts, high-clearance architectural ceiling trusses, indoor running track, electronic scoreboards, and retractable spectator seating.',
    image: IMAGES.sportsComplex,
    features: [
      'Full-court basketball, volleyball & 4 badminton courts',
      'FIBA approved sprung timber flooring system',
      'Digital multi-angle performance analysis cameras',
      'Climate-controlled indoor environmental control',
    ],
    capacity: '650 spectators',
    location: 'Athletics & Wellness Center',
  },
  {
    id: 'performing-arts-center',
    title: 'Everfield Performing Arts Hall',
    category: 'Arts',
    description: 'A 600-seat professional auditorium with symphonic acoustics, motorized fly loft, computerized stage lighting grids, and back-of-house green rooms and rehearsal wings.',
    image: IMAGES.auditorium,
    features: [
      'Steinway model D concert grand piano',
      'Digital 64-channel sound mixing console',
      'Motorized acoustic dampening banners',
      'Orchestra pit & backstage dressing suites',
    ],
    capacity: '600 seats',
    location: 'Arts Quadrant, Level 1',
  },
  {
    id: 'digital-library',
    title: 'Discovery Library & Information Commons',
    category: 'Learning',
    description: 'A light-filled multi-tier atrium housing over 45,000 physical volumes, private study pods, media creation booths, and subscription access to major international academic repositories (JSTOR, Springer, Nature).',
    image: IMAGES.library,
    features: [
      'Quiet study carrels with power & high-speed Wi-Fi 6',
      'Podcast and video recording sound booths',
      'Curated global literature and academic journals',
      'Comfortable reading lounges overlooking the courtyard',
    ],
    capacity: '180 readers',
    location: 'Central Campus Quad',
  },
  {
    id: 'campus-courtyards',
    title: 'Architectural Courtyard & Gardens',
    category: 'Campus',
    description: 'Serene, bioclimatic courtyards and covered organic walkways connecting academic wings, shaded by native canopy trees with outdoor learning amphitheaters and Wi-Fi enabled reflection gardens.',
    image: IMAGES.heroCampus,
    features: [
      'Weather-protected architectural breezeways',
      'Tiered stone amphitheater for open-air discussions',
      'Botanical learning gardens and rain collection ponds',
      'Solar-powered outdoor laptop charging points',
    ],
    capacity: '500+ community members',
    location: 'Campus Heart',
  },
  {
    id: 'student-wellbeing-center',
    title: 'Mindfulness & Student Wellbeing Suite',
    category: 'Wellbeing',
    description: 'A dedicated quiet sanctuary featuring private consultation rooms for licensed school psychologists, a sensory calming lounge, yoga and breathwork studio, and peer advisory meeting spaces.',
    image: IMAGES.happyStudents,
    features: [
      'Full-time certified counselors and clinical psychologists',
      'Acoustically isolated private consultation suites',
      'Daily guided mindfulness & meditation sessions',
      'Ergonomic zero-gravity relaxation chairs',
    ],
    capacity: '35 students',
    location: 'Student Hub, Level 3',
  },
  {
    id: 'nutritious-dining-commons',
    title: 'Artisan Dining Commons & Cafeteria',
    category: 'Campus',
    description: 'An open-kitchen international dining hall offering chef-crafted, nutritionally balanced meals using farm-to-table organic ingredients, accommodating vegetarian, halal, gluten-free, and allergen-safe preferences.',
    image: IMAGES.cafeteria,
    features: [
      'Seasonal menus designed by pediatric nutritionists',
      'Live salad, wok, and bakery culinary stations',
      'Nut-free and allergen-separated preparation areas',
      'High-speed touchless meal registration',
    ],
    capacity: '400 diners',
    location: 'Campus Center, Ground Level',
  },
];
