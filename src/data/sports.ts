import IMAGES from '../assets/images';

export interface SportProgram {
  id: string;
  name: string;
  category: 'Team Sports' | 'Individual & Racquet' | 'Aquatics & Athletics' | 'Mind & Wellness';
  description: string;
  levels: string;
  facilities: string;
  achievements: string;
}

export const SPORTS_PHILOSOPHY = {
  tagline: 'Strong minds. Healthy bodies.',
  description: 'Athletics at Everfield is built on sportsmanship, physical resilience, tactical intelligence, and lifelong wellness habits. Whether competing in international varsity tournaments or discovering personal fitness, every student has a pathway to flourish.',
};

export const SPORTS_PROGRAMS: SportProgram[] = [
  {
    id: 'basketball',
    name: 'Varsity & Academy Basketball',
    category: 'Team Sports',
    description: 'Competitive FIBA regulation program with specialized coaching in tactical offensive sets, defensive transitions, and individual shooting mechanics.',
    levels: 'Junior Varsity (U14) & Senior Varsity (U18)',
    facilities: 'Indoor Olympic Pavilion Sprung Wood Court',
    achievements: 'Regional Independent Schools Champions 2024 & 2025',
  },
  {
    id: 'football',
    name: 'Association Football (Soccer)',
    category: 'Team Sports',
    description: 'Comprehensive football curriculum teaching spatial awareness, passing accuracy, set-piece execution, and physical endurance on FIFA-standard turf.',
    levels: 'U11, U14, U16 & Open Senior Varsity',
    facilities: 'Full-Size All-Weather Floodlit AstroTurf Pitch',
    achievements: 'National School League Finalist',
  },
  {
    id: 'swimming',
    name: 'Aquatics & Competitive Swimming',
    category: 'Aquatics & Athletics',
    description: 'Stroke refinement, starts, turns, and endurance training in an 8-lane 25-meter climate-controlled pool with underwater video stroke analysis.',
    levels: 'Learn-to-Swim to Elite High-Performance Squad',
    facilities: '8-Lane 25m Heated Pool with Omega Touchpads',
    achievements: '14 Individual Age-Group Records',
  },
  {
    id: 'badminton-tennis',
    name: 'Badminton & Racquet Sports',
    category: 'Individual & Racquet',
    description: 'High-agility training focusing on footwork speed, wrist deception, smash power, and tactical match play across indoor and outdoor courts.',
    levels: 'Beginner, Intermediate & Tournament Squad',
    facilities: '4 BWF-Certified Indoor Badminton Courts & 2 Tennis Courts',
    achievements: 'Inter-School Gold Medalists in Singles and Doubles',
  },
  {
    id: 'athletics-track',
    name: 'Track & Field Athletics',
    category: 'Aquatics & Athletics',
    description: 'Disciplined training in sprint mechanics, middle-distance pacing, relays, high jump, long jump, and throwing events under certified athletic coaches.',
    levels: 'All Grades (Annual House Athletics Carnival)',
    facilities: '400m Synthetic All-Weather Running Track',
    achievements: 'Top 3 Aggregate Standing in Inter-School Meet',
  },
  {
    id: 'yoga-mindfulness',
    name: 'Mindful Yoga & Mobility Conditioning',
    category: 'Mind & Wellness',
    description: 'Calming restorative breathwork, core stabilization, flexibility routines, and posture correction designed to counter study fatigue and enhance mental clarity.',
    levels: 'Open to all students & faculty',
    facilities: 'Bamboo Flooring Yoga Sanctuary & Studio',
    achievements: 'Integrated daily wellness offering for Senior school exams',
  },
];

export const WELLBEING_PILLARS = [
  {
    title: 'Mindful Balance',
    description: 'Dedicated weekly sessions in somatic grounding, breathwork, and meditation to cultivate calm emotional equilibrium.',
  },
  {
    title: 'Licensed Psychological Counselors',
    description: 'Confidential 1-on-1 pastoral care supporting students through academic transitions, social dynamics, and personal growth.',
  },
  {
    title: 'Pediatric Nutrition & Hydration',
    description: 'Educating young minds on fueling their cognitive and physical performance through wholesome, fresh nutritional choices.',
  },
  {
    title: 'Rest & Digital Wellbeing',
    description: 'Guidelines and campus initiatives ensuring healthy sleep hygiene, screen-time balance, and outdoor restorative recreation.',
  },
];
